
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer';
import React from 'react';
import DatePickerComponent from '../Components/Date/Date';
import Restaurant from '../images/restaurant.png'
import './BookingPage.css'
import GuestsCount from '../Components/GuestCount/GuestsCount';
import PreferenceDropDown from '../Components/PreferenceDropDown/PreferenceDropDown'
import Time from '../Components/Time/Time'
import BookingForm from '../Components/BookingForm/BookingForm';


function BookingPage() {
  return (
     <>
      <Header/>
      <section className='reservation'>
        <article className='reservation-content'>
            <h2> Reserve The Table </h2>
            <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
            </p>
        </article>
          <BookingForm/>
      </section>
       <Footer/>
    </>
  )
}

export default BookingPage