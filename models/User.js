const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  dateCreated: { type: Date, default: Date.now() },
  password: { type: String, required: true }
});

module.exports = mongoose.model("User", UserSchema);
