let canvas_width = 2481;

let loadImageOnCanvasAndThenWriteText = (canvas, imageUrl, texts, textStyleOptions, Images) => {
  let ctx = canvas.getContext("2d");
  ctx.direction = "ltr";

  let img = new Image();

  img.onload = () => {
    let loadedImageWidth = img.width;
    let loadedImageHeight = img.height;

    canvas.width = loadedImageWidth;
    canvas.height = loadedImageHeight;

    ctx.drawImage(img, 0, 0);

    texts.forEach(text => {
      // Use individual font size and color if provided, or fallback to default
      const fontSize = text.fontSize || textStyleOptions.fontSize;
      const fontColor = text.color || textStyleOptions.textColor;
      const fontWeight = text.fontWeight || textStyleOptions.fontWeight;
      const fontFamily = text.fontFamily || textStyleOptions.fontFamily;

      ctx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
      ctx.fillStyle = fontColor;

      let textWidth = ctx.measureText(text.content).width;

      let x = text.x;

      const align = text.align || textStyleOptions.textAlign;

      if (align === "right") {
        x -= textWidth; 
      } else if (align === "center") {
        x -= textWidth / 2; 
      }

      ctx.fillText(text.content, x, text.y);
    });

    Images.forEach(Image => {
      ctx.drawImage(Image.content, Image.x, Image.y, Image.width, Image.height);
    });

    let base64Link = canvas.toDataURL("image/png");
    console.log(base64Link);
  };

  img.src = imageUrl;
};

