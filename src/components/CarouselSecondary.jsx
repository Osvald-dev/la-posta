import React, { useState, useRef, useEffect } from "react";
import "../styles/CarouselSecondary.css"; 
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import imgA from "../assets/img/a.webp";
import imgB from "../assets/img/b.webp";
import imgC from "../assets/img/c.webp";
import imgD from "../assets/img/d.webp";
import imgE from "../assets/img/e.webp";

const images = [imgA, imgB, imgC, imgD, imgE];

const CarouselSecondary = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
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
    <div className="carousel-secondary-container">
      <div className="carousel-secondary" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <button className="carousel-secondary-btn left" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <div className="carousel-secondary-images">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        </div>
        <button className="carousel-secondary-btn right" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default CarouselSecondary;

