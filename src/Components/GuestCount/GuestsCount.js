import React, { useState } from 'react';
import './GuestCount.css';
import { FaPlus, FaMinus } from 'react-icons/fa';

function GuestsCount({count, setCount}) {


  const decrementCount = () => {
    setCount((prev) => prev - 1);
  };

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  const handleChange = (e) => {
    setCount(parseInt(e.target.value));
  };

  return (
 <div className="guest-count">
  <label htmlFor="number-input">Guests Count:</label>
  <button onClick={decrementCount}><FaMinus /></button>
  <input
    type="number"
    id="number-input"
    value={count}
    onChange={handleChange}
    className="number-input"
    min="1"
    required
  />
  <button onClick={incrementCount}><FaPlus /></button>
</div>

  );
}

export default GuestsCount;
