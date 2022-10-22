import React from 'react';
import './Gigs.css';




import GigDetails from './GigDetails';

function Gigs() {

  var data = [
    { 
        img : 'images/gig1.jpg', 
        Name: "Mahad",
        Details : "I can do c++ programming. OOP data structures"
        
        
    },

    {

      img : 'images/gig2.png', 
      Name : "hamza",
      Details : "I can do webdevelopment. Using react express in html css js"
    },

    {

      img : 'images/gig3.png', 
      Name : "Ehsan",
      Details : "I can do java programming. OOP DataStructures"

    },

    {

      img : 'images/gig4.jpg', 
      Name : "Abdullah",
      Details : "I can do video editing. Software i use is adobe premier pro"

    }

  ]
  return (

    
    <div className='Gigs'>
     
     
      <div className='Gigscontainer'>
        <div className='Gigboundry'>
          
       
          <ul className='Giginside '>
          {data.map(({Name,Details, img})=>(
            <GigDetails
            
              src= {img}
              text={Details}
              label={Name}
              path='https://www.fiverr.com/share/R9bvoR'

             
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
