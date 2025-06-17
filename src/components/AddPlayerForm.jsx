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
    <div className="container fade-in">
      <h2 className="text-center">Enter Player Details 🎮</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mt-2">
          <label>Player Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="input"
          />
        </div>
        <div className="mt-2">
          <label>Quiz Category:</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="input">
            <option value="general">General Knowledge</option>
            <option value="science">Science</option>
            <option value="sports">Sports</option>
          </select>
        </div>
        <div className="mt-2">
          <label>Difficulty Level:</label>
          <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} className="input">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <button type="submit" className="button mt-4" disabled={!name || !category || !difficulty}>
          Start Quiz
        </button>
      </form>
    </div>
  );
};

export default AddPlayerForm;