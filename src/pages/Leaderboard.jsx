import React, { useEffect, useState } from 'react';
import './Leaderboard.css';
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
  const handleDelete = (endTimeToDelete) => {
    const updated = attempts.filter(a => a.endTime !== endTimeToDelete);
    setAttempts(updated);
    localStorage.setItem('quizAttempts', JSON.stringify(updated));
  };



  return (
    <div className="abc fade-in">
      <div className="leaderboard-card">
        <h2 className="leaderboard-title">🏆 Leaderboard</h2>
        {attempts.length === 0 ? (
          <p className="text-center mt-4 no"><em>No data found.</em></p>
        ) : (
          <>
            <div className="sort-select">
              <label>Sort by:</label>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="sort-dropdown">
                <option value="score">📈 Score</option>
                <option value="time">⏱️ Time Taken</option>
              </select>
            </div>

            <div className="table-scroll">
              <table className="leaderboard-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Score</th>
                    <th>Time</th>
                    <th>Date</th>
                    <th>❌</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedAttempts.map((a, i) => {
                    const timeTaken = Math.floor((new Date(a.endTime) - new Date(a.startTime)) / 1000);
                    const dateObj = new Date(a.endTime);
                    const date = dateObj.toLocaleString('en-GB', {
                      day: 'numeric',
                      month: 'numeric',
                      year: '2-digit',
                      hour: 'numeric',
                      minute: '2-digit',
                      hour12: true,
                    });

                    return (
                      <tr key={i} className={`leaderboard-row ${i === 0 ? 'top-scorer' : ''}`}>
                        <td className="truncate" title={a.name}>{i === 0 ? '👑' : ''}{a.name}</td>
                        <td>{a.score}/{a.total}</td>
                        <td>{timeTaken}s</td>
                        <td>{date}</td>
                        <td>
                          <button className="delete-btn click" onClick={() => handleDelete(a.endTime)}>🗑️</button>

                        </td>
                      </tr>
                    );
                  })}

                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;
