import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Info.css";


const Info = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const bloques = [
    {
      img: "../assets/img/1.webp", // Reemplazá por tus imágenes
      texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod, justo vel sollicitudin suscipit...",
      imgLeft: true,
    },
    {
      img: "../assets/img/2.webp",
      texto: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
      imgLeft: false,
    },
    {
      img: "../assets/img/3.webp",
      texto: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...",
      imgLeft: true,
    },
  ];

  return (
    <section className="info-section">
      {bloques.map((bloque, i) => (
        <div
          className={`info-block ${bloque.imgLeft ? "left" : "right"}`}
          key={i}
          data-aos={bloque.imgLeft ? "fade-right" : "fade-left"}
        >
          <div className="info-img">
            <img src={bloque.img} alt={`Bloque ${i + 1}`} />
          </div>
          <div className="info-text">
            <p>{bloque.texto}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Info;
