import React, { useRef } from "react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Navbar from "../components/Navbar";
import img1 from "../assets/img/e.webp";
import img2 from "../assets/img/equipo.webp";
import "../styles/Nosotros.css";
import { useOnScreen } from "../data/useOnScreen"; // Ajusta ruta según dónde pongas el hook

function Nosotros() {
  const navigate = useNavigate();

  const textoRef = useRef();
  const imagenesRef = useRef();

  const textoVisible = useOnScreen(textoRef);
  const imagenesVisible = useOnScreen(imagenesRef);

  const paragraphs = [
    "En Río Placas S.A.S, nos destacamos por nuestra innovación y compromiso, brindando soluciones en construcción en seco, MDP, MDF y tableros de madera para todo tipo de proyectos.",
    "Contamos con una amplia variedad de productos, incluyendo tableros de pino, fenólicos, placas OSB, placas de yeso, aislantes, pinturas, pegamentos, cementos y varillados de madera, garantizando calidad, eficiencia y durabilidad.",
    "Junto a nuestros proveedores líderes, reafirmamos nuestro compromiso con la eco-arquitectura, apostando por materiales sustentables y un futuro más responsable.",
    "Todo lo que necesitás en un solo lugar: materiales para mueblería, construcción en seco, herramientas, bulonería y más. Calidad, variedad y asesoramiento experto para hacer realidad tus proyectos. ¡Hablános hoy y encontrá lo que buscás!",
    "📍 Nos encontramos en Río Cuarto, Córdoba. Av. Amadeo Sabattini 3564. 🚚 Realizamos envíos a todo el país con logística segura y confiable.",
  ];

  return (
    <>
<Navbar />
      <button className="back-button" onClick={() => navigate(-1)}>
        <FaArrowLeft className="arrow-icon" /> Volver
      </button>

      <div className="nosotros-container">
        <h2>Sobre Nosotros</h2>

        <section
          ref={imagenesRef}
          className={`nosotros-imagenes`}
        >
          {[img1, img2].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Imagen ${i + 1}`}
              className={`imagen-nosotros fade-slide-up ${
                imagenesVisible ? "visible" : ""
              } delay-${i + 1}`}
            />
          ))}
        </section>

        <section
          ref={textoRef}
          className={`nosotros-texto fade-slide-up ${
            textoVisible ? "visible" : ""
          }`}
        >
          <h2>Nuestra Historia</h2>
          {paragraphs.map((text, i) => (
            <p
              key={i}
              className={`fade-slide-up ${
                textoVisible ? "visible" : ""
              } delay-${i + 1} ${i === paragraphs.length - 1 ? "ubicacion" : ""}`}
            >
              {text}
            </p>
          ))}
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Nosotros;
