import express from "express";
import testimonialRoute from "./testimonial.js";
const router = express.Router();

router.use("/testimonials", testimonialRoute);

export default router;
