import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Exam.css";

export default function Exam() {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});

  const examId = "695930f8bc83dea1ea79164c"; // YOUR exam ID
  const token = localStorage.getItem("token");

  // 🔹 Fetch questions
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/exams/${examId}/questions`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setQuestions(res.data);
      })
      .catch((err) => {
        console.error("Question fetch error:", err);
      });
  }, [token, examId]);

  // 🔹 Loading state
  if (questions.length === 0) {
    return <h3 className="loading">Loading questions...</h3>;
  }

  const question = questions[current];

  // 🔹 Select option
  const handleOptionClick = (option) => {
    setAnswers({
      ...answers,
      [question._id]: option,
    });
  };

  // 🔹 Submit exam
  const handleSubmit = () => {
    axios
      .post(
        "http://localhost:5000/api/results/submit",
        {
          examId,
          answers,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        localStorage.setItem("result", JSON.stringify(res.data));
        window.location.href = "/result";
      })
      .catch((err) => {
        console.error("Submit error:", err);
      });
  };

  return (
    <div className="exam-container">
      <h2 className="exam-title">Online Examination</h2>

      <div className="question-card">
        <h3>
          Question {current + 1} of {questions.length}
        </h3>

        <p className="question-text">{question.question}</p>

        <div className="options">
          {question.options.map((opt, i) => (
            <label key={i} className="option">
              <input
                type="radio"
                name={`question-${question._id}`}
                checked={answers[question._id] === opt}
                onChange={() => handleOptionClick(opt)}
              />
              {opt}
            </label>
          ))}
        </div>

        <div className="buttons">
          {current < questions.length - 1 ? (
            <button
              className="next-btn"
              onClick={() => setCurrent(current + 1)}
            >
              Next
            </button>
          ) : (
            <button className="submit-btn" onClick={handleSubmit}>
              Submit Exam
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
