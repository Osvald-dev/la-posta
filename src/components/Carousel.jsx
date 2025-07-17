import React, { useState, useRef, useEffect } from "react";
import "../styles/Carousel.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import img1 from "../assets/img/1.webp";
import img2 from "../assets/img/2.webp";
import img3 from "../assets/img/3.webp";
import img4 from "../assets/img/4.webp";
import img5 from "../assets/img/5.webp";
import img6 from "../assets/img/6.webp";
import img7 from "../assets/img/7.webp";
import img8 from "../assets/img/8.webp";
import img9 from "../assets/img/9.webp";
import img10 from "../assets/img/10.webp";
import headerImage from "../assets/img/header.webp";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesPerSlide, setImagesPerSlide] = useState(1);
  const touchStartX = useRef(null);

  // Detectar tamaño de pantalla para ajustar imágenes por slide
  useEffect(() => {
    const updateImagesPerSlide = () => {
      setImagesPerSlide(window.innerWidth >= 1024 ? 2 : 1);
    };
    updateImagesPerSlide();
    window.addEventListener("resize", updateImagesPerSlide);
    return () => window.removeEventListener("resize", updateImagesPerSlide);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - imagesPerSlide : prevIndex - imagesPerSlide
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= images.length - imagesPerSlide ? 0 : prevIndex + imagesPerSlide
    );
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }

    touchStartX.current = null;
  };

  return (
    <div className="carousel-container-mdf">
      <div className="header-section">
        <div className="header-text">
          <img src={headerImage} alt="Naturaleza" className="header-image" />
          <h2>Línea Mesopotamia</h2>
        </div>

      </div>
      <div className="carousel-mdf" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <button className="carousel-btn left" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <div className="carousel-images">
          {images.slice(currentIndex, currentIndex + imagesPerSlide).map((image, index) => (
            <img key={index} src={image} alt={`Slide ${currentIndex + index + 1}`} />
          ))}
        </div>
        <button className="carousel-btn right" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Carousel;