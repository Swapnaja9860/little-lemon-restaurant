import React from 'react';
import "./Button.css";
import { Link } from 'react-router-dom';

function Button({title, redirect}) {
  return (
    <button className='link'><Link to="/booking">{title}</Link></button>
  )
}

export default Button