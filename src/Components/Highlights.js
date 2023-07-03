import React from 'react';
import Restaurant from '../images/restaurant.png'

function Highlights() {
  return (
    <>
    <div className='item'>
      <h1> Little Lemon </h1>
      <h2> Chicago </h2>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
      </p>
      <button>Reserve The Table</button>
    </div>
    <div className='image-container item'>
      <img src={Restaurant}/>
    </div>
    </>
  )
}

export default Highlights