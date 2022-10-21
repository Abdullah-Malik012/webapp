import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import logo from './logot.png'

function Footer() {
  return (
    <div className='footer-container'>
      
      
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <a to='/' className='social-logo'>
             <img src = {logo} width = "20%"/>
           
            </a>
          </div>
          <small class='website-rights'>Workaholic © 2022</small>
         
        </div>
      </section>
    </div>
  );
}

export default Footer;
