import React from 'react'
import {Routes, Route, Outlet, Link } from 'react-router-dom';

export default function Services() {
    function Catering() {
        return (
                <h2>Catering Services</h2>
        );
    }

    function Delivery() {
        return (
                <h2>Delivery Services</h2>
        );
    }

    function Reservations() {
        return (
                <h2>Reservations</h2>
        );
    }

  return (
    <div>
      <h1>Our Services</h1>
      <p>We offer a variety of services to enhance your dining experience.</p>
         <div className='Options'>
        <Link to="catering">Catering</Link>
        <Link to="delivery">Delivery</Link>
        <Link to="reservations">Reservations</Link>

        <Routes>
            <Route path="catering" element={<Catering />} />
            <Route path="delivery" element={<Delivery />} />
            <Route path="reservations" element={<Reservations />} />
        </Routes>
      </div>
      <Outlet/>
    </div>
  )
}