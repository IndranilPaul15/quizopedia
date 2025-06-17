import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container fade-in">
      <div className="home-text">
        <h1>Welcome to Quizopedia 🧠</h1>
        <p>Sharpen your mind, test your knowledge, and have fun along the way!</p>
        <button className="button mt-2" onClick={() => navigate('/quiz')}>Start Quiz</button>
        <button className="button mt-2" onClick={()=> navigate('/leaderboard')}>Go to LeaderBoard </button>
      </div>
      <div className="home-image">
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Quiz Illustration" />
      </div>
    </div>
  );
};

export default Home;