
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer';
import React from 'react';
import './BookingPage.css'
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