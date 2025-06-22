import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ScoreSummary.css';
import useSound from '../hooks/useSound';

const ScoreSummary = () => {
  const [latestResult, setLatestResult] = useState(null);
  const navigate = useNavigate();
  const playCelebrate = useSound("/sounds/complete.mp3");

  useEffect(() => {
    const attempts = JSON.parse(localStorage.getItem('quizAttempts') || '[]');
    if (attempts.length > 0) {
      setLatestResult(attempts[attempts.length - 1]);
    }
    playCelebrate();
  }, []);


  if (!latestResult) return <p className="text-center">No results found.</p>;

  const { name, score, total, endTime, startTime } = latestResult;
  const timeTaken = Math.floor((new Date(endTime) - new Date(startTime)) / 1000);
  const fastest = latestResult.timings.reduce((a, b) => a.time < b.time ? a : b);
  const slowest = latestResult.timings.reduce((a, b) => a.time > b.time ? a : b);
  const averageTime = (
    latestResult.timings.reduce((sum, t) => sum + t.time, 0) /
    latestResult.timings.length
  ).toFixed(2);

  let message = "";
  if (score === total) message = "🎉 Quiz Champion!";
  else if (score > total / 2) message = "👏 Good Job!";
  else message = "☕ More caffeine, maybe?";

  const handleReplay = () => {
    navigate('/quiz');
  };
  const handleLeader = () => {
    navigate('/leaderboard');
  };

  return (
    <div className="fade-in wrap">
      <div className="result-card">
        <h1 className="result-emoji">🎉</h1>
        <h2 className="result-title">{score > total / 2 ? "Well done!" : "Need more practice"}, {name}!</h2>
        <p className="result-score">You scored <strong>{score}</strong> out of <strong>{total}</strong></p>
        <p className="result-time">⏱ Time Taken: <strong>{timeTaken}s</strong></p>
        <h3 className="result-message">{message}</h3>

        <div className="result-buttons">
          <button className="button click" onClick={handleReplay}>Play Again</button>
          <button className="button click" onClick={handleLeader}>📊 Leaderboard</button>
        </div>
      </div>
      <div className="mt-4 performance-box">
        <h3>📊 Performance Insights</h3>
        <p>⚡ Fastest Answer: Q{fastest.index + 1} in {fastest.time.toFixed(2)}s</p>
        <p>🐢 Slowest Answer: Q{slowest.index + 1} in {slowest.time.toFixed(2)}s</p>
        <p>📈 Average Time: {averageTime}s per question</p>
      </div>
      {latestResult.timings.some(t => !t.correct) && (
        <div className="mt-4 review-box">
          <h3>🧐 Review Your Mistakes</h3>
          <ul className="review-list">
            {latestResult.timings
              .filter(t => !t.correct)
              .map((t, i) => (
                <li key={i} className="review-item">
                  <strong>Q{t.index + 1}:</strong> {t.question}
                  <br />
                  ❌ <span className="wrong">Your Answer:</span> <em>{t.selected}</em>
                  <br />
                  ✅ <span className="correct">Correct Answer:</span> <strong>{t.correctAnswer}</strong>
                  <br />
                  ⏱️ Time: {t.time.toFixed(2)}s
                </li>
              ))}
          </ul>
        </div>
      )}

    </div>
  );
};

export default ScoreSummary;
