import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import logo from "../assets/img/logo-footer.png";
const Footer = () => {
    return (
        <footer className="footer">
    <div className="footer-container">

        <div className="footer-section">
            <h4>Navegación</h4>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                {/* <li><Link to="/servicios">Servicios</Link></li> */}
                <li><Link to="/nosotros">Nosotros</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
            </ul>
        </div>

        <div className="footer-section">
            <h4>Contactos</h4>
            <p><strong>📲 Cel.:</strong> <a href="tel:+5493525530412">3525-530412</a></p>
            <p><strong>Email:</strong> <a href="mailto:info@rioplacas.com">lapostamaderas@gmail.com</a></p>
        </div>

        <div className="footer-section">
            <h4>Ubicación</h4>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3421.9480222895418!2d-64.08183292441136!3d-30.94401617448307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432646afacc6709%3A0xccf5d286ed6b049e!2sLa%20Posta%20Maderas%20%26%20m%C3%A1s....!5e0!3m2!1ses-419!2sar!4v1753233096047!5m2!1ses-419!2sar"
                width="100%"
                height="150"
                style={{ border: 0, borderRadius: '10px' }}
                allowFullScreen=""
                loading="lazy"
            ></iframe>
        </div>

        <div className="footer-section">
            <h4>Síguenos</h4>
            <div className="social-icons">
                <a href="https://www.instagram.com/lapostamaderas/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
                <a href="https://www.facebook.com/lapostamaderas/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            </div>
        </div>

    </div>

    <div className="footer-bottom">
        <img className="logo-footer" src={logo} alt="logo-lapostamaderas" />
        <p>&copy; 2025 La Posta Maderas. Todos los derechos reservados.</p>
    </div>
</footer>
    );
};

  

export default Footer;