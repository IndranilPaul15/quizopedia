import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [attempts, setAttempts] = useState([]);
  const [sortBy, setSortBy] = useState('score');

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('quizAttempts') || '[]');
    setAttempts(data);
  }, []);

  const sortedAttempts = [...attempts].sort((a, b) => {
    if (sortBy === 'score') return b.score - a.score;
    if (sortBy === 'time') {
      const aTime = new Date(a.endTime) - new Date(a.startTime);
      const bTime = new Date(b.endTime) - new Date(b.startTime);
      return aTime - bTime;
    }
    return 0;
  });

  return (
    <div className="container fade-in mt-4">
      <h2 className="text-center">🏆 Leaderboard</h2>
      <div className="mt-2 text-center">
        <label>Sort By: </label>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="input">
          <option value="score">Score</option>
          <option value="time">Time Taken</option>
        </select>
      </div>
      <table className="mt-4" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: '1px solid #ccc', padding: '8px' }}>Name</th>
            <th style={{ borderBottom: '1px solid #ccc', padding: '8px' }}>Score</th>
            <th style={{ borderBottom: '1px solid #ccc', padding: '8px' }}>Time (s)</th>
            <th style={{ borderBottom: '1px solid #ccc', padding: '8px' }}>Date</th>
          </tr>
        </thead>
        <tbody>
          {sortedAttempts.map((a, i) => {
            const timeTaken = Math.floor((new Date(a.endTime) - new Date(a.startTime)) / 1000);
            const date = new Date(a.endTime).toLocaleString();
            return (
              <tr key={i}>
                <td style={{ padding: '8px' }}>{a.name}</td>
                <td style={{ padding: '8px' }}>{a.score}/{a.total}</td>
                <td style={{ padding: '8px' }}>{timeTaken}s</td>
                <td style={{ padding: '8px' }}>{date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;