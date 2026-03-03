const imagekit = require("@imagekit/nodejs");

const Imagekit = new imagekit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function uploadFile(buffer) {
  const result = await Imagekit.files.upload({
    file: buffer.toString("base64"),
    fileName: "image.jpg",
  });
  return result;
}
module.exports = { uploadFile };
