import React, { useState } from 'react';
import './PreferenceDropDown.css'

const PreferenceDropDown = ({options, selectedOption, handleSelect, label}) => {

  return (
    <div className='preference'>
     <label>Preference: </label>
     <select onChange={handleSelect}>
      <option value={selectedOption}>Roof Top</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    </div>
  );
};

export default PreferenceDropDown;
