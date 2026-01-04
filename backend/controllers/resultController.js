import Result from "../models/Result.js";
import Question from "../models/Question.js";

export const submitExam = async (req, res) => {
  try {
    const { examId, answers } = req.body;
    const userId = req.user.id;

    const questions = await Question.find({ examId });

    let score = 0;

    questions.forEach((q) => {
      if (answers[q._id] === q.correctAnswer) {
        score += 1;
      }
    });

    const result = await Result.create({
      userId,
      examId,
      score,
      total: questions.length,
    });

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
