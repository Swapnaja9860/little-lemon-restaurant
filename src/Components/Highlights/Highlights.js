import React from 'react';
import Restaurant from '../../images/restaurant.png';
import Button from '../Button/Button';
import './Highlights.css'

function Highlights() {
  return (
    <>
    <div className='item'>
      <h1 style={{lineHeight: '0.6vh'}}> Little Lemon </h1>
      <h2 style={{lineHeight: '0.5vh'}}> Chicago </h2>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
      </p>
      <Button title="Reserve the Table" redirect='/booking'/>
    </div>
    <div className='image-container item'>
      <img src={Restaurant}/>
    </div>
    </>
  )
}

export default Highlights