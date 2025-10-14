async function CreateContract() {
  const accountReceiptNo = "123456";
  const canvas = document.getElementById("myCanvas");
  const dynamicData = {
    NUMBER: "2490667684810001",
    CONTRACT_NUMBER: "24-1401-4001102-000109",
    CONTRACT_DATE_AR: "الخميس 9 جمادى الآخرة 1446",
    CONTRACT_DATE_EN: "Tuesday, 9 Jumada al-Akhirah 1446",
    CONTRACT_START_AR:  "الخميس 9 جمادى الآخرة 1446",
    CONTRACT_START_EN: "Tuesday, 9 Jumada al-Akhirah 1446",
    CONTRACT_END_AR: "الجمعة، 19 جمادى الآخرة 1446",
    CONTRACT_END_EN: "Friday, 19 Jumada al-Akhirah 1446",
    CONTRACT_Actual_END_AR: "الجمعة، 19 جمادى الآخرة 1446",
    CONTRACT_Actual_END_EN: "Friday, 19 Jumada al-Akhirah 1446",
    DAYSNUMBER: "10",
    Actual_DAYSNUMBER: "10",
    DATE_1: "2025/10/13",
    TIME_1: "12:23:26",
    DATE_2: "2025/10/13",
    TIME_2: "12:23:26",
    DATE_3: "2025/10/13",
    TIME_3: "12:23:26",
    DATE_4: "2025/10/13",
    TIME_4: "12:23:26",
    CONTRACT_STATUE_AR: "جديد / باليوم بدون سائق",
    CONTRACT_STATUE_EN: "New / Daily without Driver",
    Settelment_Closing_AR: "إغلاق بإنتهاء مدة العقد ",
    Settelment_Closing_EN: "Closure due to contract expiration",
    BRANCH_AR: "الإدارة العامة - الفرع الرئيسي ",
    BRANCH_EN: "General Administration - Main Branch",
    PHONE_1: "966125874545",
    PHONE_2: "96653697455",
    EMAIL: "jibalalsarawatRenter@gmail.com",
    ADDRESS_AR:
      "مكة المكرمة - جعرانة - أجياد السد - جعرانة الرئيسي - مبنى (411021) - وحدة (22) - الرمز البريدي (40023) - الرقم الإضافي (4024)",
    ADDRESS_EN:
      "Makkah Al-Mukarramah - Jaarana - Ajyad Al-Sad - Jaarana Main - Building (411021) - Unit (22) - Postal Code (40023)",
    CAR_DETAILS_AR: "تويوتا - كورولا - سيدان صغيرة - 2021 - ص ع ح 3162 - كحلي",
    CAR_DETAILS_EN: "Toyota - Corolla - Small Sedan - 2021 - S.A.H. 3162 - Navy",
    SERIAL_NUMBER: "1020001785",
    REGISTRATION_AR: "خصوصي",
    REGISTRATION_EN: "Private",
    FUEL_TYPE_AR: "بنزين أوكتان",
    FUEL_TYPE_EN: "Octane Gasoline",
    TRANSMISSION_AR: "آلي",
    TRANSMISSION_EN: "Automatic",
    OIL_TYPE_AR: "سوبر شل",
    OIL_TYPE_EN: "Super Shell",
    CHANGE_OIL_DATE: "(54,550) 2025/10/20",
    REGISTRATION_END_DATE: "2025/10/20",
    INESPECTION_END_DATE: "2025/10/20",
    OPERATING_CARD: "1080001785",
    OPERATING_CARD_END: "2026/11/17",
    INSURANCE: "KG87/41Y/2021/151769",
    INSURANCE_END: "2026/11/17",
    PERODIC_MAINTENANCE: "(54,550) 2025/10/12",
    TIRE_MAINTENANCE: "(54,550) 2026/11/17",
    OWNER_COMPANY_AR: "شركة كدي لتأجير السيارات ",
    OWNER_COMPANY_EN: "Kudi Car Rental Company",
    ID_NUMBER: "7004004150",
    ID_TYPE_AR: "سجل تجاري",
    ID_TYPE_EN: "Commercial Register",
    PHONE_3: "966125874545",
    EMAIL_2: "ABC@gmail.com",
    SIGNATURE_AR: "عمير رضا عمير مجدي",
    SIGNATURE_EN: "Omir Reda Omir Magdy",
    images: {
      background: "Page1 (2).png",
      EMPLOYEE_SIGN: "../images/Signature_08.png",
      TENANT_SIGN: "../images/Signature_08.png",
      QR: "../images/verificationT.svg",
      STAMP: "../images/Stamp.png",
      Authentication_STAMP: "../images/ختم توثيق بنان.png",
    },
  };
  const loadedImages = await loadDynamicImages(dynamicData.images);
  const dataWithImages = { ...dynamicData, images: loadedImages };
  console.log("dataWithImages", dataWithImages);
  await DrawContract(canvas, dataWithImages);
}

