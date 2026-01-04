import express from "express";
import { submitExam } from "../controllers/resultController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/submit", authMiddleware, submitExam);



export default router;
