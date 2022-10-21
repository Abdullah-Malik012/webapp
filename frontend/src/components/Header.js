import React from 'react';
import '../App.css';
import './Header.css';

function Header() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Demostarte your skills through Workaholic</h1>
      <p>What are you waiting for?</p>
  
    </div>
  );
}

export default Header;
