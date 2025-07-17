import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaInstagram, FaFacebookF } from "react-icons/fa";
import "../styles/Navbar.css";
import logo from "../assets/img/logo.png";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="navbar">
            <div className="left-section">
                <button className="menu-btn" onClick={toggleMenu}>
                    {menuOpen ? <FaTimes className="hamburguesa" /> : <FaBars className="hamburguesa" />}
                </button>
            </div>

            <div className="logo-container">
                <Link to="/" onClick={closeMenu}>
                    <img className="logo" src={logo} alt="Rio Placas|Construcción en Seco|MDF y MDP" />
                </Link>
                <p className="slogan">TU PROYECTO NUESTRO COMPROMISO </p>
            </div>


            <div className="social-icons">
                <a href="https://www.instagram.com/rioplacas.sas" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
                <a href="https://www.facebook.com/rioplacasmateriales/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            </div>

            <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
                <ul>
                    <li><Link to="/" onClick={closeMenu}>Inicio</Link></li>
                    <li><Link to="/productos" onClick={closeMenu}>Productos</Link></li>
                    <li><Link to="/contacto" onClick={closeMenu}>Contacto</Link></li>
                    <li><Link to="/nosotros" onClick={closeMenu}>Nosotros</Link></li>
                    <li><Link to="/servicios" onClick={closeMenu}>Servicios</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
