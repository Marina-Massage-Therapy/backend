import express from "express";
const router = express.Router();

import testimonialRoute from "./testimonial.js";
import userRoute from "./user.js";

router.use("/user", userRoute);

router.use("/testimonials", testimonialRoute);

export default router;
