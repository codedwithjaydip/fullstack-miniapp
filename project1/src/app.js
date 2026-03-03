const express = require("express");
const multer = require("multer");
const { uploadFile } = require("./services/storage.services");
const postModel = require("./models/post.model");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
const upload = multer({ storage: multer.memoryStorage() });

app.post("/create-post", upload.single("image"), async (req, res) => {
  const result = await uploadFile(req.file.buffer);
  console.log(result);

  const post = await postModel.create({
    image: result.url,
    caption: req.body.caption,
  });
  return res.status(201).json({
    message: "Post created successfully",
    post,
  });
});
app.get("/posts", async (req, res) => {
  const post = await postModel.find();
  return res.status(200).json({ message: "posts fetched successfully", post });
});

module.exports = app;
