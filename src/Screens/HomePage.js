import React from 'react'
import Header from '../Components/Header/Header'
import Highlights from '../Components/Highlights/Highlights';
import Specials from '../Components/Specials/Specials';
import Footer from '../Components/Footer';
import './HomePage.css'

function HomePage() {
  return (
     <>
      <Header/>
      <main>
        <section className='main'>
          <article className='highlights'>
              <Highlights/>
          </article>
          <article className='specials'>
              <Specials/>
          </article>
        </section>
      </main>
      <Footer/>
    </>
  )
}

export default HomePage
