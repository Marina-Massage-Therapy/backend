import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema({
  fullname: String,
  message: String,
}, { _id: true });


const Testimonial = mongoose.model("Testimonial", testimonialSchema);

export default Testimonial;
