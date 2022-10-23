import React from 'react';
import './Gigs.css';




import GigDetails from './GigDetails';


var data = [
  { 
      img : 'images/gig1.jpg', 
      Name: "Mahad Rahat ",
      Details : "I can do c++ programming. OOP data structures",
      location : '/Gigpage'
      
      
  },

  {

    img : 'images/gig2.png', 
    Name : "hamza Azam",
    Details : "I can do webdevelopment. Using react express in html css js",
    location : '/Gigpage'
  },

  {

    img : 'images/gig3.png', 
    Name : "Ehsan Rasul",
    Details : "I can do java programming. OOP DataStructures",
    location : '/Gigpage'

  },

  {

    img : 'images/gig4.jpg', 
    Name : "Abdullah Malik",
    Details : "I can do video editing. Software i use is adobe premier pro",
    location : '/Gigpage'

  }

]

function Gigs() {

  return (

    
    <div className='Gigs'>
     
     
      <div className='Gigscontainer'>
        <div className='Gigboundry'>
          
       
          <ul className='Giginside '>
          {data.map(({Name,Details, img,location})=>(
            <GigDetails
            
              src= {img}
              text={Details}
              label={Name}
              path= '/Gigpage'

             
            />
            

            ))
          }
         
           
             
         
          </ul>
          
        </div>
      </div>
    </div>


  );
}

export default Gigs;
