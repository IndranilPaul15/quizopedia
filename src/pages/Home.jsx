import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Home.css';
const images = [
  'Home-image (1).png',
  'Home-image (2).png',
  'Home-image (3).png',
  'Home-image (4).png'

];
const Home = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="home-container fade-in">
      <div className="home-text">
        <h1 className='welcome-text'>Welcome to Quizopedia 🧠</h1>
        <p>The ultimate quiz showdown, Prepare for a thrilling quiz, Ignite your intellect, and test your knowledge, and have fun along the way
          <span> Get ready to quiz!</span>
        </p>
        <button className="play-button mt-2" onClick={() => navigate('/quiz')}>Let's Play</button>
      </div>
      <div className="carousel-container">
        <div className="carousel-image">
          <img src={images[index]} alt={`Slide ${index + 1}`} />
        </div>
        <div className="carousel-dots">
          {images.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === index ? 'active' : ''}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;