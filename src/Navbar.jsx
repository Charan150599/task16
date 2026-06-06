import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {

  return (
    <div className='Navbar'>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
        <Link to="/profile">Profile</Link>
    </div>
  )
}