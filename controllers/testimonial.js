import Testimonial from "../models/testimonial.js";

const fetchTestimonials = async (req, res) => {
    try {
        const testimonials = await Testimonial.find();
        return res.status(200).json(testimonials);
    } catch (error) {
        console.error("Error fetching testimonials:", error);
        res.status(500).json({ message: "Error fetching products", error: error.message });
    }
};

const createTestimonial = async (req, res) => {
    try {
        const { fullname, message } = req.body; // Extract fullname and message from the request body
        const newTestimonial = new Testimonial({
            fullname,
            message,
        });
        await newTestimonial.save();
        const createdTestimonial = await Testimonial.findById(newTestimonial._id);
        res.status(201).json({ createdTestimonial });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};


const updateTestimonial = async (req, res) => {
    const { testimonial } = req.body;
    try {
        const updatedTestimonial = await Testimonial.findByIdAndUpdate(
            testimonial._id,
            testimonial, // Add the update data here
            { new: true, runValidators: true } // Options to return the updated document and run validators
        );
        if (!updatedTestimonial) {
            return res.status(404).send("No testimonial with that id");
        }
        res.json(updatedTestimonial); // Send the updated testimonial directly, not inside an object
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const deleteTestimonial = async (req, res) => {
    const { _id } = req.body;
    console.log(req.body)
    try {
        const deletedTestimonial = await Testimonial.findByIdAndDelete(_id);
        if (!deletedTestimonial) {
            return res.status(404).send("No testimonial with that id");
        }
        res.json({ message: "Testimonial deleted successfully." });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



export { fetchTestimonials, createTestimonial, deleteTestimonial, updateTestimonial };

