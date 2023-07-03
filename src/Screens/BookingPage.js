import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer';

function BookingPage() {
  return (
     <>
      <Header/>
      <h2>Booking Page</h2>
      <form>
        <label>Date:</label>
         <input type="text"/>
      </form>
      <Footer/>
    </>
  )
}

export default BookingPage