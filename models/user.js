import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: String,
  name: String,
  email: String,
  treatment: String,
  date: Date,
  message: String,
  person: String,
});

const User = mongoose.model("user", userSchema);
export default User;

