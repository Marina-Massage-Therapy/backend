import mongoose from "mongoose";
const connectDB = () => {
    console.log("mongodb url ", process.env.MONGO_URI)
    mongoose
        .connect(
            process.env.MONGO_URI,
        )
        .then(() => {
            console.log("Connected to MongoDB");
        })
        .catch((error) => {
            console.error("MongoDB connection error:", error);
        });

};

export default connectDB