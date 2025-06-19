import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img className='logo-img' src="src/assets/quiz.png" alt="🧠" />
        <span className='logo'>Quizopedia</span>
      </div>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <Link to="//">Home</Link>
        <Link to="/quiz">Quiz Play</Link>
        <Link to="/scores">Leaderboard</Link>
        <Link to="/about">About</Link>
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
    </nav>
  );
};

export default Navbar;
