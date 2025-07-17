import React from "react";
import "../styles/Servicios.css";
import videoServicios from "../assets/videos/servicios.mp4";
import corteImg from "../assets/img/corte.webp";
import rotuladoImg from "../assets/img/rotulado.webp";
import pegadoImg from "../assets/img/pegado.webp";
import enviosImg from "../assets/img/envios.webp";

const servicios = [
  { id: 1, titulo: "Corte a medida", imagen: corteImg },
  { id: 2, titulo: "Rotulado para armado", imagen: rotuladoImg },
  { id: 3, titulo: "Pegado de cantos", imagen: pegadoImg },
  { id: 4, titulo: "Envíos a todo el país", imagen: enviosImg },
];

const Servicios = () => {
  return (
    
    <div className="servicios-container">
      
      <video className="video-servicios" autoPlay loop muted>
        <source src={videoServicios} type="video/mp4" />
        Tu navegador no soporta videos.
      </video>
      <p className="servicios-texto">
        Brindamos soluciones de calidad para la industria del mueble y la construcción en seco.
        Con tecnología de precisión y materiales de primera línea, garantizamos cortes exactos,
        identificación para fácil armado y acabados profesionales en cada pieza. Además, realizamos
        envíos a todo el país para que tengas tus materiales donde los necesites.
      </p>
      <div className="servicios-grid">
        {servicios.map((servicio) => (
          <div key={servicio.id} className="servicio-card">
            <img src={servicio.imagen} alt={servicio.titulo} loading="lazy" className="servicio-img" />
            <h3 className="servicio-titulo">{servicio.titulo}</h3>
          </div>
        ))}
      </div>

   
    </div>
  );
};

export default Servicios;
