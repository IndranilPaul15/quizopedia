import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import QuizStart from './components/QuizEngine';
import ScoreSummary from './pages/ScoreSummary';
import Leaderboard from './pages/Leaderboard';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz/start" element={<QuizStart />} />
        <Route path="/scores" element={<ScoreSummary />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </>
  );
}