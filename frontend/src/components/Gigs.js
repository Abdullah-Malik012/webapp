import React from 'react';
import './Gigs.css';

import GigDetails from './GigDetails';

function Gigs() {
  return (
    <div className='cards'>
     
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <GigDetails
              src='images/gig1.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <GigDetails
              src='images/gig2.png'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
         
          
            <GigDetails
              src='images/gig3.png'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <GigDetails
              src='images/gig4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Gigs;
