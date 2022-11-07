import Gigs from './Gigs'
import {Link } from 'react-router-dom'
import React , {useEffect} from 'react';
import logo from './logot.png'
import {useState} from 'react';

function Gigpage(Name, img, details) {

  const datae = [
    { 
     
        img : 'images/gig1.jpg', 
        Name: "Mahad Rahat",
        title : "I can do c++ programming. OOP data structures",
        details: "I will do java, c++ and c programming projects for data structures and OOP. Kindly, do contact me before placing an order so that we can discuss the problem and requirements. Unable to find a solution to a complex problem? Stuck on a problem? Need someone to do your programming projects? Want to make an efficient program? Well here I am at your service . I will help you in java, c++ and c programming projects.",
        price: "20$"
        
        
    },

  ]

  const first = datae[0];
  return (
  
    <div className = "pageContainer">
 
<div className ="GigpageContainer" >
{datae.map((element, index) =>(
  <>

   <h className = "Name">{element.Name}</h>
  <img src={element.img}/>
  <td></td>
  <h1 className = "title">{element.details}</h1>
  {/* <td className="detailss">{element.details}</td>
  <td className = "price">{element.price}</td> */}
  <h> </h>

  
  </>
 )) }

</div>
<div className='footercontainer'>
      
      
      <div class='logo'>
        <a to='/' className='icon'>
         <img src = {logo} width = "20%"/>
       
        </a>
      </div>
      <h className = "rights">Workaholic © 2022</h>
     
  
</div>
    </div>

    
  )
}

export default Gigpage