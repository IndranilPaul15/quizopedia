import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Quizopedia</div>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <Link to="/quizopedia/">Home</Link>
        <Link to="/quizopedia/quiz">Start Quiz</Link>
        <Link to="/quizopedia/scores">Scores</Link>
        <Link to="/quizopedia/about">About</Link>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
    </nav>
  );
};

export default Navbar;
