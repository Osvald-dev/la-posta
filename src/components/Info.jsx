import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Info.css";

import imgFrente from "../assets/img/frente-local.webp";
import imgMapa from "../assets/img/mapa.webp";
import imgHorarios from "../assets/img/horarios.webp";

const bloques = [
  {
    img: imgFrente,
    texto: "📍 Estamos en Ruta 9 Norte km 757.5, rotonda de Sinsacate",
  },
  {
    img: imgMapa,
    texto: "Encontranos fácilmente en Google Maps",
    boton: {
      label: "Abrir en Google Maps",
      url: "https://g.co/kgs/XFrn5gT",
    },
  },
  {
    img: imgHorarios,
    texto: "🕒 Lunes a Viernes: 08:30 a 12:30 y 15:00 a 19:00 | Sábados: 9:00 a 13:00",
  },
];

const Info = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="info-section">
      {bloques.map((bloque, index) => (
        <div className="info-card" key={index} data-aos="fade-up">
          <div className="info-img">
            <img src={bloque.img} alt={`Info ${index + 1}`} />
          </div>
          <div className="info-content">
            <p>{bloque.texto}</p>
            {bloque.boton && (
              <a
                href={bloque.boton.url}
                target="_blank"
                rel="noopener noreferrer"
                className="map-button"
              >
                {bloque.boton.label}
              </a>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Info;
