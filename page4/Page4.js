async function CreateReceiptPdf() {
  const accountReceiptNo = "123456";
  const canvas = document.getElementById("myCanvas");

  const dynamicData = {
    NUMBER: "2490667684810001",
    CONTRACT_NUMBER: "24-1401-4001102-000109",
 
  // التوقيع //
  SIGNATURE_AR: "عمير رضا عمير مجدي",
  SIGNATURE_EN: "Omir Reda Omir Magdy",

  // الصور
    images: {
      background: "page4 (2).png",
      EMPLOYEE_SIGN: "../../images/Signature_08.png",
      TENANT_SIGN: "../../images/Signature_08.png",
      QR: "../../images/verificationT.svg",
      STAMP: "../../images/Stamp.png",
      Authentication_STAMP: "../../images/ختم توثيق بنان.png",
    },
    // عناصر الجدول 
    Inspection_Items: [
      {  arabic: "الوقود", english: "Fuel", textAlign: "right"},
      { arabic: "التكييف", english: "Air Conditioning", textAlign: "right" },
      { arabic: "الراديو / التسجيل", english: "Radio" , textAlign: "right" },
      { arabic: "الشاشة الداخلية", english: "Indoor Display" , textAlign: "right" },
      { arabic: "عداد السرعة", english: "Speedometer" , textAlign: "right" },
      { arabic: "الفرش الداخلي", english: "Interior Upholstery" , textAlign: "right" },
      { arabic: "العجلات", english: "Wheels" , textAlign: "right" },
      { arabic: "العجلة الإحتياطية", english: "Spare Wheel" , textAlign: "right" },
      { arabic: "الإسعافات الأولية", english: "First Aid" , textAlign: "right" },
      {  arabic: "الوقود", english: "Fuel", textAlign: "right"},
      { arabic: "التكييف", english: "Air Conditioning", textAlign: "right" },
      { arabic: "الراديو / التسجيل", english: "Radio" , textAlign: "right" },
      { arabic: "الشاشة الداخلية", english: "Indoor Display" , textAlign: "right" },
      { arabic: "عداد السرعة", english: "Speedometer" , textAlign: "right" },
      { arabic: "الفرش الداخلي", english: "Interior Upholstery" , textAlign: "right" },
      { arabic: "العجلات", english: "Wheels" , textAlign: "right" },
      { arabic: "العجلة الإحتياطية", english: "Spare Wheel" , textAlign: "right" },
      { arabic: "الإسعافات الأولية", english: "First Aid" , textAlign: "right" },
      {  arabic: "الوقود", english: "Fuel", textAlign: "right"},
      { arabic: "التكييف", english: "Air Conditioning", textAlign: "right" },
      { arabic: "الراديو / التسجيل", english: "Radio" , textAlign: "right" },
    ],
   
    Delivery_Inspection: [ 
      { arabic: "ممتلئ", english: "Full" , textAlign: "right"},
      { arabic: "ممتاز", english: "excellent", textAlign: "right" },
      { arabic: "ممتاز", english: "excellent", textAlign: "right" },
      { arabic: "ممتاز", english: "excellent", textAlign: "right" },
      { arabic: "ممتاز", english: "excellent", textAlign: "right" },
      { arabic: "ممتاز", english: "excellent", textAlign: "right" },
      { arabic: "ممتاز", english: "excellent", textAlign: "right" },
      { arabic: "ممتاز", english: "excellent", textAlign: "right" },
      { arabic: "ممتاز", english: "excellent", textAlign: "right" },
      { arabic: "ممتاز", english: "excellent", textAlign: "right" },
      { arabic: "ممتاز", english: "excellent", textAlign: "right" },
      { arabic: "ممتاز", english: "excellent", textAlign: "right" },
      { arabic: "ممتاز", english: "excellent", textAlign: "right" },
      { arabic: "ممتاز", english: "excellent", textAlign: "right" },
      { arabic: "ممتاز", english: "excellent", textAlign: "right" },
      { arabic: "ممتاز", english: "excellent", textAlign: "right" },
      { arabic: "ممتاز", english: "excellent", textAlign: "right" },
      { arabic: "ممتاز", english: "excellent", textAlign: "right" },
      { arabic: "ممتاز", english: "excellent", textAlign: "right" },
      { arabic: "ممتاز", english: "excellent", textAlign: "right" },  
    ],
     Receipt_Inspection: [ 
      { arabic: "ممتلئ", english: "Full" , textAlign: "right"},
      { arabic: "ممتاز", english: "excellent", textAlign: "right" },
      { arabic: "ممتاز", english: "excellent", textAlign: "right" },
      { arabic: "ممتاز", english: "excellent", textAlign: "right" },
      { arabic: "ممتاز", english: "excellent", textAlign: "right" },
      { arabic: "ممتاز", english: "excellent", textAlign: "right" },
      { arabic: "ممتاز", english: "excellent", textAlign: "right" },
      { arabic: "ممتاز", english: "excellent", textAlign: "right" },
      { arabic: "ممتاز", english: "excellent", textAlign: "right" },
      { arabic: "ممتاز", english: "excellent", textAlign: "right" },
      { arabic: "ممتاز", english: "excellent", textAlign: "right" },
      { arabic: "ممتاز", english: "excellent", textAlign: "right" },
      { arabic: "ممتاز", english: "excellent", textAlign: "right" },
      { arabic: "ممتاز", english: "excellent", textAlign: "right" },
      { arabic: "ممتاز", english: "excellent", textAlign: "right" },
      { arabic: "ممتاز", english: "excellent", textAlign: "right" },
      { arabic: "ممتاز", english: "excellent", textAlign: "right" },
      { arabic: "ممتاز", english: "excellent", textAlign: "right" },
      { arabic: "ممتاز", english: "excellent", textAlign: "right" },
      { arabic: "ممتاز", english: "excellent", textAlign: "right" },  
    ],
    Delivery_Notes:[{ content: "يلزم التأكد من تسليم السيارة  وحالة الوقود كما استملت" } , { content:"تم تسليم السيارة بعد إجراء الصيانة الدورية والتأكد من سلامة جميع الأنظمة والأجزاء الميكانيكية"} ],
    Rececipt_Notes:[{ content: "يلزم التأكد من تسليم السيارة  وحالة الوقود كما استملت" } , { content:"تم تسليم السيارة بعد إجراء الصيانة الدورية والتأكد من سلامة جميع الأنظمة والأجزاء الميكانيكية"} , { content: "يلزم التأكد من تسليم السيارة  وحالة الوقود كما استملت" } , { content:"تم تسليم السيارة بعد إجراء الصيانة الدورية والتأكد من سلامة جميع الأنظمة والأجزاء الميكانيكية"} ,{ content: "يلزم التأكد من تسليم السيارة  وحالة الوقود كما استملت" } , { content:"تم تسليم السيارة بعد إجراء الصيانة الدورية والتأكد من سلامة جميع الأنظمة والأجزاء الميكانيكية"}, { content:"تم تسليم السيارة بعد إجراء الصيانة الدورية والتأكد من سلامة جميع الأنظمة والأجزاء الميكانيكية"} ,{ content: "يلزم التأكد من تسليم السيارة  وحالة الوقود كما استملت" } , { content:"تم تسليم السيارة بعد إجراء الصيانة الدورية والتأكد من سلامة جميع الأنظمة والأجزاء الميكانيكية"} , { content:"تم تسليم السيارة بعد إجراء الصيانة الدورية والتأكد من سلامة جميع الأنظمة والأجزاء الميكانيكية"} ,{ content: "يلزم التأكد من تسليم السيارة  وحالة الوقود كما استملت" } , { content:"تم تسليم السيارة بعد إجراء الصيانة الدورية والتأكد من سلامة جميع الأنظمة والأجزاء الميكانيكية"} , { content:"تم تسليم السيارة بعد إجراء الصيانة الدورية والتأكد من سلامة جميع الأنظمة والأجزاء الميكانيكية"} ,{ content: "يلزم التأكد من تسليم السيارة  وحالة الوقود كما استملت" } , { content:"تم تسليم السيارة بعد إجراء الصيانة الدورية والتأكد من سلامة جميع الأنظمة والأجزاء الميكانيكية"} , { content:"تم تسليم السيارة بعد إجراء الصيانة الدورية والتأكد من سلامة جميع الأنظمة والأجزاء الميكانيكية"} ,{ content: "يلزم التأكد من تسليم السيارة  وحالة الوقود كما استملت" } , { content:"تم تسليم السيارة بعد إجراء الصيانة الدورية والتأكد من سلامة جميع الأنظمة والأجزاء الميكانيكية"} , { content:"تم تسليم السيارة بعد إجراء الصيانة الدورية والتأكد من سلامة جميع الأنظمة والأجزاء الميكانيكية"} ,{ content: "يلزم التأكد من تسليم السيارة  وحالة الوقود كما استملت" } , { content:"تم تسليم السيارة بعد إجراء الصيانة الدورية والتأكد من سلامة جميع الأنظمة والأجزاء الميكانيكية"}, ],

  };

  const loadedImages = await loadDynamicImages(dynamicData.images);
  const dataWithImages = { ...dynamicData, images: loadedImages };
  console.log("dataWithImages", dataWithImages);
  await drawReceipt(canvas, dataWithImages);
}

