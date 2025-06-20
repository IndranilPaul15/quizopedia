import React from 'react';
import './About.css';
const About = () => {
  return (
    <div className="about-wrapper fade-in">
      <div className="about-card">
        <h2 className="about-title">📘 About Quizopedia</h2>

        <p className="about-text">
          <strong>Quizopedia</strong> is a modern and interactive quiz platform designed to make learning engaging and enjoyable. It allows users to test their knowledge across multiple categories such as General Knowledge, Science, and Sports, while offering real-time feedback, score tracking, and a clean, intuitive interface.
          It allows users to test their knowledge across various categories like <em>General Knowledge</em>, <em>Science</em>, <em>Sports</em> and <em>Movies</em>.
        </p>

        <div className="about-section">
          <h4>🚀 Technologies Used</h4>
          <div className="tech-card-grid">
            {[
              { src: 'react.svg', label: 'React.js' },
              { src: 'js.png', label: 'JavaScript' },
              { src: 'css.png', label: 'CSS' },
              { src: 'router.png', label: 'Routing' },
              { src: 'storage.png', label: 'localStorage' }
            ].map((tech, i) => (
              <div className="tech-card-img" key={i}>
                <img src={tech.src} alt={tech.label} className="tech-icon" />
                <div className="tech-name">{tech.label}</div>
              </div>
            ))}
          </div>



        </div>

        <div className="about-section">
          <h4>💡 What I Learned</h4>
          <p>
            <em>
              Building Quizopedia helped me understand routing, state management, data persistence, dynamic rendering, and designing a polished React project from scratch.</em>
          </p>
        </div>

        <div className="about-image">
          <h3 className='meme'>Quiz Meme</h3>
          <img
            src="Meme.png"
            alt="React Meme"
            className="meme-image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
