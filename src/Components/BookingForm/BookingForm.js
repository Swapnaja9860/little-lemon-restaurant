import React, { useState } from 'react';
import './BookingForm.css';
import GuestsCount from '../GuestCount/GuestsCount';
import PreferenceDropDown from '../PreferenceDropDown/PreferenceDropDown';
import DatePickerComponent from '../Date/Date';
import { useReducer } from 'react';

function BookingForm() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [time, setTime] = useState('');
  const [count, setCount] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const options = ['Rotating Table', 'Outside Area', 'with Dance floor'];

  const updateTimes = (date) => {
    // return fetchAPI(date)
  };

  const reducerFun = (state, action) => {
    switch (action.type) {
      case 'update':
        console.log('inside reducer');
        updateTimes(action.payload);
        return state;
      default:
        return state;
    }
  };

  const availableTime = ['7.00', '8.00'];
  const [state, dispatch] = useReducer(reducerFun, availableTime);

  const handleSelect = (e) => {
    const option = e.target.value;
    setSelectedOption(option);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOption && count > 1) {
      console.log('---------------------', selectedDate);
      console.log('---------------------', time);
      console.log('---------------------', count);
      console.log('---------------------', selectedOption);
    } else {
      console.log('Form is not valid');
    }
  };

  const checkValidation = () => {
    return selectedOption && count > 1;
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <section>
          <DatePickerComponent
            data-test-id="date"
            selectedDate={selectedDate}
            handleDateChange={handleDateChange}
          />
        </section>
        <section>
          <PreferenceDropDown
            options={state}
            selectedOption={time}
            handleSelect={handleTimeChange}
            label="Available Time:"
          />
        </section>
        <section>
          <GuestsCount count={count} setCount={setCount} />
        </section>
        <section>
          <PreferenceDropDown
            options={options}
            selectedOption={selectedOption}
            handleSelect={handleSelect}
            label="Preferences:"
          />
        </section>
        <section>
          <button type="submit" disabled={!checkValidation()}>
            Pay Now
          </button>
        </section>
      </form>
    </>
  );
}

export default BookingForm;
