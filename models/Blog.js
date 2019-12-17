const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  title: { type: String, required: true },
  lead: { type: String, required: true },
  content: { required: true, type: Array },
  _author: { required: true, type: Schema.Types.ObjectId, ref: "User" },
  likes: { type: Number, default: 0 },
  dateCreated: { type: Date, default: Date.now() }
});

module.exports = mongoose.model("Blog", BlogSchema);
