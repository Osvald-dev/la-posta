import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "../styles/HeroCarousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Imágenes
import img1 from "../assets/img/hero.webp";
import img2 from "../assets/img/steel.webp";
import img3 from "../assets/img/wood.webp";
import img4 from "../assets/img/obra.webp";
import mob1 from "../assets/img/mob.webp";
import mob2 from "../assets/img/steelmob.webp";
import mob3 from "../assets/img/wood.webp";
import mob4 from "../assets/img/obramob.webp";

const HeroCarousel = () => {
    // Configuración del carrusel (react-slick)
    const settings = {
        autoplay: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplaySpeed: 5000,
    };

    return (
        <div className="hero-carousel-wrapper">
            {/* Carrusel Desktop */}
            <div className="rio-carousel-desktop">
                <Slider {...settings}>
                    <div className="carousel-slide">
                        <img src={img1} alt="MDF y MDP - Cortes a medida - envíos a todo el país - Rio Placas S.A.S" />
                        <div className="rp-carousel-overlay">
                            <h2>MDF y MDP</h2>
                            <p>Placas para muebles, interiores y terminaciones decorativas.</p>
                            <div className="rp-carousel-buttons">
                                <a href="/catalogo.pdf" target="_blank" rel="noopener noreferrer" className="rp-btn">
                                    Descargar catálogo
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-slide">
                        <img src={img2} alt="Todo para construcciones en Steel Frame" />
                        <div className="rp-carousel-overlay">
                            <h2>Steel Frame</h2>
                            <p>Perfiles, Placas de Yeso, Masillas, Herramientas y Bulonería</p>
                            <Link to="/productos" className="rp-btn rp-btn-secundario">
                                Ver productos
                            </Link>
                        </div>
                    </div>
                    <div className="carousel-slide">
                        <img src={img3} alt="Todo para construcciones en WoodFrame" />
                        <div className="rp-carousel-overlay">
                            <h2>Wood Frame</h2>
                            <p>Vigas, Clavaderas, Placas OSB, Placas de Yeso, Aislantes</p>
                            <Link to="/productos" className="rp-btn rp-btn-secundario">
                                Ver productos
                            </Link>
                        </div>
                    </div>
                    <div className="carousel-slide">
                        <img src={img4} alt="Todo para la construcción en Seco en Rio Placas S.A.S" />
                        <div className="rp-carousel-overlay">
                            <h2>Materiales para construcción</h2>
                            <p>Herramientas, Pinturas, Cementos, Pegamentos, Maderas y más</p>
                            <Link to="/productos" className="rp-btn rp-btn-secundario">
                                Ver productos
                            </Link>
                        </div>
                    </div>
                </Slider>
            </div>

            {/* Carrusel Mobile */}
            <div className="rio-carousel-mobile">
                <Slider {...settings}>
                    <div className="carousel-slide">
                        <img src={mob1} alt="Todas las líneas de MDF y MDP en Rio Placas S.A.S" />
                        <div className="rp-carousel-overlay">
                            <h2 className="mb-h2">MDF y MDP</h2>
                            <p className="p-hero">Placas para muebles, interiores y terminaciones decorativas.</p>
                            <div className="rp-carousel-buttons">
                                <a href="/catalogo.pdf" target="_blank" rel="noopener noreferrer" className="rp-btn">
                                    Descargar catálogo
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-slide">
                        <img src={mob2} alt="Todo para construcciones en Steel Frame" />
                        <div className="rp-carousel-overlay">
                            <h2 className="mb-h2">Steel Frame</h2>
                            <p className="p-hero">Perfiles, Placas de Yeso, Masillas, Herramientas y Bulonería</p>
                            <Link to="/productos" className="rp-btn rp-btn-secundario">
                                Ver productos
                            </Link>
                        </div>
                    </div>
                    <div className="carousel-slide">
                        <img src={mob3} alt="Todo para construcción en Wood Frame aquí en Rio Placas S.A.S" />
                        <div className="rp-carousel-overlay">
                            <h2 className="mb-h2">Wood Frame</h2>
                            <p className="p-hero">Vigas, Clavaderas, Placas OSB, Placas de Yeso, Aislantes</p>
                            <Link to="/productos" className="rp-btn rp-btn-secundario">
                                Ver productos
                            </Link>
                        </div>
                    </div>
                    <div className="carousel-slide">
                        <img src={mob4} alt="Materiales para construcción en seco - placas de yeso - OSB - Fenólicos - Pinturas - Cementos - Maderas" />
                        <div className="rp-carousel-overlay">
                            <h2 className="mb-h2">Materiales para construcción</h2>
                            <p className="p-hero">Todo para la construcción en seco, herramientas y más</p>
                            <Link to="/productos" className="rp-btn rp-btn-secundario">
                                Ver productos
                            </Link>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default HeroCarousel;
