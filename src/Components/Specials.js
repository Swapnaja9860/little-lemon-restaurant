import React from 'react';
import Special from '../images/restaurant.png';
import './Special.css';

function Specials() {
  return (
    <>
     <article className='card'>
        <img src={Special} alt="Special Image" className="card-image" />
        <div className="card-details">
          <h4 className="card-title">Best Cuisines</h4>
          <h4 className="card-price">$2.00</h4>
        </div>
        <p className="card-description">
          Experience a culinary journey like no other with our top best cuisines. Indulge in flavors from around the world,
          expertly crafted by our talented chefs.
        </p>
        <button className='card-button'>Order</button>
      </article>

      <article className='card'>
        <h2 className="card-title">Specials 2</h2>
      </article>
      <article className='card'>
        <h3 className="card-title">Specials 3</h3>
      </article>
    </>
  );
}

export default Specials;
