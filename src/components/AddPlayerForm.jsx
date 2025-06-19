import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddPlayerForm = ({ setPlayerData }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('general');
  const [difficulty, setDifficulty] = useState('easy');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !category || !difficulty) return;

    const playerInfo = {
      name,
      category,
      difficulty,
      startTime: new Date().toISOString(),
    };

    localStorage.setItem('currentPlayer', JSON.stringify(playerInfo));
    setPlayerData(playerInfo);
    navigate('/quiz');
  };

  return (
    <div className="quiz-card fade-in">
      <h2 className="title">🎮 Enter Player Details</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Player Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="input"
            placeholder="Your name"
            pattern=".*[A-Za-z].*"
            title="Name must contain at least one alphabet"
          />
        </div>
        <div className="form-group">
          <label>Quiz Category</label>
          <div className="category-card-group">
            {[
              { label: "🧠 General", value: "general" },
              { label: "🔬 Science", value: "science" },
              { label: "🏅 Sports", value: "sports" },
              { label: "🎬 Movies", value: "movies" }

            ].map((cat) => (
              <div
                key={cat.value}
                className={`category-card ${category === cat.value ? 'active' : ''}`}
                onClick={() => setCategory(cat.value)}
              >
                {cat.label}
              </div>
            ))}
          </div>
        </div>
        <div className="form-group">
          <label>Difficulty Level</label>
          <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} className="input">
            <option value="easy">😄 Easy</option>
            <option value="medium">😐 Medium</option>
            <option value="hard">💀 Hard</option>
          </select>
        </div>
        <button type="submit" className="button click" disabled={!name}>Start Quiz</button>
      </form>
    </div>

  );
};

export default AddPlayerForm;