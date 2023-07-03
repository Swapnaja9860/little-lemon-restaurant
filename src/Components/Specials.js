import React from 'react'
import Special from '../images/restaurant.png'


function Specials() {
  return (
    <>
      <div className="card">
      <img
        src={Special}
        alt="Card Image"
        className="card-image"
      />
      <h3 className="card-heading">Card Heading</h3>
      <p className="card-description">
        This is a description of the card.
      </p>
      <button className="card-button">Click Me</button>
    </div>
      <div><h2>Specials 2</h2></div>
      <div><h3>Specials 3</h3></div>
    </>
  )
}

export default Specials