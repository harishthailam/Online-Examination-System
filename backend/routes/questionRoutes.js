import express from "express";
import { getQuestionsByExam } from "../controllers/questionController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/exams/:examId/questions", authMiddleware, getQuestionsByExam);

export default router;
