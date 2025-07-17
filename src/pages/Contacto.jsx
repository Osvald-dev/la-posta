import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Footer from "../components/Footer";

import "../styles/Contacto.css";
import Navbar from "../components/Navbar";

const Contacto = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const phoneNumber = "5493584247937";
    const whatsappMessage = `Hola, mi nombre es ${encodeURIComponent(name)}. Mi correo es ${encodeURIComponent(email)}. Quisiera consultar lo siguiente: ${encodeURIComponent(message)}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    window.open(whatsappURL, "_blank");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Navbar />

      <button className="back-button" onClick={() => navigate(-1)}>
        <FaArrowLeft className="arrow-icon" /> Volver
      </button>

      <div className="contacto-container">
        {/* Columna formulario */}
        <div className="contacto-form">
          <h2>Contacto</h2>
          <p>Déjanos tu consulta y te responderemos a la brevedad.</p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Tu Nombre"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Tu Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Escribe tu mensaje"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type="submit">Enviar</button>
          </form>

          <a
            href="https://wa.me/5493584247937?text=Hola,%20quiero%20más%20información"
            className="whatsapp-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contactar por WhatsApp
          </a>
        </div>

        {/* Columna mapa */}
        <div className="map-container">
          <iframe
            title="Ubicación"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.905352986898!2d-64.33816622492872!3d-33.13067637330782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ce2bc6b3086f51%3A0x9526a5e8f2fd1c5d!2sAv.%20Amadeo%20Sabattini%203564%2C%20X5800%20R%C3%ADo%20Cuarto%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1710458912345"
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Contacto;