document.addEventListener("DOMContentLoaded", () => {
  let theCanvas = document.getElementById("myCanvas");

  let imageUrl = "page1 (2).png";
  var QrImg = new Image();
  var stamp = new Image();
  var stamp2 = new Image();
  var EmployeeSignature = new Image();
  var TenantSignature = new Image();

  QrImg.src = "../images/BenanQR.png";
  stamp.src = "../images/stamp.png";
  stamp2.src = "../images/توثيق العقد بنان 1.png";
  EmployeeSignature.src = "../images/Signature_08.png";
  TenantSignature.src = "../images/Signature_09.png";

  let texts = [
    { 
      content: "2490667684810001", 
      x: canvas_width - 2360, 
      y: 358, 
      align: "left", 
      color: "#0D5485", 
      fontSize: 40 ,
      fontWeight: "700",

    },
    { 
      content: "24-1401-4001102-000109", 
      x: canvas_width - 2420, 
      y: 410, 
      align: "left", 
      color: "#0D5485", 
      fontSize: 45 ,
      fontWeight: "700",

    },
    // العقد //
    { 
      content: "الثلاثاء، 9 جمادى الآخرة 1446", 
      x: canvas_width - 604, 
      y: 510, 
      fontSize: 40 
    },
    { 
      content: "Tuesday, 9 Jumada al-Akhirah 1446", 
      x: canvas_width - 604, 
      y: 550, 
    },
    { 
      content: "الثلاثاء، 9 جمادى الآخرة 1446", 
      x: canvas_width - 604, 
      y: 615, 
      fontSize: 40 
    },
    { 
      content: "Tuesday, 9 Jumada al-Akhirah 1446", 
      x: canvas_width - 604, 
      y: 655, 
    },
    { 
      content: "الجمعة، 19 جمادى الآخرة 1446", 
      x: canvas_width - 604, 
      y: 720, 
      fontSize: 40 
    },
    { 
      content: "Friday, 19 Jumada al-Akhirah 1446", 
      x: canvas_width - 604, 
      y: 760, 
    },
    { 
      content: "جديد / باليوم بدون سائق", 
      x: canvas_width - 604, 
      y: 822, 
      fontSize: 40 
    },
    { 
      content: "New / Daily without Driver ", 
      x: canvas_width - 604, 
      y: 860, 
    },
    { 
      content: "10/12/2024", 
      x: canvas_width - 1900, 
      y: 522, 
    },
    { 
      content: "12:23:26", 
      x: canvas_width - 1755, 
      y: 522, 
    },
    { 
      content: "10/12/2024", 
      x: canvas_width - 1900, 
      y: 626, 
    },
    { 
      content: "12:23:26", 
      x: canvas_width - 1755, 
      y: 626, 
    },
    { 
      content: "10/12/2024", 
      x: canvas_width - 1900, 
      y: 730, 
    },
    { 
      content: "12:23:26", 
      x: canvas_width - 1755, 
      y: 730, 
    },
    // الفرع //
    { 
      content: "جعرانة الرئيسي", 
      x: canvas_width - 420, 
      y: 980, 
      color: "#0D5485", 
      fontSize: 50 ,
      fontWeight: "600",
    },
    { 
      content: "Main Jaarana", 
      x: canvas_width - 420, 
      y: 1050, 
      color: "#0D5485", 
      fontSize: 45 ,
      fontWeight: "600",
    },
    { 
      content: "96653697455", 
      x: canvas_width - 526, 
      y: 1140, 
    },
    { 
      content: "966125874545", 
      x: canvas_width - 1130, 
      y: 1140, 
    },
    { 
      content: "KodiRenter@gmail.com", 
      x: canvas_width - 1730, 
      y: 1140, 
    },
    { 
      content: "مكة المكرمة - جعرانة - أجياد السد - جعرانة الرئيسي - مبنى (411021) - وحدة (22) - الرمز البريدي (40023) - الرقم الإضافي (4024)", 
      x: canvas_width - 535, 
      y: 1225, 
      fontSize: 40 

    },
    { 
      content: "Makkah Al-Mukarramah - Jaarana - Ajyad Al-Sad - Jaarana Main - Building (411021) - Unit (22) - Postal Code (40023)", 
      x: canvas_width - 535, 
      y: 1265, 
    },
    // السيارة //
    { 
      content: "تويوتا - كورولا - سيدان صغيرة - 2021 - ص ع ح 3162 - كحلي", 
      x: canvas_width - 425, 
      y: 1420, 
      color: "#0D5485", 
      fontSize: 50 ,
      fontWeight: "600",

    },
    { 
      content: "Toyota - Corolla - Small Sedan - 2021 - S.A.H. 3162 - Navy", 
      x: canvas_width - 425, 
      y: 1495, 
      color: "#0D5485", 
      fontSize: 45 ,
      fontWeight: "600",
    },
    { 
      content: "1020001785", 
      x: canvas_width - 630, 
      y: 1580, 
    },
    { 
      content: "خصوصي", 
      x: canvas_width - 1785, 
      y: 1580, 
      fontSize: 40 
    },
    { 
      content: "Private", 
      x: canvas_width - 1785, 
      y: 1620, 
    },
    { 
      content: "بنزين أوكتان", 
      x: canvas_width - 560, 
      y: 1667, 
      fontSize: 40 
    },
    { 
      content: "Octane Gasoline", 
      x: canvas_width - 560, 
      y: 1705, 
    },
    { 
      content: "آلي", 
      x: canvas_width - 1845, 
      y: 1667, 
      fontSize: 40 
    },
    { 
      content: "Automatic", 
      x: canvas_width - 1845, 
      y: 1705, 
    },
    { 
      content: "سوبر شل", 
      x: canvas_width - 560, 
      y: 1771, 
      fontSize: 40 
    },
    { 
      content: "Super Shell", 
      x: canvas_width - 560, 
      y: 1811, 
    },
    { 
      content: "20/10/2024", 
      x: canvas_width - 1832, 
      y: 1785, 
    },
    { 
      content: "20/10/2025", 
      x: canvas_width - 680, 
      y: 1890, 
    },
    { 
      content: "20/10/2025", 
      x: canvas_width - 1955, 
      y: 1890, 
    },
    { 
      content: "1080001785", 
      x: canvas_width - 625, 
      y: 1997, 
    },
    { 
      content: "17/11/2026", 
      x: canvas_width - 1765, 
      y: 1997, 
    },
    { 
      content: "KG87/41Y/2021/151769", 
      x: canvas_width - 600, 
      y: 2100, 
    },
    { 
      content: "17/11/2026", 
      x: canvas_width - 1765, 
      y: 2100, 
    },
    { 
      content: "12/09/2025", 
      x: canvas_width - 675, 
      y: 2205, 
    },
    { 
      content: "17/11/2026", 
      x: canvas_width - 1855, 
      y: 2205, 
    },
    { 
      content: "12/09/2025", 
      x: canvas_width - 705, 
      y: 2310, 
    },
    { 
      content: "17/11/2026", 
      x: canvas_width - 1930, 
      y: 2310, 
    },
    // المالك //
    { 
      content: "شركة الوعلان للسيارات", 
      x: canvas_width - 425, 
      y: 2450, 
      color: "#0D5485", 
      fontSize: 50 ,
      fontWeight: "600",

    },
    { 
      content: "Al Waalan Car Company", 
      x: canvas_width - 425, 
      y: 2520, 
      color: "#0D5485", 
      fontSize: 45 ,
      fontWeight: "600",
    },
    { 
      content: "7004004150", 
      x: canvas_width - 515, 
      y: 2610, 
    },
    { 
      content: "سجل تجاري", 
      x: canvas_width - 1170, 
      y: 2597, 
      fontSize: 40 ,

    },
    { 
      content: "Commercial Register", 
      x: canvas_width - 1170, 
      y: 2634, 
    },
    { 
      content: "512", 
      x: canvas_width - 1810, 
      y: 2610, 
    },
    { 
      content: "966125874545", 
      x: canvas_width - 526, 
      y: 2715, 
    },
    { 
      content: "KodiRenter@gmail.com", 
      x: canvas_width - 1125, 
      y: 2715, 
    },
    // التوقيع //
    { 
      content: "عمير رضا عمير مجدي", 
      x: canvas_width - 280, 
      y: 2830,      
     fontSize: 40 ,

    },
    { 
      content: "Omir Reda Omir Magdy", 
      x: canvas_width - 280, 
      y: 2870,      

    },
  ];

  let Images = [
    { content: QrImg, x: canvas_width - 2435, y: 2800, width: 200, height: 200 },
    { content: EmployeeSignature, x: canvas_width - 670, y: 2790, width: 150, height: 150 },
    { content: TenantSignature,x: canvas_width - 500, y: 2880, width: 150, height: 150 },
    { content: stamp, x: canvas_width - 725, y: 2810, width: 150, height: 150 },
    { content: stamp2, x: canvas_width - 545, y: 2905, width: 150, height: 150 },

  ];

  let textStyleOptions = {
    fontWeight: "normal",
    fontSize: 35,
    fontFamily: "Sakkal Majalla Regular",
    textColor: "#000000",
    textAlign: "right"
  };

  // Ensure the font is loaded
  document.fonts.load(`normal 35px "${textStyleOptions.fontFamily}"`).then(() => {
    loadImageOnCanvasAndThenWriteText(theCanvas, imageUrl, texts, textStyleOptions, Images);
  });
});
