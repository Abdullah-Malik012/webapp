import React from 'react'
import Gigs from './Gigs'

function Gigpage(props) {
  var data = [
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

{data.map(({Name, title,img, price, description})=>(
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