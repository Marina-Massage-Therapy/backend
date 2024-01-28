import express from "express";
const router = express.Router(); // Changed Router() to express.Router()
import {
    fetchTestimonials,
    createTestimonial,
    deleteTestimonial,
    updateTestimonial
} from "../controllers/testimonial.js";

router.get("/fetchTestimonials", fetchTestimonials);
router.post("/createTestimonial", createTestimonial);
router.patch("/deleteTestimonial", deleteTestimonial);
router.patch("/updateTestimonial", updateTestimonial);

export default router;
