import React , {useEffect} from 'react';
import './Gigs.css';
import GigDetails from './GigDetails';
import logo from './logot.png'
import {Link } from 'react-router-dom'



const datae = [
  { 
      img : 'images/gig1.jpg', 
      Name: "Mahad Rahat ",
      Details : "I can do c++ programming. OOP data structures",
      location : '/Gigpage',
      details: "I will do java, c++ and c programming projects for data structures and OOP. Kindly, do contact me before placing an order so that we can discuss the problem and requirements. Unable to find a solution to a complex problem? Stuck on a problem? Need someone to do your programming projects? Want to make an efficient program? Well here I am at your service . I will help you in java, c++ and c programming projects.",

      price: "20$"
      
      
  },

  {

    img : 'images/gig2.png', 
    Name : "hamza Azam",
    Details : "I can do webdevelopment. Using react express in html css js",
    location : '/Gigpage',
    details: "I will do java, c++ and c programming projects for data structures and OOP. Kindly, do contact me before placing an order so that we can discuss the problem and requirements. Unable to find a solution to a complex problem? Stuck on a problem? Need someone to do your programming projects? Want to make an efficient program? Well here I am at your service . I will help you in java, c++ and c programming projects.",

    price: "20$"
  },

  {

    img : 'images/gig3.png', 
    Name : "Ehsan Rasul",
    Details : "I can do java programming. OOP DataStructures",
    location : '/Gigpage',
    details: "I will do java, c++ and c programming projects for data structures and OOP. Kindly, do contact me before placing an order so that we can discuss the problem and requirements. Unable to find a solution to a complex problem? Stuck on a problem? Need someone to do your programming projects? Want to make an efficient program? Well here I am at your service . I will help you in java, c++ and c programming projects.",

    price: "20$"

  },

  {

    img : 'images/gig4.jpg', 
    Name : "Abdullah Malik",
    Details : "I can do video editing. Software i use is adobe premier pro",
    location : '/Gigpage',
    details: "I will do java, c++ and c programming projects for data structures and OOP. Kindly, do contact me before placing an order so that we can discuss the problem and requirements. Unable to find a solution to a complex problem? Stuck on a problem? Need someone to do your programming projects? Want to make an efficient program? Well here I am at your service . I will help you in java, c++ and c programming projects.",

    price: "20$"

  }

]


function Gigpage() {
  
  return (
  
    <div className = "pageContainer">

<div className ="GigpageContainer" >


  <>
  {datae.map((element)=>(
  <>
   <h className = "Name">{element.Name}</h>
  <img src={element.img}/>
  <td></td>
  <h1 className = "title">{element.title}</h1>
  <td className="detailss">{element.details}</td>
  <td className = "price">{element.price}</td>
  <h> </h>


  </>
  )) 
}
  </>
 

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





function Gigs() {

  

  const [jobInfo,setJobData]= React.useState([{}]);

        console.log('calling apis Fetch Jobs Class')

        const data1={};
        useEffect(()=>{
          
            fetch('/jobDisplay', {
                method: 'POST', // or 'PUT' 
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                },
                body: JSON.stringify(data1),
              })
                .then((response) => response.json())
                .then((data) => {
    
                    setJobData(data);
                    console.log(data+"yai data hai");
                })
                .catch((error) => {
                  console.error('Error:', error);
                });    


        },[]);


  return (

    <>
    
  

<div className='Gigs'>
     
     
      <div className='Gigscontainer'>
        <div className='Gigboundry'>
          
       
          <ul className='Giginside '>
          {datae.map((element)=>(
            <GigDetails
           
               src= {element.img}
          
              text={element.Details}
              label={element.Name}
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
