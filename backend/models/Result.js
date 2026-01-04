import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  examId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Exam",
  },
  score: Number,
  total: Number,
});

export default mongoose.model("Result", resultSchema);
