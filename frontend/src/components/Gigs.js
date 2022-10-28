import React , {useEffect} from 'react';
import './Gigs.css';
import GigDetails from './GigDetails';
import Gigpage from './Gigpage';
import {Link } from 'react-router-dom'



var datae = [
  { 
      img : 'images/gig1.jpg', 
      Name: "Mahad Rahat ",
      Details : "I can do c++ programming. OOP data structures",
      location : '/Gigpage',
      price: "20$"
      
      
  },

  {

    img : 'images/gig2.png', 
    Name : "hamza Azam",
    Details : "I can do webdevelopment. Using react express in html css js",
    location : '/Gigpage',
    price: "20$"
  },

  {

    img : 'images/gig3.png', 
    Name : "Ehsan Rasul",
    Details : "I can do java programming. OOP DataStructures",
    location : '/Gigpage',
    price: "20$"

  },

  {

    img : 'images/gig4.jpg', 
    Name : "Abdullah Malik",
    Details : "I can do video editing. Software i use is adobe premier pro",
    location : '/Gigpage',
    price: "20$"

  }

]





function Gigs() {


  return (

    <>
    
  

<div className='Gigs'>
     
     
      <div className='Gigscontainer'>
        <div className='Gigboundry'>
          
       
          <ul className='Giginside '>
          {datae.map(({img, Name, Details})=>(
            <GigDetails
           
               src= {img}
          
              text={Details}
              label={Name}
              path= '/Gigpage'

             
            />
          ) )}
         
          </ul>
          
        </div>
      </div>
    </div>



</>

  


  );
}

export default Gigs;
