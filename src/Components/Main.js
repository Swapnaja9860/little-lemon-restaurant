import React from 'react';
import Highlights from './Highlights';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';
import './Main.css';

function Main() {
  return (
    <main>
        <section>
        <article className='highlights'>
             <Highlights/>
        </article>
        <article className='specials'>
            <Specials/>
        </article>
        {/* <article className='testimonials'>
            <Testimonials/>
        </article> */}
        <article className='about'>
            <About/>
        </article>
        </section>
    </main>
  )
}

export default Main