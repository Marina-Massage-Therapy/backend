import express from 'express';
import { fetchUser } from "../controllers/user.js";

const router = express.Router(); // Changed Router() to express.Router()
router.post("/fetchUser", fetchUser);
export default router;
