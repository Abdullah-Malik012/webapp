import Gigs from './Gigs'
import {Link } from 'react-router-dom'
import React , {useEffect} from 'react';

function Gigpage(props) {
  

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

  var datae = [
    { 
        img : 'images/gig1.jpg', 
        Name: "Mahad Rahat",
        title : "I can do c++ programming. OOP data structures",
        location : '/Gigpage',
        price: "20$"
        
        
    },


  
  
  ]
  return (
  
    <div className = "pageContainer">
 
<div className ="GigpageContainer" >

{datae.map(({Name, img, title, price})=>(
  <>
   <h className = "Name">{Name}</h>
  <img src={img} />
  <td></td>
  <h1 className = "title">{title}</h1>
  <td className = "price">{price}</td>

  </>
  )) 
} 

</div>
    </div>
  )
}



// function Gigpage() {
//   return (
  
//     <div className = "GigpageContainer">
//       <h>something</h>
 
// {data.map(({Name, title,img, price, description})=>(
//   <>
//   <img src={img} />
//   <td></td>
//   <h>{Name}</h>
//   <td>{title}</td>
//   <td>{price}</td>

//   </>

// ))
// }

//     </div>
//   )
// }

export default Gigpage