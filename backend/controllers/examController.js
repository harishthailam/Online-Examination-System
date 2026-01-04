import Exam from "../models/Exam.js";


export const createExam = async (req, res) => {
  try {
    const { title, duration, totalMarks } = req.body;

    if (!title || !duration || !totalMarks) {
      return res.status(400).json({ message: "All fields required" });
    }

    const exam = await Exam.create({
      title,
      duration,
      totalMarks,
    });

    res.status(201).json(exam);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getExams = async (req, res) => {
  const exams = await Exam.find();
  res.json(exams);
};
