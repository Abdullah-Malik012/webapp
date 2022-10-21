import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from './logot.png'

function Navbar() {
  

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <a href='/' className='navbar-logo'>
            <img src = {logo} width = "15%"/>
         
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
