import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container fade-in mt-4 text-center">
      <h2>🚫 404 - Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/" className="button mt-2">Go Home</Link>
    </div>
  );
};

export default NotFound;