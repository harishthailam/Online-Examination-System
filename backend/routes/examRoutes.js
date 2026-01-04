import express from "express";
import { createExam, getExams } from "../controllers/examController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// GET all exams
router.get("/", authMiddleware, getExams);

// CREATE exam
router.post("/", authMiddleware, createExam);

export default router;
