import React from 'react';
import "./Button.css";
import { Link } from 'react-router-dom';

function Button({title, redirect}) {
  return (
    <button><Link to={redirect}>{title}</Link></button>
  )
}

export default Button