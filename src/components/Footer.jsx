import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-links">
                    <h4 className="hss">Navegación</h4>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/productos">Productos</Link></li>
                        <li><Link to="/servicios">Servicios</Link></li>
                        <li><Link to="/nosotros">Nosotros</Link></li>
                        <li><Link to="/contacto">Contacto</Link></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4 className="hss">Contactos</h4>
                    <p><strong>Teléfonos</strong> <br /> <a href="tel:+5493584247937">Belén: 3584247937</a><br /><a href="tel:+5493584247933">Cesar: 3584247933</a><br /><a href="tel:+5493512303188">Emanuel: 3512303188</a></p>
                    <p><strong>Email:</strong> <a href="mailto:info@bosquesdelsur.com">info@rioplacas.com</a></p>
                </div>

                <div className="footer-location">
                    <h4 className="hss">Ubicación</h4>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.905352986898!2d-64.33816622492872!3d-33.13067637330782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ce2bc6b3086f51%3A0x9526a5e8f2fd1c5d!2sAv.%20Amadeo%20Sabattini%203564%2C%20X5800%20R%C3%ADo%20Cuarto%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1710458912345"
                        width="100%"
                        height="150"
                        style={{ border: 0, borderRadius: '10px' }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>

                <div className="footer-social">
                    <h4 className="hss">Síguenos</h4>
                    <a href="https://www.instagram.com/rioplacas.sas" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
                    <a href="https://www.facebook.com/rioplacasmateriales/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2025 Rio Placas S.A.S Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;