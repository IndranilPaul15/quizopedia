import React from 'react';
import './Footer.css';

const Footer = () => {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <footer className="footer">
            <span>
                Crafted with 💙 by <strong>Indranil Paul</strong> © {new Date().getFullYear()}
            </span>
            <button className="scroll-top" onClick={scrollToTop}>⬆</button>
        </footer>
    );
};

export default Footer;
