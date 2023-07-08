import React from 'react';
import "./Time.css"

function TimeInput({time, handleTimeChange}){

  return (
    <div className='time'>
    <label>Time: </label>
    <input
      type="time"
      value={time}
      onChange={handleTimeChange}
    />
    </div>
  );
};

export default TimeInput;
