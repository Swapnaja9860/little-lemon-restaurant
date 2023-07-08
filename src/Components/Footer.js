import React from 'react';
import { Link } from 'react-router-dom';
import '../Components/Header/Nav.css';
import './Footer.css';
import FooterImg from '../images/restaurant.png'

function Footer() {
  return (
    <footer>
      <div className='item'>
        <img src={FooterImg} className='footer-img'/>
      </div>
     <div  className='item'>
      <nav className='nav-links'>
        <ul>
          <h4>Navigation</h4>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/menu'>Menu</Link></li>
          <li><Link to='/reservation'>Reservation</Link></li>
          <li><Link to='/order'>Order</Link></li>
        </ul>
      </nav>
    </div>
    <div  className='item'>
      <nav className='nav-links'>
        <ul>
          <h4>Contact</h4>
          <li><Link to='/'>Address</Link></li>
          <li><Link to='/about'>Contact</Link></li>
          <li><Link to='/about'>Email</Link></li>
        </ul>
      </nav>
    </div>
    <div  className='item'>
      <nav className='nav-links'>
        <ul>
          <h4>Social Media Links</h4>
          <li><Link to='/about'>WhatsApp</Link></li>
          <li><Link to='/menu'>Instagram</Link></li>
          <li><Link to='/reservation'>Facebook</Link></li>
        </ul>
      </nav>
    </div>
    </footer>
  );
}
export default Footer;
