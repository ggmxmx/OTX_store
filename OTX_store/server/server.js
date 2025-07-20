import express from 'express';
import { open } from 'sqlite'; // تم الإصلاح
import sqlite3 from 'sqlite3';
import nodemailer from 'nodemailer';
import twilio from 'twilio';
import { WebSocketServer } from 'ws';
import dotenv from 'dotenv';
import Stripe from 'stripe';
import rateLimit from 'express-rate-limit';
import cors from 'cors';

dotenv.config();

// التحقق من وجود المتغيرات البيئية المطلوبة
const requiredEnvVars = [
  'STRIPE_SECRET_KEY',
  'TWILIO_SID', 
  'TWILIO_TOKEN',
  'EMAIL_USER',
  'EMAIL_PASS',
  'STORE_OWNER_EMAIL',
  'STORE_OWNER_PHONE',
  'ADMIN_SECRET'
];

for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    console.error(`❌ متغير البيئة ${envVar} مطلوب`);
    process.exit(1);
  }
}

// تهيئة التطبيق
const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 دقيقة
  max: 100 // حد أقصى 100 طلب لكل IP
});
app.use(limiter);

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// دالة للتحقق من صحة البيانات
function validateOrderData(data) {
  const { name, email, orderDetails } = data;
  
  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    throw new Error('اسم العميل مطلوب ويجب أن يكون على الأقل حرفين');
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    throw new Error('البريد الإلكتروني غير صحيح');
  }
  
  if (!orderDetails || typeof orderDetails !== 'object') {
    throw new Error('تفاصيل الطلب مطلوبة');
  }
  
  return true;
}

// دالة لمعالجة الأخطاء
function handleError(error, context = '') {
  console.error(`❌ خطأ ${context}:`, error.message);
  console.error(error.stack);
}

// إنشاء Payment Intent
app.post("/create-payment-intent", async (req, res) => {
  const { amount } = req.body;

  try {
    if (!amount || amount < 50) { // الحد الأدنى 50 سنت
      return res.status(400).json({ error: 'المبلغ غير صحيح' });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount), // تأكد من أن المبلغ رقم صحيح
      currency: "usd",
      metadata: {
        timestamp: new Date().toISOString()
      }
    });

    res.json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    handleError(error, 'إنشاء Payment Intent');
    res.status(500).json({ error: 'فشل في إنشاء عملية الدفع' });
  }
});

// تهيئة WebSocket
const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('✅ عميل جديد متصل بـ WebSocket');
  
  ws.on('error', (error) => {
    handleError(error, 'WebSocket');
  });
  
  ws.on('close', () => {
    console.log('📴 عميل انقطع من WebSocket');
  });
});

