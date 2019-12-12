const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ResponseSchema = new Schema({
  responder: { required: true, type: document },
  response: { required: true, type: String },
  likes: { required: true, default: 0 },
  parent: { required: true, type: ObjectId },
  edited: { type: Boolean, default: false }
});

module.exports = mongoose.model("Response", ResponseSchema);
