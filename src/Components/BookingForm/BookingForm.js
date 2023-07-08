import React, {useState} from 'react'
import './BookingForm.css'
import GuestsCount from '../GuestCount/GuestsCount';
import PreferenceDropDown from '../PreferenceDropDown/PreferenceDropDown';
import DatePickerComponent from '../Date/Date';
import Time from '../Time/Time';
import Button from '../Button/Button';

function BookingForm() {

  const [selectedDate, setSelectedDate] = useState(null);
  const [time, setTime] = useState('');
  const [count, setCount] = useState(4);

  const [selectedOption, setSelectedOption] = useState("Roof Top")
  const options = ["Rotating Table", "Oustide Area", "with Dance floor"]

  const handleSelect = (e) => {
    const Option = e.target.value;
    setSelectedOption(Option);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("---------------------", selectedDate);
    console.log("---------------------", time);
    console.log("---------------------", count);
    console.log("---------------------", selectedOption);
  }
  return (
    <>
          <form onSubmit={handleSubmit}>
                <div>
                    <DatePickerComponent selectedDate={selectedDate} handleDateChange={handleDateChange}/>
                </div>
                <div>
                    <Time time={time} handleTimeChange={handleTimeChange}/>
                </div>
                <div>
                    <GuestsCount count={count} setCount={setCount}/>
                </div>
                <div>
                    <PreferenceDropDown options={options} selectedOption={selectedOption} handleSelect={handleSelect} label="Prefernces :"/>
                </div>
                {/* <Button title="Pay Now"/> */}
                <button onSubmit={handleSubmit} style={{color: 'blue'}}>Pay Now</button>
            </form>
    </>
  )
}

export default BookingForm