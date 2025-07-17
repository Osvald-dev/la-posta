import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import HeroCarousel from "../components/HeroCarousel";
import CarouselSecondary from "../components/CarouselSecondary";
import SliderMarcas from '../components/SliderMarcas';
import FAQ from "../components/FAQ";
import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroCarousel />
   

      <section className="about">
        <h1 className="h-acerca">Materiales para construcción en seco, mobiliario y más.</h1>
        
        <p className="p-acerca">
          En Río Cuarto, Rio Placas S.A.S es sinónimo de innovación y compromiso, ofreciendo soluciones en construcción en seco, MDP, MDF  y tableros de madera  para todo tipo de proyectos.
          <br /><br />
          Contamos con una amplia variedad de productos, incluyendo tableros de pino, fenólicos, placas OSB, placas de yeso, aislantes, pinturas, pegamentos, cementos y varillados de madera, garantizando calidad, eficiencia y durabilidad.
          <br /><br />
          Nuestra amplia cartera de productos está pensada para responder a las necesidades de cada cliente.
          <br /><br />
          Junto a nuestros proveedores líderes, reafirmamos nuestro compromiso con la eco-arquitectura, apostando por materiales sustentables y un futuro más responsable.
        </p>
      </section>
      <CarouselSecondary />
      <Carousel />

      <section className="features">
        <h3>Trabajamos con</h3>
        <SliderMarcas />
      </section>

      <section className="contact">
        <FAQ />
      </section>

      <Footer />
    </>
  );
};

export default Home;
