import React, { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';
import './Date.css'

export default function DatePickerComponent({selectedDate, handleDateChange}) {
  
  const datePickerRef = useRef(null);

  const toggleDatePicker = () => {
    datePickerRef.current.setFocus(true);
  };

  return (
    <div className='calender'>
      <label>Date:</label>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        ref={datePickerRef}
        className="custom-calendar"
      />
      <span className="calendar-icon" onClick={toggleDatePicker}>
        <FaCalendarAlt size={26}/>
      </span>
    </div>
  );
}