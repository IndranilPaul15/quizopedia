import React, { useState, useEffect } from 'react';
import he from 'he';
import questionsData from '../data/questions';
import './QuizEngine.css';
import useSound from '../hooks/useSound';
const QuizEngine = ({ playerData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [timer, setTimer] = useState(15);
  const [questionTimings, setQuestionTimings] = useState([]);
  const [questionStartTime, setQuestionStartTime] = useState(new Date());
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  const categoryMap = {
    general: 9,
    science: 17,
    sports: 21,
    movies: 11,
  };

  const category = playerData.category;
  const difficulty = playerData.difficulty;
  // // const questions = questionsData[category][difficulty];


  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await fetch(`https://opentdb.com/api.php?amount=5&category=${categoryMap[category]}&difficulty=${difficulty}&type=multiple`);
        const data = await res.json();
        const formatted = data.results.map((q, i) => ({
          question: he.decode(q.question),
          options: shuffle([q.correct_answer, ...q.incorrect_answers].map(he.decode)),
          answer: he.decode(q.correct_answer),
          index: i,
        }));
        setQuestions(formatted);
        setLoading(false);
      } catch (err) {
        console.error("Failed to load questions", err);
      }
    };

    fetchQuestions();
  }, []);

  const playCorrect = useSound("/sounds/correct.mp3");
  const playWrong = useSound("/sounds/wrong.mp3");
  const playTimeout = useSound("/sounds/timeout.mp3");

  useEffect(() => {
    if (questions.length === 0) return;
    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          clearInterval(countdown);
          playTimeout();
          handleNext();
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(countdown);
  }, [currentIndex, questions]);

  const handleOptionClick = (option) => {
    if (selected !== null) return;

    const timeTaken = (new Date() - questionStartTime) / 1000;

    setQuestionTimings(prev => [
      ...prev,
      {
        index: currentIndex,
        question: currentQuestion.question,
        selected: option,
        correctAnswer: currentQuestion.answer,
        time: timeTaken,
        correct: option === currentQuestion.answer
      }
    ]);

    setSelected(option);
    if (option === currentQuestion.answer) {
      setScore((prev) => prev + 1);
      playCorrect();
    } else {
      playWrong();
    }
  };


  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setQuestionStartTime(new Date());
      setCurrentIndex(currentIndex + 1);
      setSelected(null);
      setTimer(15);
    } else {
      const result = {
        ...playerData,
        score,
        total: questions.length,
        endTime: new Date().toISOString(),
        timings: questionTimings,
      };
      const attempts = JSON.parse(localStorage.getItem('quizAttempts') || '[]');
      attempts.push(result);
      localStorage.setItem('quizAttempts', JSON.stringify(attempts));
      localStorage.removeItem('currentPlayer');
      window.location.href = '/#scores';
    }
  };


  if (loading) {
    return (
      <div className="loader-wrapper">
        <div className="loader"></div>
        <p>Loading Questions...</p>
      </div>
    );
  }
  const currentQuestion = questions[currentIndex];
  return (
    <div className="quiz-wrapper fade-in">
      <div className="quiz-container">
        <div className="quiz-header-bar">
          <div className="quiz-badge">📂 {category}</div>
          <div className="quiz-badge">⏱ {timer}s</div>
        </div>

        <h2 className="quiz-step">Question {currentIndex + 1} of {questions.length}</h2>
        <p className="quiz-question">{currentQuestion.question}</p>

        <div className="quiz-option-group">
          {currentQuestion.options.map((opt, i) => (
            <button
              key={i}
              className={`quiz-pill ${selected === opt ? (opt === currentQuestion.answer ? 'correct' : 'wrong') : ''}`}
              onClick={() => handleOptionClick(opt)}
              disabled={!!selected}
            >
              {opt}
            </button>
          ))}
        </div>

        {selected && (
          <button className="next-btn" onClick={handleNext}>
            Next →
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizEngine;
function shuffle(array) {
  return [...array].sort(() => 0.5 - Math.random());
}