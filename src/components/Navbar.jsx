import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/img/logo.png";

import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Bloquea el scroll del body cuando el menú está abierto
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Limpieza (por si acaso)
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [menuOpen]);

  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      <button className="menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
        {menuOpen ? <FaTimes className="menu-icon" /> : <FaBars className="menu-icon" />}
      </button>

      <ul className="desktop-menu">
        <li><Link to="/productos" onClick={closeMenu}>Productos</Link></li>
        <li><Link to="/contacto" onClick={closeMenu}>Contacto</Link></li>
        <li><Link to="/nosotros" onClick={closeMenu}>Nosotros</Link></li>
        <li><Link to="/servicios" onClick={closeMenu}>Servicios</Link></li>
      </ul>

      <nav className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/" onClick={closeMenu}>Inicio</Link></li>
          <li><Link to="/productos" onClick={closeMenu}>Productos</Link></li>
          <li><Link to="/contacto" onClick={closeMenu}>Contacto</Link></li>
          <li><Link to="/nosotros" onClick={closeMenu}>Nosotros</Link></li>
          <li><Link to="/servicios" onClick={closeMenu}>Servicios</Link></li>
        </ul>
      </nav>
    </nav>
  );
};

export default Navbar;
