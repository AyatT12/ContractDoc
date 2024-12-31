let canvas_width = 2481;

let loadImageOnCanvasAndThenWriteText = (
  canvas,
  imageUrl,
  texts,
  textStyleOptions,
  Images
) => {
  let ctx = canvas.getContext("2d");
  ctx.direction = "ltr";

  let img = new Image();

  img.onload = () => {
    let loadedImageWidth = img.width;
    let loadedImageHeight = img.height;

    canvas.width = loadedImageWidth;
    canvas.height = loadedImageHeight;

    ctx.drawImage(img, 0, 0);

    texts.forEach((text) => {
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

    Images.forEach((Image) => {
      ctx.drawImage(Image.content, Image.x, Image.y, Image.width, Image.height);
    });

    let base64Link = canvas.toDataURL("image/png");
    console.log(base64Link);
  };

  img.src = imageUrl;
};

document.addEventListener("DOMContentLoaded", () => {
  let theCanvas = document.getElementById("myCanvas");

  let imageUrl = "page2 (3).png";
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
      fontSize: 40,
      fontWeight: "700",
    },
    {
      content: "24-1401-4001102-000109",
      x: canvas_width - 2420,
      y: 410,
      align: "left",
      color: "#0D5485",
      fontSize: 45,
      fontWeight: "700",
    },
    // المستأجر //
    {
      content: "حصة سامي عبدالمحسن الصمعاني",
      x: canvas_width - 420,
      y: 515,
      color: "#0D5485",
      fontSize: 50,
      fontWeight: "600",
    },
    {
      content: "Hassa Samy Ablulmohsen AlSamaany",
      x: canvas_width - 420,
      y: 590,
      color: "#0D5485",
      fontSize: 45,
      fontWeight: "600",
    },
    {
      content: "802843632831352",
      x: canvas_width - 518,
      y: 677,
    },
    {
      content: "328774964423",
      x: canvas_width - 1210,
      y: 677,
    },
    {
      content: "hassa63587@gmail.com",
      x: canvas_width - 1730,
      y: 677,
    },
    {
      content: "مكة المكرمة - السديره",
      x: canvas_width - 535,
      y: 762,
      fontSize: 40,
    },
    {
      content: "Makkah Al-Mukarramah -  Al Sudayrah",
      x: canvas_width - 535,
      y: 805,
    },
    // السائق //
    {
      content: "حصة سامي عبدالمحسن الصمعاني",
      x: canvas_width - 420,
      y: 920,
      color: "#0D5485",
      fontSize: 50,
      fontWeight: "600",
    },
    {
      content: "Hassa Samy Ablulmohsen AlSamaany",
      x: canvas_width - 420,
      y: 995,
      color: "#0D5485",
      fontSize: 45,
      fontWeight: "600",
    },
    ,
    {
      content: "802843632831352",
      x: canvas_width - 518,
      y: 1082,
    },
    {
      content: "قومية",
      x: canvas_width - 1167,
      y: 1067,
      fontSize: 40,
    },
    {
      content: "Nationalism",
      x: canvas_width - 1167,
      y: 1104,
    },
    {
      content: "512",
      x: canvas_width - 1800,
      y: 1082,
    },
    {
      content: "01/12/1998",
      x: canvas_width - 575,
      y: 1182,
    },
    {
      content: "أنثى",
      x: canvas_width - 1120,
      y: 1167,
      fontSize: 40,
    },
    {
      content: "Female",
      x: canvas_width - 1120,
      y: 1205,
    },
    {
      content: "سعودي/ة",
      x: canvas_width - 1775,
      y: 1167,
      fontSize: 40,
    },
    {
      content: "Saudi",
      x: canvas_width - 1775,
      y: 1205,
    },
    {
      content: "9658743131",
      x: canvas_width - 655,
      y: 1290,
    },
    {
      content: "دراجة نارية",
      x: canvas_width - 1270,
      y: 1278,
      fontSize: 40,
    },
    {
      content: "Motorcycle",
      x: canvas_width - 1270,
      y: 1316,
    },
    {
      content: "17/11/2026",
      x: canvas_width - 1750,
      y: 1290,
    },
    {
      content: "معلم/ة",
      x: canvas_width - 545,
      y: 1377,
      fontSize: 40,
    },
    {
      content: "Teacher",
      x: canvas_width - 545,
      y: 1415,
    },
    ,
    {
      content: "وزارة التعليم",
      x: canvas_width - 1175,
      y: 1377,
      fontSize: 40,
    },
    {
      content: "Ministry of Education",
      x: canvas_width - 1175,
      y: 1415,
    },
    ,
    {
      content: "hassa63587@gmail.com",
      x: canvas_width - 1730,
      y: 1395,
    },
    {
      content: "مكة المكرمة - السديره",
      x: canvas_width - 535,
      y: 1480,
      fontSize: 40,
    },
    {
      content: "Makkah Al-Mukarramah -  Al Sudayrah",
      x: canvas_width - 535,
      y: 1520,
    },
    // السائق الاضافي //
    {
      content: "حصة سامي عبدالمحسن الصمعاني",
      x: canvas_width - 420,
      y: 1640,
      color: "#0D5485",
      fontSize: 50,
      fontWeight: "600",
    },
    {
      content: "Hassa Samy Ablulmohsen AlSamaany",
      x: canvas_width - 420,
      y: 1710,
      color: "#0D5485",
      fontSize: 45,
      fontWeight: "600",
    },
    {
      content: "802843632831352",
      x: canvas_width - 518,
      y: 1797,
    },
    {
      content: "قومية",
      x: canvas_width - 1167,
      y: 1777,
      fontSize: 40,
    },
    {
      content: "Nationalism",
      x: canvas_width - 1167,
      y: 1815,
    },
    {
      content: "512",
      x: canvas_width - 1800,
      y: 1797,
    },
    {
      content: "01/12/1998",
      x: canvas_width - 575,
      y: 1900,
    },
    {
      content: "أنثى",
      x: canvas_width - 1120,
      y: 1885,
      fontSize: 40,
    },
    {
      content: "Female",
      x: canvas_width - 1120,
      y: 1920,
    },
    {
      content: "سعودي/ة",
      x: canvas_width - 1775,
      y: 1885,
      fontSize: 40,
    },
    {
      content: "Saudi",
      x: canvas_width - 1775,
      y: 1920,
    },
    {
      content: "9658743131",
      x: canvas_width - 655,
      y: 2005,
    },
    {
      content: "دراجة نارية",
      x: canvas_width - 1270,
      y: 1995,
      fontSize: 40,
    },
    {
      content: "Motorcycle",
      x: canvas_width - 1270,
      y: 2032,
    },
    {
      content: "17/11/2026",
      x: canvas_width - 1750,
      y: 2005,
    },
    {
      content: "معلم/ة",
      x: canvas_width - 545,
      y: 2095,
      fontSize: 40,
    },
    {
      content: "Teacher",
      x: canvas_width - 545,
      y: 2130,
    },
    ,
    {
      content: "وزارة التعليم",
      x: canvas_width - 1175,
      y: 2095,
      fontSize: 40,
    },
    {
      content: "Ministry of Education",
      x: canvas_width - 1175,
      y: 2130,
    },
    ,
    {
      content: "hassa63587@gmail.com",
      x: canvas_width - 1730,
      y: 2110,
    },
    {
      content: "مكة المكرمة - السديره",
      x: canvas_width - 535,
      y: 2199,
      fontSize: 40,
    },
    {
      content: "Makkah Al-Mukarramah -  Al Sudayrah",
      x: canvas_width - 535,
      y: 2235,
    },
    // سائق خاص  //
    {
      content: "حصة سامي عبدالمحسن الصمعاني",
      x: canvas_width - 420,
      y: 2355,
      color: "#0D5485",
      fontSize: 50,
      fontWeight: "600",
    },
    {
      content: "Hassa Samy Ablulmohsen AlSamaany",
      x: canvas_width - 420,
      y: 2430,
      color: "#0D5485",
      fontSize: 45,
      fontWeight: "600",
    },
    {
      content: "802843632831352",
      x: canvas_width - 518,
      y: 2510,
    },
    {
      content: "قومية",
      x: canvas_width - 1167,
      y: 2490,
      fontSize: 40,
    },
    {
      content: "Nationalism",
      x: canvas_width - 1167,
      y: 2530,
    },
    {
      content: "سعودي/ة",
      x: canvas_width - 1775,
      y: 2490,
      fontSize: 40,
    },
    {
      content: "Saudi",
      x: canvas_width - 1775,
      y: 2530,
    },
    {
      content: "9658743131",
      x: canvas_width - 655,
      y: 2620,
    },
    {
      content: "دراجة نارية",
      x: canvas_width - 1270,
      y: 2610,
      fontSize: 40,
    },
    {
      content: "Motorcycle",
      x: canvas_width - 1270,
      y: 2645,
    },
    {
      content: "17/11/2026",
      x: canvas_width - 1750,
      y: 2620,
    },
    // التوقيع //
    {
      content: "عمير رضا عمير مجدي",
      x: canvas_width - 280,
      y: 2830,
      fontSize: 40,
    },
    {
      content: "Omir Reda Omir Magdy",
      x: canvas_width - 280,
      y: 2870,
    },
  ];

  let Images = [
    {
      content: QrImg,
      x: canvas_width - 2435,
      y: 2800,
      width: 200,
      height: 200,
    },
    {
      content: EmployeeSignature,
      x: canvas_width - 670,
      y: 2790,
      width: 150,
      height: 150,
    },
    {
      content: TenantSignature,
      x: canvas_width - 500,
      y: 2880,
      width: 150,
      height: 150,
    },
    { content: stamp, x: canvas_width - 725, y: 2810, width: 150, height: 150 },
    {
      content: stamp2,
      x: canvas_width - 545,
      y: 2905,
      width: 150,
      height: 150,
    },
  ];

  let textStyleOptions = {
    fontWeight: "normal",
    fontSize: 35,
    fontFamily: "Sakkal Majalla Regular",
    textColor: "#000000",
    textAlign: "right",
  };

  // Ensure the font is loaded
  document.fonts
    .load(`normal 35px "${textStyleOptions.fontFamily}"`)
    .then(() => {
      loadImageOnCanvasAndThenWriteText(
        theCanvas,
        imageUrl,
        texts,
        textStyleOptions,
        Images
      );
    });
});
