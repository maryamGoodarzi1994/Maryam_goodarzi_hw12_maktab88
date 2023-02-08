const path = require("path");
const fs = require("fs").promises;

const libre = require("libreoffice-convert");

libre.convertAsync = require("util").promisify(libre.convert);

async function main() {
  const ext = ".pdf";
  const inputPath = path.join(__dirname, "/../../maryam_goodarz_resume.docx");
  const outputPath = path.join(__dirname, `/../../maryam_goodarz_resume${ext}`);

  //read file
  const docxbuf = await fs.readFile(inputPath);

  //convert it to pdf format with undefiend filter

  let pdfBuf = await libre.convertAsync(docxbuf, ext, undefined);

  // here in done you have pdf file which you can save or transfer in another stream

  await fs.writeFile(outputPath, pdfBuf);
}
main().then(console.log('done')).catch((err) => console.log(err));
