import React from 'react';

function Card({data}) {
  const {image, dishName, price, description} = data
  return (
 
    <article className='card'>
        <img src={image} alt="Special Image" className="card-image" />
        <div className="card-details">
          <h4 className="card-title">{dishName}</h4>
          <h4 className="card-price">{price}</h4>
        </div>
        <p className="card-description">
          {description}
        </p>
         <button className='card-button'>Order online</button>
    </article>
  )
}

export default Card