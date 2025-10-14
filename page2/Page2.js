async function CreateContract() {
  const accountReceiptNo = "123456";
  const canvas = document.getElementById("myCanvas");
  const dynamicData = {
      NUMBER: "2490667684810001",
      CONTRACT_NUMBER: "24-1401-4001102-000109",
      TENANT_NAME_AR: "حصة سامي عبدالمحسن الصمعاني",
      TENANT_NAME_EN: "Hassa Samy Ablulmohsen AlSamaany",
      TENANT_ID: "802843632831352",
      TENANT_TAX_NUM: "328774964423",
      TENANT_EMAIL: "hassa63587@gmail.com",
      TENANT_ADDRESS_AR: "مكة المكرمة - السديره",
      TENANT_ADDRESS_EN: "Makkah Al-Mukarramah - Al Sudayrah",
      TENANT_Notes: "ملاحظات المستأجر",

      DRIVER_NAME_AR: "حصة سامي عبدالمحسن الصمعاني",
      DRIVER_NAME_EN: "Hassa Samy Ablulmohsen AlSamaany",
      DRIVER_ID: "802843632831352",
      DRIVER_ID_TYPE_AR: "قومية",
      DRIVER_ID_TYPE_EN: "Nationalism",
      DRIVER_VERSION_NUM: "512",
      DRIVER_BIRTH_DATE: "1998/01/01",
      DRIVER_GENDER_AR: "أنثى",
      DRIVER_GENDER_EN: "Female",
      DRIVER_NATIONALITY_AR: "سعودي/ة",
      DRIVER_NATIONALITY_EN: "Saudi",
      DRIVER_LICENSE: "9658743131",
      DRIVER_VEHICLE_TYPE_AR: "دراجة نارية",
      DRIVER_VEHICLE_TYPE_EN: "Motorcycle",
      DRIVER_LICENSE_EXPIRY: "2026/11/17",
      DRIVER_POSITION_AR: "معلم/ة",
      DRIVER_POSITION_EN: "Teacher",
      DRIVER_WORKPLACE_AR: "وزارة الاتصالات و تقنية المعلومات",
      DRIVER_WORKPLACE_EN: "Ministry of communication and information technology",
      DRIVER_EMAIL: "hassa63587@gmail.com",
      DRIVER_ADDRESS_AR: "مكة المكرمة - السديره",
      DRIVER_ADDRESS_EN: "Makkah Al-Mukarramah - Al Sudayrah",
      DRIVER_Notes: "ملاحظات السائق",

      ADDITIONAL_DRIVER_NAME_AR: "حصة سامي عبدالمحسن الصمعاني",
      ADDITIONAL_DRIVER_NAME_EN: "Hassa Samy Ablulmohsen AlSamaany",
      ADDITIONAL_DRIVER_ID: "802843632831352",
      ADDITIONAL_DRIVER_IDTYPE_AR: "قومية",
      ADDITIONAL_DRIVER_IDTYPE_EN: "Nationalism",
      ADDITIONAL_DRIVER_VERSION: "512",
      ADDITIONAL_DRIVER_BIRTH_DATE: "1998/01/01",
      ADDITIONAL_DRIVER_GENDER_AR: "أنثى",
      ADDITIONAL_DRIVER_GENDER_EN: "Female",
      ADDITIONAL_DRIVER_NATIONALITY_AR: "سعودي/ة",
      ADDITIONAL_DRIVER_NATIONALITY_EN: "Saudi",
      ADDITIONAL_DRIVER_LICENSE: "9658743131",
      ADDITIONAL_DRIVER_VEHICLE_TYPE_AR: "دراجة نارية",
      ADDITIONAL_DRIVER_VEHICLE_TYPE_EN: "Motorcycle",
      ADDITIONAL_DRIVER_LICENSE_EXPIRY: "2026/11/17",
      ADDITIONAL_DRIVER_POSITION_AR: "معلم/ة",
      ADDITIONAL_DRIVER_POSITION_EN: "Teacher",
      ADDITIONAL_DRIVER_WORKPLACE_AR: "وزارة الاتصالات و تقنية المعلومات",
      ADDITIONAL_DRIVER_WORKPLACE_EN: "Ministry of communication and information technology",
      ADDITIONAL_DRIVER_EMAIL: "hassa63587@gmail.com",
      ADDITIONAL_DRIVER_ADDRESS_AR: "مكة المكرمة - السديره",
      ADDITIONAL_DRIVER_ADDRESS_EN: "Makkah Al-Mukarramah - Al Sudayrah",
      ADDITIONAL_DRIVER_Notes: "ملاحظات السائق الاضافي",

      PRIVATE_DRIVER_NAME_AR: "حصة سامي عبدالمحسن الصمعاني",
      PRIVATE_DRIVER_NAME_EN: "Hassa Samy Ablulmohsen AlSamaany",
      PRIVATE_DRIVER_ID: "802843632831352",
      PRIVATE_DRIVER_ID_TYPE_AR: "قومية",
      PRIVATE_DRIVER_ID_TYPE_EN: "Nationalism",
      PRIVATE_DRIVER_NATIONALITY: "سعودي/ة",
      PRIVATE_DRIVER_NATIONALITY_EN: "Saudi",
      PRIVATE_DRIVER_LICENSE: "9658743131",
      PRIVATE_DRIVER_VEHICLE_TYPE_AR: "دراجة نارية",
      PRIVATE_DRIVER_VEHICLE_TYPE_EN: "Motorcycle",
      PRIVATE_DRIVER_LICENSE_EXPIRY: "2026/11/17",

      SIGNATURE_AR: "عمير رضا عمير مجدي",
      SIGNATURE_EN: "Omir Reda Omir Magdy",
        images: {
              background: "Page2 (2).png",
              EMPLOYEE_SIGN: "../../images/Signature_08.png",
              TENANT_SIGN: "../../images/Signature_08.png",
              QR: "../../images/verificationT.svg",
              STAMP: "../../images/Stamp.png",
              Authentication_STAMP: "../../images/ختم توثيق بنان.png",
      },
  };
  const loadedImages = await loadDynamicImages(dynamicData.images);
  const dataWithImages = { ...dynamicData, images: loadedImages };
  console.log("dataWithImages",dataWithImages);
  await DrawContract(canvas, dataWithImages);
};




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
    { key: "NUMBER", x: canvas.width - 2360, y: 358, align: "left", color: "#0D5485", fontSize: 40, fontWeight: "700" },
    { key: "CONTRACT_NUMBER", x: canvas.width - 2420, y: 405, align: "left", color: "#0D5485", fontSize: 45, fontWeight: "700" },
    // المستأجر //
    { key: "TENANT_NAME_AR", x: canvas.width - 420, y: 510, color: "#0D5485", fontSize: 50, fontWeight: "600", align: "right" },
    { key: "TENANT_NAME_EN", x: canvas.width - 420, y: 570, color: "#0D5485", fontSize: 40, fontWeight: "600", align: "right" },
    { key: "TENANT_ID", x: canvas.width - 518, y: 667 , align: "right" },
    { key: "TENANT_TAX_NUM", x: canvas.width - 1210, y: 667 , align: "right"},
    { key: "TENANT_EMAIL", x: canvas.width - 1730, y: 667 , align: "right"},
    { key: "TENANT_ADDRESS_AR", x: canvas.width - 535, y: 740, fontSize: 40 , align: "right"},
    { key: "TENANT_ADDRESS_EN", x: canvas.width - 535, y: 775, align: "right" },
    { key: "TENANT_Notes", x: canvas.width - 535, y: 845, fontSize: 40 , align: "right"},
    // السائق //
    { key: "DRIVER_NAME_AR", x: canvas.width - 420, y: 970, color: "#0D5485", fontSize: 50, fontWeight: "600" , align: "right"},
    { key: "DRIVER_NAME_EN", x: canvas.width - 420, y: 1030, color: "#0D5485", fontSize: 40, fontWeight: "600", align: "right" },
    { key: "DRIVER_ID", x: canvas.width - 518, y: 1120 , align: "right" },
    { key: "DRIVER_ID_TYPE_AR", x: canvas.width - 1167, y: 1105, fontSize: 40 , align: "right"},
    { key: "DRIVER_ID_TYPE_EN", x: canvas.width - 1167, y: 1145 , align: "right" },
    { key: "DRIVER_VERSION_NUM", x: canvas.width - 1810, y: 1120 , align: "right"},
    { key: "DRIVER_BIRTH_DATE", x: canvas.width - 580, y: 1220  , align: "right"},
    { key: "DRIVER_GENDER_AR", x: canvas.width - 1130, y: 1200, fontSize: 40 , align: "right"  },
    { key: "DRIVER_GENDER_EN", x: canvas.width - 1130, y: 1235  , align: "right"},
    { key: "DRIVER_NATIONALITY_AR", x: canvas.width - 1785, y: 1195, fontSize: 40 , align: "right"},
    { key: "DRIVER_NATIONALITY_EN", x: canvas.width - 1785, y: 1235  , align: "right"},
    { key: "DRIVER_LICENSE", x: canvas.width - 655, y: 1310 , align: "right"},
    { key: "DRIVER_VEHICLE_TYPE_AR", x: canvas.width - 1270, y: 1290, fontSize: 40 , align: "right"},
    { key: "DRIVER_VEHICLE_TYPE_EN", x: canvas.width - 1270, y: 1325 , align: "right"},
    { key: "DRIVER_LICENSE_EXPIRY", x: canvas.width - 1835, y: 1310 , align: "right"},
    { key: "DRIVER_POSITION_AR", x: canvas.width - 555, y: 1380, fontSize: 40 , align: "right"},
    { key: "DRIVER_POSITION_EN", x: canvas.width - 555, y: 1420, align: "right"},
    { key: "DRIVER_WORKPLACE_AR", x: canvas.width - 1175, y: 1385, fontSize: 40 , align: "right"},
    { key: "DRIVER_WORKPLACE_EN", x: canvas.width - 1175, y: 1425 , align: "right" },
    { key: "DRIVER_EMAIL", x: canvas.width - 1730, y: 1400 , align: "right"},
    { key: "DRIVER_ADDRESS_AR", x: canvas.width - 535, y: 1480, fontSize: 40 , align: "right"},
    { key: "DRIVER_ADDRESS_EN", x: canvas.width - 535, y: 1520 , align: "right"},
    { key: "DRIVER_Notes", x: canvas.width - 535, y: 1585, fontSize: 40 , align: "right"},

    // السائق الاضافي //
    { key: "ADDITIONAL_DRIVER_NAME_AR", x: canvas.width - 420, y: 1710, color: "#0D5485", fontSize: 50, fontWeight: "600" , align: "right" },
    { key: "ADDITIONAL_DRIVER_NAME_EN", x: canvas.width - 420, y: 1770, color: "#0D5485", fontSize: 45, fontWeight: "600" , align: "right"},
    { key: "ADDITIONAL_DRIVER_ID", x: canvas.width - 518, y: 1870 , align: "right"},
    { key: "ADDITIONAL_DRIVER_IDTYPE_AR", x: canvas.width - 1167, y: 1850, fontSize: 40 , align: "right" },
    { key: "ADDITIONAL_DRIVER_IDTYPE_EN", x: canvas.width - 1167, y: 1885 , align: "right" },
    { key: "ADDITIONAL_DRIVER_VERSION", x: canvas.width - 1810, y: 1870 , align: "right" },
    { key: "ADDITIONAL_DRIVER_BIRTH_DATE", x: canvas.width - 575, y: 1960 , align: "right" },
    { key: "ADDITIONAL_DRIVER_GENDER_AR", x: canvas.width - 1130, y: 1945, fontSize: 40 , align: "right" },
    { key: "ADDITIONAL_DRIVER_GENDER_EN", x: canvas.width - 1130, y: 1975 , align: "right"},
    { key: "ADDITIONAL_DRIVER_NATIONALITY_AR", x: canvas.width - 1782, y: 1935, fontSize: 40 , align: "right"},
    { key: "ADDITIONAL_DRIVER_NATIONALITY_EN", x: canvas.width - 1782, y: 1975 , align: "right"},
    { key: "ADDITIONAL_DRIVER_LICENSE", x: canvas.width - 655, y: 2055, align: "right" },
    { key: "ADDITIONAL_DRIVER_VEHICLE_TYPE_AR", x: canvas.width - 1270, y: 2030, fontSize: 40 , align: "right"},
    { key: "ADDITIONAL_DRIVER_VEHICLE_TYPE_EN", x: canvas.width - 1270, y: 2070 , align: "right" },
    { key: "ADDITIONAL_DRIVER_LICENSE_EXPIRY", x: canvas.width - 1835, y: 2055 , align: "right"},
    { key: "ADDITIONAL_DRIVER_POSITION_AR", x: canvas.width - 560, y: 2125, fontSize: 40 , align: "right"},
    { key: "ADDITIONAL_DRIVER_POSITION_EN", x: canvas.width - 560, y: 2160 , align: "right"},
    { key: "ADDITIONAL_DRIVER_WORKPLACE_AR", x: canvas.width - 1175, y: 2125, fontSize: 40  , align: "right"},
    { key: "ADDITIONAL_DRIVER_WORKPLACE_EN", x: canvas.width - 1175, y: 2160 , align: "right" },
    { key: "ADDITIONAL_DRIVER_EMAIL", x: canvas.width - 1730, y: 2140 , align: "right" },
    { key: "ADDITIONAL_DRIVER_ADDRESS_AR", x: canvas.width - 535, y: 2220, fontSize: 40 , align: "right"},
    { key: "ADDITIONAL_DRIVER_ADDRESS_EN", x: canvas.width - 535, y: 2255 , align: "right" },
    { key: "ADDITIONAL_DRIVER_Notes", x: canvas.width - 535, y: 2330, fontSize: 40 , align: "right"},

    // // سائق خاص  //
    { key: "PRIVATE_DRIVER_NAME_AR", x: canvas.width - 420, y: 2455, color: "#0D5485", fontSize: 50, fontWeight: "600" , align: "right" },
    { key: "PRIVATE_DRIVER_NAME_EN", x: canvas.width - 420, y: 2515, color: "#0D5485", fontSize: 45, fontWeight: "600", align: "right" },
    { key: "PRIVATE_DRIVER_ID", x: canvas.width - 518, y: 2625 , align: "right"},
    { key: "PRIVATE_DRIVER_ID_TYPE_AR", x: canvas.width - 1167, y: 2605, fontSize: 40 , align: "right"},
    { key: "PRIVATE_DRIVER_ID_TYPE_EN", x: canvas.width - 1167, y: 2640 , align: "right"},
    { key: "PRIVATE_DRIVER_NATIONALITY", x: canvas.width - 1785, y: 2600, fontSize: 40 , align: "right"},
    { key: "PRIVATE_DRIVER_NATIONALITY_EN", x: canvas.width - 1785, y: 2640 , align: "right" },
    { key: "PRIVATE_DRIVER_LICENSE", x: canvas.width - 655, y: 2715 , align: "right"},
    { key: "PRIVATE_DRIVER_VEHICLE_TYPE_AR", x: canvas.width - 1270, y: 2695, fontSize: 40 , align: "right" },
    { key: "PRIVATE_DRIVER_VEHICLE_TYPE_EN", x: canvas.width - 1270, y: 2732 , align: "right" },
    { key: "PRIVATE_DRIVER_LICENSE_EXPIRY", x: canvas.width - 1835, y: 2715 , align: "right"},
    // التوقيع //
    { key: "SIGNATURE_AR", x: canvas.width - 280, y: 2830, fontSize: 40 , align: "right" },
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
      textAlign: "right",
  },
};

