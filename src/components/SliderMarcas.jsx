import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../styles/BrandSlider.css";

// Importa las imágenes de las marcas
import marca1 from "../assets/img/marcas/marca1.webp";
import marca2 from "../assets/img/marcas/marca2.webp";
import marca3 from "../assets/img/marcas/marca3.webp";
import marca4 from "../assets/img/marcas/marca4.webp";
import marca5 from "../assets/img/marcas/marca5.webp";
import marca6 from "../assets/img/marcas/marca6.webp";
import marca7 from "../assets/img/marcas/marca7.webp";
import marca8 from "../assets/img/marcas/marca8.webp";
import marca9 from "../assets/img/marcas/marca9.webp";
import marca10 from "../assets/img/marcas/marca10.webp";
// import logoPosta from "../assets/img/logo.png";


const BrandSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500, // Velocidad de transición más lenta (en ms)
    slidesToShow: 5, // Cantidad de logos visibles a la vez
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000, // Tiempo que tarda en cambiar (más alto = más lento)
    pauseOnHover: true, // Se detiene al pasar el mouse
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const brands = [
    marca1, marca2, marca3, marca4, marca5, marca6, marca7,
    marca8, marca9, marca10
  ];

return (
  <div className="brand-slider-container">
    <div className="brand-slider-header">
      <div className="orange-line" />
      {/* <img src={logoPosta} alt="La Posta" className="logo-posta" /> */}
      <h2>Nos respaldan
        
      </h2>
    </div>
    <Slider {...settings}>
      {brands.map((brand, index) => (
        <div key={index} className="brand-slide">
          <img src={brand} alt={`Marca ${index + 1}`} />
        </div>
      ))}
    </Slider>
  </div>
);
};

export default BrandSlider;