const loadDynamicImages = async (images) => {
  const loadedImages = {};
  for (const [key, src] of Object.entries(images)) {
    try {
      loadedImages[key] = await loadImage(src);
    } catch (error) {
      console.warn(`Using fallback for: ${key}`);
      console.warn(`Using fallback for src: ${src}`);
      loadedImages[key] = null; // استخدم null أو صورة افتراضية
    }
  }
  return loadedImages;
};

const loadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = (error) => {
      console.error(`Failed to load image: ${src}`, error);
      reject(error);
    };
    img.src = src;
  });
};

// رسم العقد على الـ Canvas
const DrawContract = async (canvas, data) => {
  console.log("Start DrawContract");
  const ctx = canvas.getContext("2d");

  // ضبط أبعاد الـ canvas
  const backgroundImg = data.images.background;
  canvas.width = 2481;
  canvas.height = backgroundImg.height;
  ctx.drawImage(backgroundImg, 0, 0);

  // إعداد النصوص والصور
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
      {
        key: "CONTRACT_DATE_AR",
        x: canvas.width - 610,
        y: 510,
        align: "right",
        fontSize: 40,
      },
      {
        key: "CONTRACT_DATE_EN",
        x: canvas.width - 610,
        y: 550,
        align: "right",
      },
      {
        key: "CONTRACT_START_AR",
        x: canvas.width - 610,
        y: 615,
        align: "right",
        fontSize: 40,
      },
      {
        key: "CONTRACT_START_EN",
        x: canvas.width - 610,
        y: 655,
        align: "right",
      },
      {
        key: "CONTRACT_END_AR",
        x: canvas.width - 610,
        y: 720,
        align: "right",
        fontSize: 40,
      },
      { key: "CONTRACT_END_EN", x: canvas.width - 610, y: 760, align: "right" }
      ,{
        key: "CONTRACT_Actual_END_AR",
        x: canvas.width - 610,
        y: 820,
        align: "right",
      },
      {
        key: "CONTRACT_Actual_END_EN",
        x: canvas.width - 610,
        y: 860,
        align: "right",
      },
      // حالة العقد 
       {
        key: "CONTRACT_STATUE_AR",
        x: canvas.width - 610,
        y: 922,
        align: "right",
        fontSize: 40,
      },
      {
        key: "CONTRACT_STATUE_EN",
        x: canvas.width - 610,
        y: 960,
        align: "right",
      },
      // التسوية و الاغلاق 
       {
        key: "Settelment_Closing_AR",
        x: canvas.width - 1300,
        y: 922,
        align: "right",
        fontSize: 40,
      },
      {
        key: "Settelment_Closing_EN",
        x: canvas.width - 1300,
        y: 960,
        align: "right",
      },
      // عدد ايام العقد
      { key: "DAYSNUMBER", x: canvas.width - 1850, y: 728, align: "right" },
      { key: "Actual_DAYSNUMBER", x: canvas.width - 1850, y: 828, align: "right" },
     
      { key: "DATE_1", x: canvas.width - 1310, y: 527, align: "right" },
      { key: "TIME_1", x: canvas.width - 1200, y: 527, align: "right" },
      { key: "DATE_2", x: canvas.width - 1310, y: 626, align: "right" },
      { key: "TIME_2", x: canvas.width - 1200, y: 626, align: "right" },
      { key: "DATE_3", x: canvas.width - 1310, y: 728, align: "right" },
      { key: "TIME_3", x: canvas.width - 1200, y: 728, align: "right" },
      { key: "DATE_4", x: canvas.width - 1310, y: 828, align: "right" },
      { key: "TIME_4", x: canvas.width - 1200, y: 828, align: "right" },

      //الفرع//
      {
        key: "BRANCH_AR",
        x: canvas.width - 420,
        y: 1080,
        align: "right",
        color: "#0D5485",
        fontSize: 50,
        fontWeight: "600",
      },
      {
        key: "BRANCH_EN",
        x: canvas.width - 420,
        y: 1140,
        align: "right",
        color: "#0D5485",
        fontSize: 40,
        fontWeight: "600",
      },
      { key: "PHONE_1", x: canvas.width - 526, y: 1250, align: "right" },
      { key: "PHONE_2", x: canvas.width - 1130, y: 1250, align: "right" },
      { key: "EMAIL", x: canvas.width - 1730, y: 1250, align: "right" },
      {
        key: "ADDRESS_AR",
        x: canvas.width - 535,
        y: 1335,
        align: "right",
        fontSize: 40,
      },
      { key: "ADDRESS_EN", x: canvas.width - 535, y: 1370, align: "right" },
      //السيارة//
      {
        key: "CAR_DETAILS_AR",
        x: canvas.width - 425,
        y: 1500,
        align: "right",
        color: "#0D5485",
        fontSize: 50,
        fontWeight: "600",
      },
      {
        key: "CAR_DETAILS_EN",
        x: canvas.width - 425,
        y: 1560,
        align: "right",
        color: "#0D5485",
        fontSize: 40,
        fontWeight: "600",
      },
      { key: "SERIAL_NUMBER", x: canvas.width - 630, y: 1670, align: "right" },
      {
        key: "REGISTRATION_AR",
        x: canvas.width - 1798,
        y: 1645,
        align: "right",
        fontSize: 40,
      },
      {
        key: "REGISTRATION_EN",
        x: canvas.width - 1798,
        y: 1685,
        align: "right",
      },
      {
        key: "FUEL_TYPE_AR",
        x: canvas.width - 570,
        y: 1752,
        align: "right",
        fontSize: 40,
      },
      { key: "FUEL_TYPE_EN", x: canvas.width - 570, y: 1790, align: "right" },
      {
        key: "TRANSMISSION_AR",
        x: canvas.width - 1855,
        y: 1752,
        align: "right",
        fontSize: 40,
      },
      {
        key: "TRANSMISSION_EN",
        x: canvas.width - 1855,
        y: 1790,
        align: "right",
      },
      {
        key: "OIL_TYPE_AR",
        x: canvas.width - 560,
        y: 1855,
        align: "right",
        fontSize: 40,
      },
      { key: "OIL_TYPE_EN", x: canvas.width - 560, y: 1895, align: "right" },
      {
        key: "CHANGE_OIL_DATE",
        x: canvas.width - 1832,
        y: 1870,
        align: "right",
      },
      {
        key: "REGISTRATION_END_DATE",
        x: canvas.width - 730,
        y: 1980,
        align: "right",
      },
      {
        key: "INESPECTION_END_DATE",
        x: canvas.width - 1960,
        y: 1980,
        align: "right",
      },
      { key: "OPERATING_CARD", x: canvas.width - 625, y: 2085, align: "right" },
      {
        key: "OPERATING_CARD_END",
        x: canvas.width - 1837,
        y: 2085,
        align: "right",
      },
      { key: "INSURANCE", x: canvas.width - 600, y: 2185, align: "right" },
      { key: "INSURANCE_END", x: canvas.width - 1837, y: 2185, align: "right" },
      {
        key: "PERODIC_MAINTENANCE",
        x: canvas.width - 725,
        y: 2285,
        align: "right",
      },
      {
        key: "TIRE_MAINTENANCE",
        x: canvas.width - 1910,
        y: 2285,
        align: "right",
      },
      
      // المالك
      {
        key: "OWNER_COMPANY_AR",
        x: canvas.width - 425,
        y: 2430,
        align: "right",
        color: "#0D5485",
        fontSize: 50,
        fontWeight: "600",
      },
      {
        key: "OWNER_COMPANY_EN",
        x: canvas.width - 425,
        y: 2490,
        align: "right",
        color: "#0D5485",
        fontSize: 40,
        fontWeight: "600",
      },
      { key: "ID_NUMBER", x: canvas.width - 515, y: 2595, align: "right" },
      {
        key: "ID_TYPE_AR",
        x: canvas.width - 1170,
        y: 2570,
        align: "right",
        fontSize: 40,
      },
      { key: "ID_TYPE_EN", x: canvas.width - 1170, y: 2610, align: "right" },
      { key: "PHONE_3", x: canvas.width - 526, y: 2700, align: "right" },
      { key: "EMAIL_2", x: canvas.width - 1125, y: 2700, align: "right" },
      {
        key: "SIGNATURE_AR",
        x: canvas.width - 280,
        y: 2830,
        align: "right",
        fontSize: 40,
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
      textAlign: "right",
    },
  };

  await document.fonts.load(
    `${fixedConfig.textStyle.fontWeight} ${fixedConfig.textStyle.fontSize}px ${fixedConfig.textStyle.fontFamily}`
  );

  // رسم النصوص
  fixedConfig.texts.forEach(
    ({ key, x, y, align, color, fontSize, fontWeight }) => {
      ctx.font = `${fontWeight || fixedConfig.textStyle.fontWeight} ${
        fontSize || fixedConfig.textStyle.fontSize
      }px ${fixedConfig.textStyle.fontFamily}`;
      ctx.fillStyle = color || fixedConfig.textStyle.textColor;
      const content = data[key] || "";
      const textWidth = ctx.measureText(content).width;
      let adjustedX = x;

      if (align === "right") adjustedX = x - textWidth;
      else if (align === "center") adjustedX = x - textWidth / 2;

      ctx.fillText(content, adjustedX, y);
    }
  );

  // رسم الصور
  fixedConfig.images.forEach(({ content, x, y, width, height }) => {
    // التحقق من ان الصورة موجوده
    if (content) {
      ctx.drawImage(content, x, y, width, height);
    } else {
      console.warn("Image not found or not loaded, skipping.");
    }
  });
};

CreateContract();
