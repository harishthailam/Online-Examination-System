import mongoose from "mongoose";

const examSchema = new mongoose.Schema({
  title: String,
  duration: Number,
  totalMarks: Number,
});

export default mongoose.model("Exam", examSchema);
