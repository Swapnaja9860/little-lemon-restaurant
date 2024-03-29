import React from 'react'
import './Nav.css';
import { Link } from 'react-router-dom';
import logo from '../../images/Asset 16@4x.png'

function Nav() {
  return (
    <nav className='nav-header'>
      <ul>
      <li><img src={logo}></img></li>
      <li></li>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/menu'>Menu</Link></li>
      <li><Link to='/booking'>Reservation</Link></li>
      <li><Link to='/order'>Order</Link></li>
      <li><Link to='/login'>Login</Link></li>
    </ul>
    </nav>
  )
}

export default Nav