import React, {useState} from 'react';
import './BookingForm.css';
import GuestsCount from '../GuestCount/GuestsCount';
import PreferenceDropDown from '../PreferenceDropDown/PreferenceDropDown';
import DatePickerComponent from '../Date/Date';
import { useReducer } from 'react';


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
    dispatch({type: 'update', payload: date})
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

  // reducer function

    const updateTimes = (date) => {
        // return fetchAPI(date)
    }

    const reducerFun = (state, action) =>{
        switch(action.type){
            case 'update':
                console.log("inside reducer")
                updateTimes(action.payload)
                return state;
        }
    }
  const availableTime = ["7.00", "8.00"]
  const [state, dispatch] = useReducer(reducerFun, availableTime)
  console.log("--------state-------", state)
 
  return (
    <>
         <form>
            <section>
                <DatePickerComponent data-test-id='date'  selectedDate={selectedDate} handleDateChange={handleDateChange} />
            </section>
            <section>
                <PreferenceDropDown options={state} selectedOption={setTime} handleSelect={handleTimeChange} label="Available Time:" />
            </section>
            <section>
                <GuestsCount count={count} setCount={setCount} />
            </section>
            <section>
                <PreferenceDropDown options={options} selectedOption={selectedOption} handleSelect={handleSelect} label="Preferences:" />
            </section>
            <section>
                {/* <Button title="Pay Now"/> */}
                <button onSubmit={handleSubmit} style={{ color: 'blue' }}>Pay Now</button>
            </section>
        </form>

    </>
  )
}

export default BookingForm