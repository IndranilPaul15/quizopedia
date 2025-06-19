import React, { useState, useEffect } from 'react';
import AddPlayerForm from '../components/AddPlayerForm';
import QuizEngine from '../components/QuizEngine';

const Quiz = () => {
  const [playerData, setPlayerData] = useState(null);

  useEffect(() => {
    const savedPlayer = localStorage.getItem('currentPlayer');
    if (savedPlayer) {
      setPlayerData(JSON.parse(savedPlayer));
    }
  }, []); 

  return (
    <div className="container fade-in">
      {!playerData ? (
        <>
          <h1 className="text-center mt-4" style={{paddingTop: '15px'}}>Let's Set You Up!</h1>
          <AddPlayerForm setPlayerData={setPlayerData} />
        </>
      ) : (
        <QuizEngine playerData={playerData} />
      )}
    </div>
  );
};

export default Quiz;