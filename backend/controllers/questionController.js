import Question from "../models/Question.js";

// GET QUESTIONS BY EXAM ID
export const getQuestionsByExam = async (req, res) => {
  try {
    const { examId } = req.params;

    const questions = await Question.find({ examId });

    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
