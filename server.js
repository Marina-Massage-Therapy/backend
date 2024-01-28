import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import compression from "compression";
import rootRoutes from "./routes/root.js";

dotenv.config();

const app = express();
connectDB();

// CORS Configuration
const corsOptions = {
  origin: [
    "http://localhost:3000",
    "https://main.d2tvvv5hcr4651.amplifyapp.com",
  ],
};

app.use(cors(corsOptions));
app.use(compression());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json());

app.use("/api", rootRoutes);

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
