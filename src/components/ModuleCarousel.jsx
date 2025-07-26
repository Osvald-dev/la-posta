import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import "../styles/Categorias.css";

// Importación de imágenes con Vite
import imgMaderas from "../assets/img/maderas.webp";
import imgRevestimientos from "../assets/img/revestimientos.webp";
import imgPinturas from "../assets/img/pinturas.webp";
import imgHerramientas from "../assets/img/herramientas.webp";
import imgTornillos from "../assets/img/tornillos.webp";

const categorias = [
  { nombre: "Maderas para construcción", img: imgMaderas },
  { nombre: "Revestimientos", img: imgRevestimientos },
  { nombre: "Pinturas y barnices", img: imgPinturas },
  { nombre: "Herramientas y accesorios", img: imgHerramientas},
  { nombre: "Tornillos", img: imgTornillos },
];

const Categorias = () => {
  const [activa, setActiva] = useState(0);

  return (
    <section className="categorias-section">
      <div className="categorias-tabs">
        {categorias.map((cat, i) => (
          <button
            key={i}
            className={`tab-button ${activa === i ? "active" : ""}`}
            onClick={() => setActiva(i)}
          >
            {cat.nombre}
          </button>
        ))}
      </div>

      <div
        className="categoria-img"
        style={{ backgroundImage: `url(${categorias[activa].img})` }}
      >
        <div className="categoria-overlay">
          <a href="/#/productos" className="ver-todo-boton">
            Ver todo
          </a>
        </div>
      </div>
    </section>
  );
};
export default Categorias;