// تهيئة قاعدة البيانات
async function initializeDatabase() {
  try {
    const db = await open({
      filename: './database.db',
      driver: sqlite3.Database
    });

    await db.exec(`
      CREATE TABLE IF NOT EXISTS orders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        customer_name TEXT NOT NULL,
        customer_email TEXT NOT NULL,
        customer_phone TEXT,
        customer_location TEXT, -- Added location field
        order_details TEXT NOT NULL,
        total_amount DECIMAL(10,2),
        status TEXT DEFAULT 'pending' CHECK(status IN ('pending', 'processing', 'completed', 'cancelled')),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // إنشاء فهرس للبحث السريع
    await db.exec(`
      CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
      CREATE INDEX IF NOT EXISTS idx_orders_created_at ON orders(created_at);
      CREATE INDEX IF NOT EXISTS idx_orders_email ON orders(customer_email);
    `);

    console.log('✅ تم تهيئة قاعدة البيانات بنجاح');
    return db;
  } catch (error) {
    handleError(error, 'تهيئة قاعدة البيانات');
    throw error;
  }
}

// تهيئة Twilio
const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

// تهيئة البريد الإلكتروني
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// دالة لإرسال الإشعارات
async function sendNotifications(orderData) {
  const { orderId, name, email, orderDetails, totalAmount, location } = orderData;
  
  const notifications = [];
  
  // إرسال البريد الإلكتروني
  try {
    const emailPromise = transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.STORE_OWNER_EMAIL,
      subject: `طلب جديد رقم #${orderId}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333; border-bottom: 2px solid #007bff;">طلب جديد 📦</h1>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>رقم الطلب:</strong> #${orderId}</p>
            <p><strong>العميل:</strong> ${name}</p>
            <p><strong>البريد:</strong> ${email}</p>
            <p><strong>الموقع:</strong> ${location}</p> <!-- Added location -->
            <p><strong>المبلغ الإجمالي:</strong> ${totalAmount || 'غير محدد'}</p>
          </div>
          <h3>تفاصيل الطلب:</h3>
          <pre style="background: #f1f1f1; padding: 15px; border-radius: 5px; overflow-x: auto;">${JSON.stringify(orderDetails, null, 2)}</pre>
          <div style="margin-top: 30px; text-align: center;">
            <a href="${process.env.STORE_DASHBOARD_URL || '#'}" 
               style="background: #007bff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px;">
              الذهاب إلى لوحة التحكم
            </a>
          </div>
          <hr style="margin: 30px 0;">
          <p style="color: #666; font-size: 12px;">تم إرسال هذا الإشعار تلقائياً من نظام إدارة المتجر</p>
        </div>
      `
    });
    notifications.push(emailPromise);
  } catch (error) {
    handleError(error, 'إعداد البريد الإلكتروني');
  }

  // إرسال واتساب
  try {
    const whatsappPromise = twilioClient.messages.create({
      body: `🛒 طلب جديد #${orderId}\n👤 ${name}\n📧 ${email}\n💰 $${totalAmount || 'غير محدد'}`,
      from: 'whatsapp:+14155238886',
      to: `whatsapp:${process.env.STORE_OWNER_PHONE}`
    });
    notifications.push(whatsappPromise);
  } catch (error) {
    handleError(error, 'إعداد واتساب');
  }

  // تنفيذ كل الإشعارات
  const results = await Promise.allSettled(notifications);
  
  results.forEach((result, index) => {
    const type = index === 0 ? 'البريد الإلكتروني' : 'واتساب';
    if (result.status === 'fulfilled') {
      console.log(`✅ تم إرسال إشعار ${type} بنجاح`);
      if (type === 'البريد الإلكتروني') {
        console.log('📬 Nodemailer Response:', result.value.response);
      }
    } else {
      console.error(`❌ فشل إرسال إشعار ${type}:`, result.reason?.message);
    }
  });
}

