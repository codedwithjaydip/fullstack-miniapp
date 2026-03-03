const mongoose = require("mongoose");

const postschema = new mongoose.Schema({ image: String, caption: String });

const postmodel = mongoose.model("post", postschema);

module.exports = postmodel;
