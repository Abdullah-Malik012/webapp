import React from 'react';
import './Gigs.css';

import GigDetails from './GigDetails';

function Gigs() {
  return (
    <div className='Gigs'>
     
      <div className='Gigscontainer'>
        <div className='Gigboundry'>
          <ul className='Giginside '>
            <GigDetails
              src='images/gig1.jpg'
              text='I can do C++ programming. OOP DataStructures'
              label='Ali hamza'
              path='https://www.fiverr.com/share/WDVjjL'
            />
            <GigDetails
              src='images/gig2.png'
              text='I can do webdevelopment. Using react express in html css js'
              label='Mahad rahat'
              path='https://www.fiverr.com/share/R9bvoR'
            />
         
          
            <GigDetails
              src='images/gig3.png'
              text='I can do java programming. OOP DataStructures'
              label='Ehsan Rasul'
              path='https://www.fiverr.com/share/6NwPLP'
            />
            <GigDetails
              src='images/gig4.jpg'
              text='I can do video editing. Software i use is adobe premier pro'
              label='Abdullah Malik'
              path='https://www.fiverr.com/share/6NwPLP'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Gigs;
