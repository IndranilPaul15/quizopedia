import React from 'react';

const About = () => {
  return (
    <div className="container fade-in mt-4">
      <h2 className="text-center">📘 About This App</h2>
      <p className="mt-2">
        Quizopedia is an interactive quiz application built as part of the KTJ Web Development & AI Workshop 2025.
        It helps users test their knowledge across various categories like General Knowledge, Science, and Sports.
      </p>
      <p className="mt-2">
        <strong>Technologies Used:</strong>
        <ul>
          <li>⚛️ React.js for building the UI</li>
          <li>🧠 JavaScript for quiz logic</li>
          <li>🎨 CSS for styling and animations</li>
          <li>🧭 React Router for navigation</li>
          <li>💾 localStorage for data persistence</li>
        </ul>
      </p>
      <p className="mt-2">
        <strong>What I Learned:</strong> Routing, localStorage, dynamic rendering, state management, and building a full React project from scratch.
      </p>
      <div className="mt-4 text-center">
        <img src="https://i.imgflip.com/5hg7cm.jpg" alt="Meme" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>
    </div>
  );
};

export default About;
