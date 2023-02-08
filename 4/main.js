const fs = require("fs");
const pngToJpeg = require("png-to-jpeg");

const buffer = fs.readFileSync("./images.png");
pngToJpeg(
  { quality: 90 },
  { width: "500px" },
  { height: "500px" }
)(buffer).then((output) => fs.writeFileSync("./images.jpeg", output));
