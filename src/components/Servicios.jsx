import React from "react";
import "../styles/Servicios.css";
import videoServicios from "../assets/videos/lapostavideo.mp4";
import corteImg from "../assets/img/corte.webp";
import rotuladoImg from "../assets/img/rotulado.webp";
import pegadoImg from "../assets/img/pegado.webp";
import enviosImg from "../assets/img/envios.webp";

const servicios = [
  { id: 1, titulo: "Corte a medida", imagen: corteImg },
  { id: 2, titulo: "Rotulado para armado", imagen: rotuladoImg },
  { id: 3, titulo: "Pegado de cantos", imagen: pegadoImg },
  { id: 4, titulo: "Envíos dentro de la zona", imagen: enviosImg },
];

const Servicios = () => {
  return (
    <div className="servicios">
      {/* HERO CON VIDEO */}
      <section className="servicios-hero">
        <video className="video-servicios" autoPlay loop muted playsInline>
          <source src={videoServicios} type="video/mp4" />
          Tu navegador no soporta videos.
        </video>
        <div className="overlay">
          <h1>Soluciones que se adaptan a tu proyecto</h1>
          <p>
            Desde el corte de melaminas hasta la entrega final, en La Posta
            Maderas estamos para acompañarte en cada paso.
          </p>
        </div>
      </section>

      {/* SERVICIOS DETALLADOS */}
      <section className="servicios-detalle">
        <div className="servicios-grid">
          {servicios.map((servicio) => (
            <div key={servicio.id} className="servicio-card">
              <img
                src={servicio.imagen}
                alt={servicio.titulo}
                loading="lazy"
                className="servicio-img"
              />
              <h3>{servicio.titulo}</h3>
            </div>
          ))}
        </div>

        {/* CTA FINAL */}
        <div className="servicios-cta">
          <h2>¿Tenés un proyecto en mente?</h2>
          <p>
            Escribinos por WhatsApp y te ayudamos a presupuestarlo rápido y sin
            compromiso.
          </p>
          <a
            href="https://wa.me/5493525530412"
            className="cta-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            📲 Consultar por WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default Servicios;
