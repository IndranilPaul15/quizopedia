import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import QuizStart from './components/QuizEngine';
import ScoreSummary from './components/ScoreSummary';
import Leaderboard from './components/Leaderboard';
import About from './pages/About';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/quizopedia/" element={<Home />} />
        <Route path="/quizopedia/quiz" element={<Quiz />} />
        <Route path="/quizopedia/quiz/start" element={<QuizStart />} />
        <Route path="/quizopedia/scores" element={<ScoreSummary />} />
        <Route path="/quizopedia/leaderboard" element={<Leaderboard />} />
        <Route path="/quizopedia/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}