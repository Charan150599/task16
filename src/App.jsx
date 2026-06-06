import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Home from './components.jsx/Home';
import About from './components.jsx/About';
import Contact from './components.jsx/Contact';
import Services from './components.jsx/Services.jsx';
import Profile from './components.jsx/Profile.jsx';
import Delivery from './components.jsx/Delivery.jsx';
import Catering from './components.jsx/Catering.jsx';
import Reservations from './components.jsx/Reservations.jsx';
import CartContext from './Context.jsx/CartContext.jsx';



export default function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Navbar />
        <CartContext/>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/services/delivery" element={<Delivery />} />
          <Route path="/services/catering" element={<Catering />} />
          <Route path="/services/Reservations" element={<Reservations />} />
          
          
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}