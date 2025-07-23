import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import BackButton from "../components/BackButton";
import "../styles/Contacto.css";

const Contacto = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const phoneNumber = "5493525530412";
    const whatsappMessage = `Hola, mi nombre es ${encodeURIComponent(name)}. Mi correo es ${encodeURIComponent(email)}. Quisiera consultar lo siguiente: ${encodeURIComponent(message)}`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    window.open(whatsappURL, "_blank");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <NavBar />
      <BackButton />


      <div className="contacto-container">
        {/* Formulario */}
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
            href="https://wa.me/5493525530412?text=Hola,%20visité su página web%20más%20quiero más información"
            className="whatsapp-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contactar por WhatsApp
          </a>
        </div>

        {/* Horarios */}
        <div className="horarios-container">
          <h3>Horarios de Atención</h3>
          <ul>
            <li>Lunes a Viernes: 8:00 a 12:30 y 15:30 a 19:30</li>
            <li>Sábados: 9:00 a 13:00</li>
            <li>Domingos: Cerrado</li>
          </ul>
          <p>📍 Ruta 9 Norte km 757.5 – Sinsacate, Córdoba</p>
        </div>
      </div>
    
      <Footer />
    </>
  );
};

export default Contacto;
