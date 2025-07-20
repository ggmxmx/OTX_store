import React from "react";
import MKStar from './Images/MK-Star.png';
import MKStar61Black from './Images/MK-Star61_black.jpg';
import MKStar61White from './Images/MK-Star61_white.jpg';
import MKStar75Black from './Images/MK-Star75_black.jpg';
import MKStar75White from './Images/MK-Star75_white.jpg';
import fantasyWhite from './Images/fantasy-white.png'
import fantasyBlack from './Images/Fantasy-black.png';
import V80 from './Images/mouse-V80.png';

import MKStarImages from './Images/MKstar_folder/MK-star-images.js';
import FantasyBImages from "./Images/FantasyB_folder/FantasyB.jsx";
import FantasyWImages from "./Images/FantasyW_folder/FantasyW.jsx";
import MKstar61BImages from "./Images/MKstar61B_folder/MKstar61B.jsx";
import MKstar75BImages from "./Images/MKstar75B_folder/MKstar75B.jsx";
import MKstar75WImages from "./Images/MKstar75W_folder/MKstar75W.jsx";
import V80Images from "./Images/V80_folder/V80.jsx";
import MKstar61W from "./Images/MKstar61W_folder/MKstar61W.js";


let items = [
  {
    id: 1,
    name: "MK Star",
    price: 14.900,
    image: MKStar,
    features: [
      "كيبورد ميكانيكي بنسبة 80%",
      "تصميم مريح مع ملف تعريف OEM وأقدام دعم بمستويين",
      "أغطية مفاتيح ABS مزدوجة الطبقات مع لوحة تجميد",
      "إضاءة خلفية أحادية اللون رائعة مع أوضاع إضاءة مختلفة وسطوع مختلف",
      "يدعم خاصية N-key rollover",
      "يدعم مفاتيح الوظائف المركبة FN"
    ],
    specification: [
      "عدد الأزرار: 61",
      "الإضاءة: لون واحد",
      "الوزن: 880 جرام (1.94 رطل)",
      "نوع الاتصال: سلكي",
      "الواجهة: USB",
      "طول الكابل: تقريباً 1.8 متر (5.9 قدم)",
    ],
    showImages: MKStarImages,
    isOrdered: false
  },

  {
    id: 2,
    name: "MK Star 61",
    price:13.900,
    image: MKStar61Black,
    features: [
      "كيبورد ميكانيكي بنسبة 60% مع 61 مفتاح",
      "تصميم مريح مع ملف تعريف OEM",
      "أغطية مفاتيح ABS مزدوجة الطلقات",
      "يدعم جميع مفاتيح التبديل السريع (مثبت على لوحة ثلاثية الدبابيس) وN-key rollover",
      "كابل توصيل USB A-C قابل للفصل",
      "إضاءة بلون واحد مع أوضاع إضاءة مختلفة وسطوع مختلف",
      "يدعم مفاتيح الوظائف المركبة FN"
    ],
    specification: [
      "عدد الأزرار: 61",
      "الإضاءة: لون واحد",
      "الوزن: 515 جرام (1.13 رطل)",
      "الحجم: 290 × 100 × 30 مم (11.4 × 3.9 × 1.6 بوصة)",
      "نوع الاتصال: سلكي",
      "الواجهة: USB",
      "طول الكابل: تقريباً 1.5 متر (4.9 قدم)",
    ],
    showImages: MKstar61BImages,
    isOrdered: false
  },

  {
    id: 3,
    name: "MK Star 61",
    price: 13.900,
    image: MKStar61White,
    features: [
      "كيبورد ميكانيكي بنسبة 60% مع 61 مفتاح",
      "تصميم مريح مع ملف تعريف OEM",
      "أغطية مفاتيح ABS مزدوجة الطلقات",
      "يدعم جميع مفاتيح التبديل السريع (مثبت على لوحة ثلاثية الدبابيس) وN-key rollover",
      "كابل توصيل USB A-C قابل للفصل",
      "إضاءة بلون واحد مع أوضاع إضاءة مختلفة وسطوع مختلف",
      "يدعم مفاتيح الوظائف المركبة FN"
    ],
    specification: [
      "عدد الأزرار: 61",
      "الإضاءة: لون واحد",
      "الوزن: 515 جرام (1.13 رطل)",
      "الحجم: 290 × 100 × 30 مم (11.4 × 3.9 × 1.6 بوصة)",
      "نوع الاتصال: سلكي",
      "الواجهة: USB",
      "طول الكابل: تقريباً 1.5 متر (4.9 قدم)",
    ],
    showImages: MKstar61W,
    isOrdered: false
  },

  {
    id: 4,
    name: "MK Star 75",
    price: 14.900,
    image: MKStar75Black,
    features: [
      "كيبورد ميكانيكي بنسبة 75% مع 83 مفتاح",
      "تصميم مريح مع ملف تعريف OEM وأقدام دعم بمستويين",
      "أغطية مفاتيح ABS مزدوجة الطلقات",
      "إضاءة خلفية زرقاء مع أوضاع إضاءة مختلفة وسطوع مختلف",
      "كابل توصيل USB A-C قابل للفصل",
      "مقبض متعدد الوظائف للتحكم في مستوى الصوت والإضاءة الخلفية",
      "كتابة صامتة مع طبقة امتصاص الصوت",
      "يدعم خاصية N-key rollover ومفاتيح FN المركبة",
    ],
    specification: [
      "عدد الأزرار: 83",
      "الإضاءة: لون أزرق",
      "الوزن: 606+5 جرام (1.34 رطل)",
      "الحجم: 335 × 141 × 39 مم (13.2 × 5.6 × 1.5 بوصة)",
      "نوع الاتصال: سلكي",
      "الواجهة: USB",
      "طول الكابل: تقريباً 1.5 متر (4.9 قدم)",
    ],
    showImages: MKstar75BImages,
    isOrdered: false
  },

  {
    id: 8,
    name: "MK Star 75",
    price: 14.900,
    image: MKStar75White,
    features: [
      "كيبورد ميكانيكي بنسبة 75% مع 83 مفتاح",
      "تصميم مريح مع ملف تعريف OEM وأقدام دعم بمستويين",
      "أغطية مفاتيح ABS مزدوجة الطلقات",
      "إضاءة خلفية زرقاء مع أوضاع إضاءة مختلفة وسطوع مختلف",
      "كابل توصيل USB A-C قابل للفصل",
      "مقبض متعدد الوظائف للتحكم في مستوى الصوت والإضاءة الخلفية",
      "كتابة صامتة مع طبقة امتصاص الصوت",
      "يدعم خاصية N-key rollover ومفاتيح FN المركبة",
    ],
    specification: [
      "عدد الأزرار: 83",
      "الإضاءة: لون أزرق",
      "الوزن: 606+5 جرام (1.34 رطل)",
      "الحجم: 335 × 141 × 39 مم (13.2 × 5.6 × 1.5 بوصة)",
      "نوع الاتصال: سلكي",
      "الواجهة: USB",
      "طول الكابل: تقريباً 1.5 متر (4.9 قدم)",
    ],
    showImages: MKstar75WImages,
    isOrdered: false
  },

  {
    id: 5,
    name: "Fantasy microphone",
    price: 9.900,
    image: fantasyWhite,
    features: [
      "ميكروفون USB سلكي",
      "إضاءة RGB",
      "كتم الصوت بضغطة واحدة",
      "التقاط صوت متعدد الاتجاهات",
      "منفذ سماعة رأس 3.5 مم",
      "شريحة صوت احترافية USB 2.0",
      "تقنية تقليل الضوضاء تلقائياً",
    ],
    specification: [
      "نوع الاتصال: USB سلكي",
      "استجابة تردد السماعة: 20Hz-20KHz",
      "نطاق تردد الميكروفون: 100Hz - 16KHz",
      "حساسية الميكروفون: -38dB",
      "اتجاهية الميكروفون: متعدد الاتجاهات",
      "مقاومة إخراج الميكروفون: 800Ω - 2.2KΩ",
      "التيار المقنن: 80mA",
      "جهد التشغيل: DC 5V ± 5%",
      "حجم المنتج: 200 × 87 × 205 مم (4.7 × 4.7 × 9.8 بوصة)",
      "وزن المنتج: 293 جرام (0.65 رطل)",
    ],
    showImages: FantasyWImages,
    isOrdered: false
  },
  {
    id: 6,
    name: "Fantasy microphone",
    price: 9.900,
    image: fantasyBlack,
    features: [
      "ميكروفون USB سلكي",
      "إضاءة RGB",
      "كتم الصوت بضغطة واحدة",
      "التقاط صوت متعدد الاتجاهات",
      "منفذ سماعة رأس 3.5 مم",
      "شريحة صوت احترافية USB 2.0",
      "تقنية تقليل الضوضاء تلقائياً",
    ],
    specification: [
      "نوع الاتصال: USB سلكي",
      "استجابة تردد السماعة: 20Hz-20KHz",
      "نطاق تردد الميكروفون: 100Hz - 16KHz",
      "حساسية الميكروفون: -38dB",
      "اتجاهية الميكروفون: متعدد الاتجاهات",
      "مقاومة إخراج الميكروفون: 800Ω - 2.2KΩ",
      "التيار المقنن: 80mA",
      "جهد التشغيل: DC 5V ± 5%",
      "حجم المنتج: 200 × 87 × 205 مم (4.7 × 4.7 × 9.8 بوصة)",
      "وزن المنتج: 293 جرام (0.65 رطل)",
    ],
    showImages: FantasyBImages,
    isOrdered: false
  },
  {
    id: 7,
    name: "ماوس V-80",
    price: 8.900,
    image: V80,
    features: [
      "فارة لا سلكية",
      "اتصال مزدوج الوضع (2.4G/BT5.0)",
      "تصميم مريح",
      "ثلاث مستويات DPI（800/ 1200/ 1600/）",
      "عجلة تمرير ثلاثية الأبعاد مضادة للانزلاق",
      "قبضة مريحة",
      "نقرة صامتة وعمر افتراضي يصل إلى 3 ملايين نقرة"
    ],
    specification: [
      "عدد الازرار: 4",
      "DPI: 800/1200/1600",
      "الاضائة: لا يوجد",
      "gالوزن: 58±5",
      "حجم المنتج: 130 × 70 × 40 مم (5.1 × 2.8 × 1.6 بوصة)",
      "نوع الاتصال: BT / 2.4G"
    ],
    showImages: V80Images,
    isOrdered: false
  }
];

export default items;