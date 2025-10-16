async function CreateReceiptPdf() {
  const accountReceiptNo = "123456";
  const canvas = document.getElementById("myCanvas");

  const dynamicData = {
    NUMBER: "2490667684810001",
    CONTRACT_NUMBER: "24-1401-4001102-000109",
    // بنود التأجير //
    RECEIVING_BRANCH_AR: "الرئيسي",
    RECEIVING_BRANCH_EN: "Head office",
    Geographic_area_AR: "هضبة الحجرة الواقعة في الجزء الشمالي من نفود الـنجد (النفود الكبير) داخل منطقة القصيم، المملكة العربية السعودية",
    Geographic_area_EN: "Al-Hajrah Plateau, situated in the northern part of the Najd Plateau's Great Nafud (An-Nafud Al-Kabir) within the Al-Qassim Region, Kingdom of Saudi Arabia.",
    Free_hours: "2",
    Maximum_hours: "5",
    Extra_hours_Value: "2",
    Free_KM: "150",
    Extra_KM_Value: "0.30",
    Delivery_Odometer_Reading: "1,000",
    Receipt_Odometer_Reading: "2,000",
    full_Fuel_value: "20",
    Discount_rate: "%2.5",
    Value_added_ratio: "%0.75",
    accident_Liability: "3,0",
    theft_Liability: "2,000",
    fire_Liability: "2,500",
    drowning_Liability: "1,500",

    // سياسة التأجير //
    RENTAL_POLICY_AR: " دفع القيمة الفعلية",
    Fuel_Policy:
      "إعادة السيارة وفق الكمية الموجودة عند استلامها و المحددة مسبقا في العقد",
    RETURN_POLICY_AR: "تقديم الطلب قبل انتهاؤه بساعة",
    EXTEND_POLICY: "1",
    ACCIDENT_POLICY: "من خلال البريد الإلكتروني التالي: hsvusefcksb@gmail",
    FAULT_POLICY: "من خلال رسالة على 9632584645880000000000000000000",
    EXTENTION_POLICY: "من خلال البريد الإلكتروني التالي: hsvusefcksb@gmail.com",
   // مرجع الاسعار
    Price_reference :"25-1219-4001100-000077",
   // التوقيع //
    SIGNATURE_AR: "عمير رضا عمير مجدي",
    SIGNATURE_EN: "Omir Reda Omir Magdy",

    // الصور
    images: {
      background: "Page3 (2).png",
      EMPLOYEE_SIGN: "../images/Signature_08.png",
      TENANT_SIGN: "../images/Signature_08.png",
      QR: "../images/BananT.svg",
      STAMP: "../images/Stamp.png",
      Authentication_STAMP: "../images/ختم توثيق بنان.png",
    },
    // عناصر الجدول
    OptionsItems: [
         {
        arabic: "فتح العداد",
        english: "unlimited Mileage",
        textAlign: "right",
      },
      {
        arabic: "تأمين شامل",
        english: "Comprehensive insurance",
        textAlign: "right",
      },
       {
        arabic: "فتح العداد",
        english: "unlimited Mileage",
        textAlign: "right",
      },
      {
        arabic: "تأمين شامل",
        english: "Comprehensive insurance",
        textAlign: "right",
      }, {
        arabic: "فتح العداد",
        english: "unlimited Mileage",
        textAlign: "right",
      },
      {
        arabic: "تأمين شامل",
        english: "Comprehensive insurance",
        textAlign: "right",
      }, {
        arabic: "فتح العداد",
        english: "unlimited Mileage",
        textAlign: "right",
      },
      {
        arabic: "تأمين شامل",
        english: "Comprehensive insurance",
        textAlign: "right",
      }, {
        arabic: "فتح العداد",
        english: "unlimited Mileage",
        textAlign: "right",
      }
    ],
    AdditionalItems: [
      {
        arabic: "فتح العداد",
        english: "unlimited Mileage",
        textAlign: "right",
      },
      {
        arabic: "تأمين شامل",
        english: "Comprehensive insurance",
        textAlign: "right",
      },
       {
        arabic: "فتح العداد",
        english: "unlimited Mileage",
        textAlign: "right",
      },
      {
        arabic: "تأمين شامل",
        english: "Comprehensive insurance",
        textAlign: "right",
      }, {
        arabic: "فتح العداد",
        english: "unlimited Mileage",
        textAlign: "right",
      },
      {
        arabic: "تأمين شامل",
        english: "Comprehensive insurance",
        textAlign: "right",
      }, {
        arabic: "فتح العداد",
        english: "unlimited Mileage",
        textAlign: "right",
      },
      {
        arabic: "تأمين شامل",
        english: "Comprehensive insurance",
        textAlign: "right",
      }, {
        arabic: "فتح العداد",
        english: "unlimited Mileage",
        textAlign: "right",
      }
    ],

    Option_Price_Items: [{ content: "320.00" }, { content: "320.00" },{ content: "320.00" }, { content: "320.00" },{ content: "320.00" }, { content: "320.00" },{ content: "320.00" }, { content: "320.00" }, { content: "320.00" }],
    Addition_Price_Items: [{ content: "320.00" }, { content: "320.00" },{ content: "320.00" }, { content: "320.00" },{ content: "320.00" }, { content: "320.00" },{ content: "320.00" }, { content: "320.00" }, { content: "320.00" }],
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
    texts: [
      {
        key: "NUMBER",
        x: canvas.width - 2360,
        y: 358,
        align: "left",
        color: "#0D5485",
        fontSize: 40,
        fontWeight: "700",
      },
      {
        key: "CONTRACT_NUMBER",
        x: canvas.width - 2420,
        y: 405,
        align: "left",
        color: "#0D5485",
        fontSize: 45,
        fontWeight: "700",
      },

      // بنود التأجير //
      {
        key: "RECEIVING_BRANCH_AR",
        x: canvas.width - 615,
        y: 505,
        fontSize: 40,
        align: "right",
      },
      {
        key: "RECEIVING_BRANCH_EN",
        x: canvas.width - 615,
        y: 545,
        align: "right",
      },
      {
        key: "Geographic_area_AR",
        x: canvas.width - 1260,
        y: 505,
        fontSize: 40,
        align: "right",
      },
      {
        key: "Geographic_area_EN",
        x: canvas.width - 1260,
        y: 545,
        align: "right",
      },
      { key: "Free_hours", x: canvas.width - 610, y: 630, align: "right" },
      {
        key: "Extra_hours_Value",
        x: canvas.width - 1300,
        y: 628,
        align: "right",
      },
      {
        key: "Extra_hours_Value",
        x: canvas.width - 1940,
        y: 628,
        align: "right",
      },
      { key: "Free_KM", x: canvas.width - 640, y: 735, align: "right" },
      { key: "Extra_KM_Value", x: canvas.width - 1290, y: 735, align: "right" },
      { key: "Delivery_Odometer_Reading", x: canvas.width - 740, y: 840, align: "right" },
      { key: "Receipt_Odometer_Reading", x: canvas.width - 1335, y: 840, align: "right" },
      {
        key: "full_Fuel_value",
        x: canvas.width - 650,
        y: 945,
        align: "right",
      },
      { key: "Discount_rate", x: canvas.width - 1200, y: 945, align: "right" },
      {
        key: "Value_added_ratio",
        x: canvas.width - 1905,
        y: 945,
        align: "right",
      },
      {
        key: "accident_Liability",
        x: canvas.width - 635,
        y: 1050,
        align: "right",
      },
      {
        key: "theft_Liability",
        x: canvas.width - 1210,
        y: 1050,
        align: "right",
      },
      // مرجع الاسعار 
      { key: "Price_reference", x: canvas.width - 2170, y: 1190, align: "left",
        color: "#0D5485",
        fontSize: 20},
      // 
      { key: "fire_Liability", x: canvas.width - 600, y: 1155, align: "right" },
      {
        key: "drowning_Liability",
        x: canvas.width - 1245,
        y: 1155,
        align: "right",
      },

      // سياسة التأجير //
      {
        key: "RENTAL_POLICY_AR",
        x: canvas.width - 640,
        y: 2400,
        align: "right",
      },
      { key: "Fuel_Policy", x: canvas.width - 1520, y: 2390, align: "right" },
      {
        key: "RETURN_POLICY_AR",
        x: canvas.width - 640,
        y: 2502,
        align: "right",
      },
      { key: "EXTEND_POLICY", x: canvas.width - 730, y: 2615, align: "right" },
      {
        key: "EXTENTION_POLICY",
        x: canvas.width - 1520,
        y: 2615,
        align: "right",
      },
      {
        key: "ACCIDENT_POLICY",
        x: canvas.width - 640,
        y: 2715,
        align: "right",
      },
      { key: "FAULT_POLICY", x: canvas.width - 1520, y: 2715, align: "right" },


      // التوقيع //
      {
        key: "SIGNATURE_AR",
        x: canvas.width - 280,
        y: 2830,
        fontSize: 40,
        align: "right",
      },
      { key: "SIGNATURE_EN", x: canvas.width - 280, y: 2870, align: "right" },
    ],
    images: [
      {
        content: data.images.EMPLOYEE_SIGN,
        x: canvas.width - 705,
        y: 2810,
        width: 160,
        height: 50,
      },
      {
        content: data.images.TENANT_SIGN,
        x: canvas.width - 500,
        y: 2910,
        width: 160,
        height: 50,
      },
      {
        content: data.images.STAMP,
        x: canvas.width - 776,
        y: 2800,
        width: 190,
        height: 194,
      },
      {
        content: data.images.Authentication_STAMP,
        x: canvas.width - 560,
        y: 2905,
        width: 190,
        height: 194,
      },
      {
        content: data.images.QR,
        x: canvas.width - 2432,
        y: 2796,
        width: 190,
        height: 194,
      },
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
    },
  };
  await document.fonts.load(
    `${fixedConfig.textStyle.fontWeight} ${fixedConfig.textStyle.fontSize}px ${fixedConfig.textStyle.fontFamily}`
  );
  await document.fonts.load(
    `${fixedConfig.tableStyle.fontWeight} ${fixedConfig.tableStyle.fontSize}px ${fixedConfig.tableStyle.fontFamily}`
  );

  ctx.font = `${fixedConfig.textStyle.fontWeight} ${fixedConfig.textStyle.fontSize}px ${fixedConfig.textStyle.fontFamily}`;
  ctx.fillStyle = fixedConfig.textStyle.textColor;
  // رسم النصوص

  // قص البيانات التي تتجاوز ال 36 حرف
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;

    const isArabic = /[\u0600-\u06FF]/.test(text);
    return isArabic
      ? ".." + text.substring(0, maxLength)
      : text.substring(0, maxLength) + "..";
  };
  const keysToTruncate = ["Geographic_area_AR", "Geographic_area_EN"];

  // عرض بيانات سياسة التأجير في سطرين
  const wrapText = (ctx, text, x, y, maxWidth, lineHeight, align) => {
    const words = text.split(" ");
    let line = "";
    let lines = [];

    words.forEach((word) => {
      let testLine = line + word + " ";
      let testWidth = ctx.measureText(testLine).width;

      if (testWidth > maxWidth && line !== "") {
        lines.push(line);
        line = word + " ";
      } else {
        line = testLine;
      }
    });

    lines.push(line);

    lines.forEach((line, i) => {
      let adjustedX = x;
      let textWidth = ctx.measureText(line.trim()).width;

      if (align === "right") adjustedX = x - textWidth;
      else if (align === "center") adjustedX = x - textWidth / 2;

      ctx.fillText(line.trim(), adjustedX, y + i * lineHeight);
    });
  };
  // بيانات سياسة التأجير القابلة للعرض في سطرين
  const keysToWrap = [
    "ACCIDENT_POLICY",
    "FAULT_POLICY",
    "Fuel_Policy",
    "EXTENTION_POLICY",
    "RENTAL_POLICY_AR",
  ];

  fixedConfig.texts.forEach(
    ({ key, x, y, align, color, fontSize, fontWeight }) => {
      ctx.font = `${fontWeight || fixedConfig.textStyle.fontWeight} ${
        fontSize || fixedConfig.textStyle.fontSize
      }px ${fixedConfig.textStyle.fontFamily}`;
      ctx.fillStyle = color || fixedConfig.textStyle.textColor;
      var content = data[key] || "";
      if (keysToTruncate.includes(key)) {
        content = truncateText(content, 70);
      }
      const textWidth = ctx.measureText(content).width;

      let maxWidth = 640;
      let lineHeight = 35;

      if (keysToWrap.includes(key) && textWidth > maxWidth) {
        wrapText(ctx, content, x, y, maxWidth, lineHeight, align);
      } else {
        let adjustedX = x;
        if (align === "right") adjustedX = x - textWidth;
        else if (align === "center") adjustedX = x - textWidth / 2;
        ctx.fillText(content, adjustedX, y);
      }
    }
  );

  // رسم الصور
  fixedConfig.images.forEach(({ content, x, y, width, height }) => {
    if (content) {
      // تحقق مما إذا كانت الصورة محملة
      ctx.drawImage(content, x, y, width, height);
    } else {
      console.warn("الصورة غير موجودة أو لم يتم تحميلها، يتم تخطيها.");
    }
  });

  // رسم الجدول (عناصر الخيارات و الاضافاتات و المميزات)
  const startY = 1405;
  const increment = 104;
  const startYForNumbers = 1405;
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
        ctx.fillText(
          item.english,
          adjustedXEnglish,
          startY + i * increment + 40
        );
      });
    }
  };
  // Usage
  if (data.OptionsItems) {
    drawTextItems(
      ctx,
      data.OptionsItems,
      canvas.width - 190,
      startY,
      increment
    );
  }

  if (data.AdditionalItems) {
    drawTextItems(
      ctx,
      data.AdditionalItems,
      canvas.width - 975,
      startY,
      increment
    );
  }

  //  لرسم العناصر في تنسيق جدول
  const drawItems = (items, xPosition, startY, align) => {
    if (!items || items.length === 0) return; // تحقق من العناصر الفارغة
    items.forEach((item, i) => {
      ctx.font = `${fixedConfig.tableStyle.fontWeight} ${fixedConfig.tableStyle.fontSize}px ${fixedConfig.tableStyle.fontFamily}`;
      ctx.fillStyle = fixedConfig.tableStyle.textColor;
      const content = item.content || "";
      const textWidth = ctx.measureText(content).width;

      let adjustedX = xPosition;
      if (align === "right") adjustedX = xPosition - textWidth;
      else if (align === "center") adjustedX = xPosition - textWidth / 2;

      ctx.fillText(content, adjustedX, startY + i * increment + 20);
    });
  };

  // رسم جميع فئات العناصر
  drawItems(
    data.Option_Price_Items,
    canvas.width - 730,
    startYForNumbers,
    "center"
  );
  drawItems(
    data.Addition_Price_Items,
    canvas.width - 1515,
    startYForNumbers,
    "center"
  );
};

CreateReceiptPdf();


