import React from 'react';

function GigDetails(props) {
  return (
    <>
      <li className='Gigdetails'>
        <a className='link' href={props.path}>
          <figure className='label' data-category={props.label}>
            <img className='img' src={props.src}/>
          </figure>
          <div className='details'>
            <h5 className='text'>{props.text}</h5>
          </div> 
        </a>
      </li>
    </>
  );
}

export default GigDetails;
