import React from 'react';
import './Footer.css';

import logo from './logot.png'

function Footer() {
  return (
    <div className='footercontainer'>
      
      
          <div class='logo'>
            <a to='/' className='icon'>
             <img src = {logo} width = "20%"/>
           
            </a>
          </div>
          <h className = "rights">Workaholic © 2022</h>
         
      
    </div>
  );
}

export default Footer;
