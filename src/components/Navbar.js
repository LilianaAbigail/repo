import React from 'react';
import { Link } from 'react-router-dom'; // Si estás utilizando React Router
import './Navbar.css';
import logoImage from './img/logo.webp';

function Navbar() {
    return (
      <nav className="navbar">
        <div className="logo">
            <img src={logoImage} alt="Mind Continent by Deacero" />
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link> {/* Reemplaza con tus rutas */}
          </li>
          
        </ul>
      </nav>
    );
  }
  
  export default Navbar;
  