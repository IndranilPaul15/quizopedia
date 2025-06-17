import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ScoreSummary = () => {
  const [latestResult, setLatestResult] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const attempts = JSON.parse(localStorage.getItem('quizAttempts') || '[]');
    if (attempts.length > 0) {
      setLatestResult(attempts[attempts.length - 1]);
    }
  }, []);

  if (!latestResult) return <p className="text-center">No results found.</p>;

  const { name, score, total, endTime, startTime } = latestResult;
  const timeTaken = Math.floor((new Date(endTime) - new Date(startTime)) / 1000);
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
    <div className="container fade-in mt-4 text-center">
      <h2>Results for {name}</h2>
      <p>Your Score: {score} / {total}</p>
      <p>Total Time Taken: {timeTaken}s</p>
      <h3 className="mt-2">{message}</h3>
      <button className="button mt-4" onClick={handleReplay}>Play Again</button>
      <p className="mt-2">Check out the leaderboard to see how you stack up!</p>
      <button className="button mt-4" onClick={handleLeader}>go</button>
    </div>
  );
};

export default ScoreSummary;
