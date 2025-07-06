const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Email endpoint
app.post('/send-order-email', async (req, res) => {
    const { productName } = req.body;

    // Configure Nodemailer (Gmail example)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your@gmail.com', // Your Gmail
            pass: 'your-app-password', // Generate an App Password (if 2FA is enabled)
        },
    });

    const mailOptions = {
        from: 'gmxm771@gmail.com',
        to: 'gmxm771@gmail.com', // Fixed recipient
        subject: `New Order: ${productName}`,
        text: `A customer wants to buy: ${productName}.`,
        html: `<p>A customer wants to buy: <b>${productName}</b>.</p>`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Order email sent to gmxm771@gmail.com!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to send email.' });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));