//  لتحميل الصور
const loadDynamicImages = async (images) => {
  const loadedImages = {};
  for (const [key, src] of Object.entries(images)) {
    try {
      loadedImages[key] = await loadImage(src);
    } catch (error) {
      console.warn(`استخدام النسخة الاحتياطية لـ: ${key}`);
      loadedImages[key] = null;
    }
  }
  return loadedImages;
};

const loadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = (error) => {
      console.error(`فشل تحميل الصورة: ${src}`, error);
      reject(error);
    };
    img.src = src;
  });
};

//  لرسم الإيصال على الصورة
const drawReceipt = async (canvas, data) => {
  console.log("بدء رسم الإيصال");
  const ctx = canvas.getContext("2d");

  // إعداد حجم الصورة بناءً على صورة الخلفية
  const backgroundImg = data.images.background;
  canvas.width = 2481;
  canvas.height = backgroundImg.height;
  ctx.drawImage(backgroundImg, 0, 0);

  // إعدادات النصوص والصور
  const fixedConfig = {
    texts : [
      { key: "NUMBER", x: canvas.width - 2360, y: 358, align: "left", color: "#0D5485", fontSize: 40, fontWeight: "700"  },
      { key: "CONTRACT_NUMBER", x: canvas.width - 2420, y: 405, align: "left", color: "#0D5485", fontSize: 45, fontWeight: "700" },
      
      // التوقيع //
      { key: "SIGNATURE_AR", x: canvas.width - 280, y: 2830, fontSize: 40  , align: "right"},
      { key: "SIGNATURE_EN", x: canvas.width - 280, y: 2870 , align: "right" },
    ],
    images: [
      { content: data.images.EMPLOYEE_SIGN, x: canvas.width - 705, y: 2810, width: 160, height: 50  },
      { content: data.images.TENANT_SIGN,  x: canvas.width - 500, y: 2910, width: 160, height: 50   },
      { content: data.images.STAMP, x: canvas.width - 776, y: 2800, width: 190, height: 194 },
      { content: data.images.Authentication_STAMP, x: canvas.width - 560, y: 2905, width: 190, height: 194 },
      { content: data.images.QR, x: canvas.width - 2432, y: 2796, width: 190, height: 194 },
  ],
    textStyle: {
      fontWeight: "normal",
      fontSize: 35,
      fontFamily: "Sakkal Majalla Regular",
      textColor: "#000000",
    },
    tableStyle: {
      fontWeight: "normal",
      fontSize: 35,
      fontFamily: "Sakkal Majalla Regular",
      textColor: "#000000",
      textAlign: "center",
    }
  };
  await document.fonts.load(`${fixedConfig.textStyle.fontWeight} ${fixedConfig.textStyle.fontSize}px ${fixedConfig.textStyle.fontFamily}`);
  await document.fonts.load(`${fixedConfig.tableStyle.fontWeight} ${fixedConfig.tableStyle.fontSize}px ${fixedConfig.tableStyle.fontFamily}`);

  ctx.font = `${fixedConfig.textStyle.fontWeight} ${fixedConfig.textStyle.fontSize}px ${fixedConfig.textStyle.fontFamily}`;
  ctx.fillStyle = fixedConfig.textStyle.textColor;
  // رسم النصوص
  fixedConfig.texts.forEach(({ key, x, y, align , color , fontSize , fontWeight}) => {
    ctx.font =  `${fontWeight || fixedConfig.textStyle.fontWeight} ${fontSize || fixedConfig.textStyle.fontSize}px ${fixedConfig.textStyle.fontFamily}`;
    ctx.fillStyle = color||fixedConfig.textStyle.textColor;
    const content = data[key] || "";
    const textWidth = ctx.measureText(content).width;
    let adjustedX = x;

  if (align === "right") adjustedX = x - textWidth;
  else if (align === "center") adjustedX = x - textWidth / 2;

  ctx.fillText(content, adjustedX, y);
});

  // رسم الصور
  fixedConfig.images.forEach(({ content, x, y, width, height }) => {
    if (content) { // تحقق مما إذا كانت الصورة محملة
      ctx.drawImage(content, x, y, width, height);
    } else {
      console.warn("الصورة غير موجودة أو لم يتم تحميلها، يتم تخطيها.");
    }
  });

  // رسم الجدول (عناصر بنود الفحص و حالة الفحص  و الملاحظات )
  let startY = 610; 
  let increment = 104; 
  const drawTextItems = (ctx, items, baseX, startY, increment) => {
    if (items && items.length > 0) {
      items.forEach((item, i) => {
        ctx.font = `${fixedConfig.tableStyle.fontWeight} ${fixedConfig.tableStyle.fontSize}px ${fixedConfig.tableStyle.fontFamily}`;
        ctx.fillStyle = fixedConfig.tableStyle.textColor;
  
        // قياس عرض النص للغة العربية
        const arabicTextWidth = ctx.measureText(item.arabic).width;
        const englishTextWidth = ctx.measureText(item.english).width;
  
        let adjustedXArabic = baseX;
        let adjustedXEnglish = baseX;
  
        if (item.textAlign === "right") {
          adjustedXArabic = baseX - arabicTextWidth;
          adjustedXEnglish = baseX - englishTextWidth;
        } else if (item.textAlign === "center") {
          adjustedXArabic = baseX - arabicTextWidth / 2;
          adjustedXEnglish = baseX - englishTextWidth / 2;
        }
  
        // رسم النص العربي
        ctx.fillText(item.arabic, adjustedXArabic, startY + i * increment);
        // رسم النص الإنجليزي
        ctx.fillText(item.english, adjustedXEnglish, startY + i * increment + 40);
      });
    }
  };

  // Usage
if (data.Inspection_Items) {
  drawTextItems(ctx, data.Inspection_Items, canvas.width - 425, startY, increment);
}
if (data.Delivery_Inspection) {
  drawTextItems(ctx, data.Delivery_Inspection, canvas.width - 720, startY, increment);
}
if (data.Receipt_Inspection) {
  drawTextItems(ctx, data.Receipt_Inspection, canvas.width - 1530, startY, increment);
}

  //  لرسم العناصر في تنسيق جدول
  let startY_Notes = 610; 
  const drawItems = (items, xPosition, startY, align, maxWidth = 530, lineHeight = 40) => {
  if (!items || items.length === 0) return;

  items.forEach((item, i) => {
    ctx.font = `${fixedConfig.tableStyle.fontWeight} ${fixedConfig.tableStyle.fontSize}px ${fixedConfig.tableStyle.fontFamily}`;
    ctx.fillStyle = fixedConfig.tableStyle.textColor;
    const text = item.content || "";

    const words = text.split(" ");
    let line = "";
    let lines = [];

    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + " ";
      const testWidth = ctx.measureText(testLine).width;
      if (testWidth > maxWidth && n > 0) {
        lines.push(line.trim());
        line = words[n] + " ";
      } else {
        line = testLine;
      }
    }
    lines.push(line.trim());

    lines.forEach((lineText, lineIndex) => {
      const textWidth = ctx.measureText(lineText).width;
      let adjustedX = xPosition;
      if (align === "right") adjustedX = xPosition - textWidth;
      else if (align === "center") adjustedX = xPosition - textWidth / 2;

      const y = startY + i * 104 + lineIndex * lineHeight;
      ctx.fillText(lineText, adjustedX, y);
    });
  });
};
drawItems(data.Delivery_Notes, canvas.width - 960, startY_Notes, "right");
drawItems(data.Rececipt_Notes, canvas.width - 1780, startY_Notes, "right");


};



CreateReceiptPdf();