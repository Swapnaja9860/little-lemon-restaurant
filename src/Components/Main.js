import React from 'react';
import Highlights from './Highlights';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';

function Main() {
  return (
    <main>
        <section>
            <Highlights/>
        </section>
        <section>
            <Specials/>
        </section>
        <section>
            <Testimonials/>
        </section>
        <section>
            <About/>
        </section>
    </main>
  )
}

export default Main