await document.fonts.load(`${fixedConfig.textStyle.fontWeight} ${fixedConfig.textStyle.fontSize}px ${fixedConfig.textStyle.fontFamily}`);

// رسم النصوص

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text; 

  const isArabic = /[\u0600-\u06FF]/.test(text); 
  return isArabic 
      ? "..." + text.substring(0, maxLength)  
      : text.substring(0, maxLength) + "..."; 
};


const keysToTruncate = ["DRIVER_WORKPLACE_AR", "DRIVER_WORKPLACE_EN" , "ADDITIONAL_DRIVER_WORKPLACE_EN" ,"ADDITIONAL_DRIVER_WORKPLACE_AR"]; 

fixedConfig.texts.forEach(({ key, x, y, align , color , fontSize , fontWeight}) => {

  ctx.font =  `${fontWeight || fixedConfig.textStyle.fontWeight} ${fontSize || fixedConfig.textStyle.fontSize}px ${fixedConfig.textStyle.fontFamily} `;
  ctx.fillStyle = color||fixedConfig.textStyle.textColor;
  var content = data[key] || "";

  if (keysToTruncate.includes(key)) {
    content = truncateText(content, 36);
}
  const textWidth = ctx.measureText(content).width;
  let adjustedX = x;

  if (align === "right") adjustedX = x - textWidth;
  else if (align === "center") adjustedX = x - textWidth / 2;

  ctx.fillText(content, adjustedX, y);
});

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


CreateContract() 
