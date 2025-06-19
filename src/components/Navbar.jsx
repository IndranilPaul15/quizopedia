import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
      <Link to='//' className="navbar-logo">
        <img className='logo-img' src="quiz.png" alt="🧠" />
        <span className='logo'>Quizopedia</span>
      </Link>
      <label className="hamburger-menu">
        <input
          type="checkbox"
          checked={isOpen}
          onChange={toggleMenu}
          aria-label="Toggle navigation"
        />
      </label>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <Link className="nav-button click" to="//" onClick={closeMenu}>Home</Link>
        <Link className="nav-button click" to="/quiz" onClick={closeMenu}>Quiz Play</Link>
        <Link className="nav-button click" to="/leaderboard" onClick={closeMenu}>Leaderboard</Link>
        <Link className="nav-button click" to="/about" onClick={closeMenu}>About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
