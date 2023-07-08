import React from 'react';
import Highlights from './Highlights';
import Specials from './Specials/Specials';
import Testimonials from './Testimonials';
import './Main.css';

function Main() {
  return (
    <main>
        <section className='main'>
        <article className='highlights'>
             <Highlights/>
        </article>
        <article className='specials'>
            <Specials/>
        </article>
        {/* <article className='testimonials'>
            <Testimonials/>
        </article> */}
        {/* <article className='about'>
            <About/>
        </article> */}
        </section>
    </main>
  )
}

export default Main