const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ResponseSchema = new Schema({
  responder: { required: true, type: String },
  response: { required: true, type: String },
  parent: { required: true, type: Schema.Types.ObjectId, ref: "Blog" }
});

module.exports = mongoose.model("Response", ResponseSchema);
