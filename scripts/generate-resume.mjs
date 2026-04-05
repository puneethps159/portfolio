import fs from "node:fs";
import path from "node:path";
import PDFDocument from "pdfkit";

const outputPath = path.resolve("public", "Puneeth Kumar PS.Resume.pdf");
const doc = new PDFDocument({ size: "A4", margin: 48, bufferPages: true });
const stream = fs.createWriteStream(outputPath);
doc.pipe(stream);

const pageWidth = doc.page.width - doc.page.margins.left - doc.page.margins.right;
const accent = "#b45309";
const dark = "#1f2937";
const muted = "#4b5563";

function sectionTitle(title, y) {
  doc.fillColor(accent).fontSize(13).font("Helvetica-Bold").text(title.toUpperCase(), 48, y);
  doc.moveTo(48, y + 18).lineTo(48 + pageWidth, y + 18).strokeColor("#d6c6b8").lineWidth(1).stroke();
}

function bulletList(items, x, y, width) {
  let cursor = y;
  items.forEach((item) => {
    const height = doc.heightOfString(item, { width: width - 16, align: "left" });
    doc.fillColor(accent).fontSize(11).text("•", x, cursor);
    doc.fillColor(muted).fontSize(11).text(item, x + 12, cursor, { width: width - 16, align: "left" });
    cursor += height + 6;
  });
  return cursor;
}

doc.rect(0, 0, doc.page.width, 110).fill("#f5efe6");
doc.fillColor(dark).font("Helvetica-Bold").fontSize(24).text("PUNEETH KUMAR P S", 48, 46);
doc.fillColor(muted).font("Helvetica").fontSize(11).text("Civil Engineer | Structural Engineering | Civil Class-1 Contractor", 48, 76);
doc.fillColor(muted).fontSize(10).text("Phone: 8431197599   |   Email: puneethps2@gmail.com   |   Chitradurga, Karnataka", 48, 92);

let y = 136;
sectionTitle("Career Objective", y);
y += 28;
doc.fillColor(muted).fontSize(11).text(
  "Taking for a challenging position as a civil engineer, where I can use my planning, designing and overseeing skills in construction and help grow the company to achieve its goal.",
  48,
  y,
  { width: pageWidth, align: "left", lineGap: 3 }
);

y += 56;
sectionTitle("Academic Credentials", y);
y += 28;
const academic = [
  "M.Tech in Structural Engineering - completed",
  "B.E. Civil Engineering, 2021, Sri Siddhartha Institute Of Engineering College, Marulur, Tumkur",
  "PUC, 69.00%, 2017, Sri Taralabalu Jagadhguru Pre University College, Davangere, Karnataka State Board",
  "SSLC, 7.8 CGPA, 2015, Anmol Public School, Shiramagondanahalli, Davangere, Central Board Of Secondary Education",
];
y = bulletList(academic, 48, y, pageWidth);

y += 12;
sectionTitle("Key Skills", y);
y += 28;
const skills = [
  "Quick Learner",
  "Confident",
  "Team Player",
  "Active Listener",
  "Excellent Communication",
  "Adaptive in Nature",
  "Good Leadership Qualities",
  "Positive Minded Person",
];
y = bulletList(skills, 48, y, pageWidth);

y += 12;
sectionTitle("Certifications", y);
y += 28;
const certs = [
  "Certification in C++",
  "HTML",
  "MS Office - 2007",
  "Manual testing pursuing",
  "Basics of Java",
];
y = bulletList(certs, 48, y, pageWidth);

y += 12;
sectionTitle("Project", y);
y += 28;
doc.fillColor(dark).font("Helvetica-Bold").fontSize(11).text("Construction Of CHECK DAM", 48, y);
y += 16;
doc.fillColor(muted).font("Helvetica").fontSize(11).text("Duration: 4 Months", 48, y);
y += 16;
doc.text(
  "A check dam is a small dam constructed across a drainage ditch, swale, or channel to lower the velocity of flow. Reduced runoff velocity reduces erosion and gullying in the channel and allows sediments to settle out. A check dam may be built from stone, sandbags filled with pea gravel, or logs.",
  48,
  y,
  { width: pageWidth, align: "left", lineGap: 3 }
);

const projectHeight = doc.heightOfString(
  "A check dam is a small dam constructed across a drainage ditch, swale, or channel to lower the velocity of flow. Reduced runoff velocity reduces erosion and gullying in the channel and allows sediments to settle out. A check dam may be built from stone, sandbags filled with pea gravel, or logs.",
  { width: pageWidth, align: "left", lineGap: 3 }
);

y += projectHeight + 18;
sectionTitle("Personal Details", y);
y += 28;
const personal = [
  "Date of Birth: 26 January 2000",
  "Father's Name: Prabhulingaiah M K",
  "Languages Known: English, Kannada and Telugu",
  "Personal Address: Prabhulingaiah M K, Dasikatte, Ramagiri, Holalkere (Tq), Chitradurga (Dist)",
];
y = bulletList(personal, 48, y, pageWidth);

y += 18;
sectionTitle("Declaration", y);
y += 28;
doc.fillColor(muted).font("Helvetica").fontSize(11).text(
  "I hereby declare that the information stated above is correct to the best of my knowledge and I hold the responsibility for any disparity found.",
  48,
  y,
  { width: pageWidth, align: "left", lineGap: 3 }
);

doc.end();

stream.on("finish", () => {
  console.log(`Wrote ${outputPath}`);
});
