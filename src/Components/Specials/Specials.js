import React from 'react';
import dish1 from '../../images/dish1.jpg'
import dish3 from '../../images/dish3.jpg'
import dish4 from '../../images/rice.jpg'
import dish5 from '../../images/dosa.jpg'

import './Specials.css';
import Card from './Card';

function Specials() {
  let dishData = [
    {
      image : dish1,
      dishName : "Tandoori Paneer",
      price : "$5.00",
      description: "Grilled and marinated cottage cheese with aromatic Indian spices.",
    },
     {
      image : dish3,
      dishName : "Chole Bhatura",
      price : "$5.00",
      description: " A popular North Indian dish consisting of spicy chickpea curry served with deep-fried bread.",
    },
     {
      image : dish4,
      dishName : "Curd Rice",
      price : "$4.00",
      description: "A comforting South Indian dish made with yogurt and rice, often enjoyed as a cooling accompaniment.",
    },
     {
      image : dish5,
      dishName : "Dosa",
      price : "$3.00",
      description: "A thin and crispy South Indian crepe made from fermented rice and lentil batter, usually served with chutney and sambar",
    }
  ]
  return (
    <>
    {dishData.map((data) => <Card data={data}/>)}
    {/* <Card image={dish1} /> */}
     {/* <article className='card'>
        <img src={dish3} alt="Special Image" className="card-image" />
        <div className="card-details">
          <h4 className="card-title">Best Cuisines</h4>
          <h4 className="card-price">$2.00</h4>
        </div>
        <p className="card-description">
          Experience a culinary journey like no other with our top best cuisines. 
        </p>
        <button className='card-button'>Order online</button>
      </article>

      <article className='card'>
        <img src={dish1} alt="Special Image" className="card-image" />
        <div className="card-details">
          <h4 className="card-title">Best Cuisines</h4>
          <h4 className="card-price">$2.00</h4>
        </div>
        <p className="card-description">
          Experience a culinary journey like no other with our top best cuisines. 
        </p>
        <button className='card-button'>Order online</button>
      </article>

      <article className='card'>
        <img src={dish5} alt="Special Image" className="card-image" />
        <div className="card-details">
          <h4 className="card-title">Best Cuisines</h4>
          <h4 className="card-price">$2.00</h4>
        </div>
        <p className="card-description">
          Experience a culinary journey like no other with our top best cuisines. 
        </p>
       <button className='card-button'>Order online</button>
      </article> */}

      
    </>
  );
}

export default Specials;
