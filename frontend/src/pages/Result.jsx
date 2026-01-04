import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Result.css";

export default function Result() {
  const navigate = useNavigate();
  const storedResult = localStorage.getItem("result");

  if (!storedResult) {
    return (
      <div className="result-container">
        <div className="result-card">
          <h2>No Result Found</h2>
          <p>Please complete the exam first.</p>
        </div>
      </div>
    );
  }

  const result = JSON.parse(storedResult);
  const isPass = result.score >= result.total / 2;

  return (
    <div className="result-container">
      <div className="result-card">
        <h2>Exam Result</h2>

        <div className="score-box">
          <p className="score">
            {result.score} / {result.total}
          </p>
        </div>

        <p className={isPass ? "status pass" : "status fail"}>
          {isPass ? "PASS ✅" : "FAIL ❌"}
        </p>

        <button
          className="back-btn"
          onClick={() => navigate("/login")}
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}
