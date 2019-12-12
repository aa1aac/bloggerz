const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  title: { type: String, required: true },
  content: { required: true, type: String },
  _author: { required: true, type: Schema.Types.ObjectId, ref: "User" },
  likes: { type: Number, default: 0 }
});

module.exports = mongoose.model("Blog", BlogSchema);