// تشغيل الخادم
async function startServer() {
  try {
    const db = await initializeDatabase();

    // endpoint لتسجيل الطلب الجديد
    app.post('/api/submit-order', async (req, res) => {
      try {
        // التحقق من صحة البيانات
        validateOrderData(req.body);
        
        const { name, email, orderDetails, totalAmount, customerPhone, location } = req.body;
        
        const result = await db.run(
          'INSERT INTO orders (customer_name, customer_email, customer_phone, customer_location, order_details, total_amount) VALUES (?, ?, ?, ?, ?, ?)',
          [
            name.trim(), 
            email.toLowerCase().trim(), 
            customerPhone || null,
            location || null, // Added location
            JSON.stringify(orderDetails),
            totalAmount || null
          ]
        );

        const orderId = result.lastID;
        
        // إرسال الإشعارات
        await sendNotifications({
          orderId,
          name,
          email,
          orderDetails,
          totalAmount,
          location // Added location
        });

        // إرسال إشعار WebSocket
        const wsMessage = JSON.stringify({
          type: 'NEW_ORDER',
          data: { 
            orderId, 
            name, 
            email,
            totalAmount,
            timestamp: new Date().toISOString()
          }
        });
        
        wss.clients.forEach(client => {
          if (client.readyState === client.OPEN) {
            client.send(wsMessage);
          }
        });

        res.status(201).json({ 
          success: true, 
          orderId,
          message: 'تم تسجيل الطلب بنجاح'
        });
        
      } catch (error) {
        handleError(error, 'تسجيل الطلب');
        
        if (error.message.includes('اسم العميل') || 
            error.message.includes('البريد الإلكتروني') || 
            error.message.includes('تفاصيل الطلب')) {
          return res.status(400).json({ error: error.message });
        }
        
        res.status(500).json({ error: 'حدث خطأ في تسجيل الطلب' });
      }
    });

    // endpoint لاستعراض الطلبات (محمي)
    app.get('/api/orders', async (req, res) => {
      try {
        const authHeader = req.headers.authorization;
        
        if (!authHeader || authHeader !== `Bearer ${process.env.ADMIN_SECRET}`) {
          return res.status(403).json({ error: 'غير مصرح' });
        }

        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 20;
        const offset = (page - 1) * limit;
        const status = req.query.status;

        let query = 'SELECT * FROM orders';
        let countQuery = 'SELECT COUNT(*) as total FROM orders';
        let params = [];

        if (status) {
          query += ' WHERE status = ?';
          countQuery += ' WHERE status = ?';
          params.push(status);
        }

        query += ' ORDER BY created_at DESC LIMIT ? OFFSET ?';
        params.push(limit, offset);

        const orders = await db.all(query, params);
        const countResult = await db.get(countQuery, status ? [status] : []);
        
        // تحويل order_details من JSON string إلى object
        const processedOrders = orders.map(order => ({
          ...order,
          order_details: JSON.parse(order.order_details)
        }));

        res.json({
          orders: processedOrders,
          pagination: {
            page,
            limit,
            total: countResult.total,
            pages: Math.ceil(countResult.total / limit)
          }
        });
        
      } catch (error) {
        handleError(error, 'استعراض الطلبات');
        res.status(500).json({ error: 'فشل في استعراض الطلبات' });
      }
    });

    // endpoint لتحديث حالة الطلب
    app.patch('/api/orders/:id/status', async (req, res) => {
      try {
        const authHeader = req.headers.authorization;
        
        if (!authHeader || authHeader !== `Bearer ${process.env.ADMIN_SECRET}`) {
          return res.status(403).json({ error: 'غير مصرح' });
        }

        const { id } = req.params;
        const { status } = req.body;
        
        const validStatuses = ['pending', 'processing', 'completed', 'cancelled'];
        if (!validStatuses.includes(status)) {
          return res.status(400).json({ error: 'حالة غير صحيحة' });
        }

        const result = await db.run(
          'UPDATE orders SET status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
          [status, id]
        );

        if (result.changes === 0) {
          return res.status(404).json({ error: 'الطلب غير موجود' });
        }

        res.json({ success: true, message: 'تم تحديث الحالة بنجاح' });
        
      } catch (error) {
        handleError(error, 'تحديث حالة الطلب');
        res.status(500).json({ error: 'فشل في تحديث الحالة' });
      }
    });

    // endpoint للحصول على إحصائيات
    app.get('/api/stats', async (req, res) => {
      try {
        const authHeader = req.headers.authorization;
        
        if (!authHeader || authHeader !== `Bearer ${process.env.ADMIN_SECRET}`) {
          return res.status(403).json({ error: 'غير مصرح' });
        }

        const stats = await db.all(`
          SELECT 
            status,
            COUNT(*) as count,
            COALESCE(SUM(total_amount), 0) as total_amount
          FROM orders 
          GROUP BY status
        `);

        const totalOrders = await db.get('SELECT COUNT(*) as count FROM orders');
        const totalRevenue = await db.get('SELECT COALESCE(SUM(total_amount), 0) as revenue FROM orders WHERE status = "completed"');

        res.json({
          statusStats: stats,
          totalOrders: totalOrders.count,
          totalRevenue: totalRevenue.revenue
        });
        
      } catch (error) {
        handleError(error, 'استعراض الإحصائيات');
        res.status(500).json({ error: 'فشل في استعراض الإحصائيات' });
      }
    });

    // Middleware لمعالجة الأخطاء العامة
    app.use((err, req, res, next) => {
      handleError(err, 'خطأ عام في التطبيق');
      res.status(500).json({ error: 'حدث خطأ في الخادم' });
    });

    // تشغيل الخادم
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`🚀 الخادم يعمل على المنفذ ${PORT}`);
      console.log(`📡 WebSocket يعمل على المنفذ 8080`);
    });

    // معالجة إغلاق التطبيق بشكل نظيف
    process.on('SIGINT', async () => {
      console.log('🛑 إغلاق الخادم...');
      await db.close();
      wss.close();
      process.exit(0);
    });

  } catch (error) {
    handleError(error, 'تشغيل الخادم');
    process.exit(1);
  }
}

startServer();