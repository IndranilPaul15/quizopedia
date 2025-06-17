import React, { useState, useEffect } from 'react';
import questionsData from '../data/questions';

const QuizEngine = ({ playerData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [timer, setTimer] = useState(15);

  const category = playerData.category;
  const difficulty = playerData.difficulty;
  const questions = questionsData[category][difficulty];
  const currentQuestion = questions[currentIndex];

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          clearInterval(countdown);
          handleNext();
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(countdown);
  }, [currentIndex]);

  const handleOptionClick = (option) => {
    if (selected !== null) return;
    setSelected(option);
    if (option === currentQuestion.answer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
      setSelected(null);
      setTimer(15);
    } else {
      // store result and navigate to score page
      const result = {
        ...playerData,
        score,
        total: questions.length,
        endTime: new Date().toISOString(),
      };
      const attempts = JSON.parse(localStorage.getItem('quizAttempts') || '[]');
      attempts.push(result);
      localStorage.setItem('quizAttempts', JSON.stringify(attempts));
      localStorage.removeItem('currentPlayer');
      window.location.href = '/scores';
    }
  };

  return (
    <div className="quiz-box mt-4">
      <h2>Question {currentIndex + 1} of {questions.length}</h2>
      <p>{currentQuestion.question}</p>
      <div className="mt-2">
        {currentQuestion.options.map((opt, i) => (
          <button
            key={i}
            className={`button mt-2 ${selected === opt ? (opt === currentQuestion.answer ? 'correct' : 'wrong') : ''}`}
            onClick={() => handleOptionClick(opt)}
          >
            {opt}
          </button>
        ))}
      </div>
      <p className="mt-2">⏱ Time Left: {timer}s</p>
      {selected && <button className="button mt-2" onClick={handleNext}>Next</button>}
    </div>
  );
};

export default QuizEngine;