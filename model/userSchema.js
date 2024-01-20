const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  id: String,
  name: String,
  email: String,
  treatment: String,
  date: Date,
  message: String,
  person: String,
});

const User = mongoose.model("user", userSchema);
module.exports = User;
