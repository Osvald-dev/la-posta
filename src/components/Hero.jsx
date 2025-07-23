import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect } from "react";

import "../styles/Hero.css";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
  const newState = !menuOpen;
  setMenuOpen(newState);
  document.body.style.overflow = newState ? "hidden" : "auto";
};
  const closeMenu = () => {
  setMenuOpen(false);
  document.body.style.overflow = "auto";
};



  useEffect(() => {
    const texts = document.querySelectorAll(".rotating-text p");
    let index = 0;

    const rotate = () => {
      texts.forEach((el) => el.classList.remove("active"));
      texts[index].classList.add("active");
      index = (index + 1) % texts.length;
    };

    rotate(); // mostrar el primero
    const interval = setInterval(rotate, 4000); // cada 4 seg


    return () => clearInterval(interval); // cleanup
  }, []);
  return (
    <header className="hero-header">

      <div className="hero-navbar">


        {/* Botón hamburguesa */}
        <button className="hero-menu-btn" onClick={toggleMenu}>
          {menuOpen ? <FaTimes className="hero-hamburguesa" /> : <FaBars className="hero-hamburguesa" />}
        </button>

        {/* Menú escritorio */}
        <ul className="hero-desktop-menu">
          <li><Link to="/productos">Productos</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
          <li><Link to="/nosotros">Nosotros</Link></li>
          {/* <li><Link to="/servicios">Servicios</Link></li> */}
        </ul>

        {/* Menú lateral mobile */}
        <nav className={`hero-nav-menu ${menuOpen ? "open" : ""}`}>
          <ul>
            <li><Link to="/" onClick={closeMenu}>Inicio</Link></li>
            <li><Link to="/productos" onClick={closeMenu}>Productos</Link></li>
            <li><Link to="/contacto" onClick={closeMenu}>Contacto</Link></li>
            <li><Link to="/nosotros" onClick={closeMenu}>Nosotros</Link></li>
            {/* <li><Link to="/servicios" onClick={closeMenu}>Servicios</Link></li> */}
          </ul>
        </nav>
      </div>

      {/* HERO CONTENT */}
      <div className="hero-content">
        <h1 className="hprincipal">Materiales para Construcción y Hogar</h1>
        <h2 className="hsecundario">La calidad nuestra mejor garantía</h2>
      </div>
    </header>
  );
};

export default Hero;
