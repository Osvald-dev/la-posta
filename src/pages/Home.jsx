import React from "react";
import { Link } from "react-router-dom";
// import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from '../components/Footer';
import Info from "../components/Info";
import Categorias from "../components/ModuleCarousel";
import SliderMarcas from '../components/SliderMarcas';

import "../styles/Home.css";

const Home = () => {
  return (
    <>
      {/* <Navbar />
      <HeroCarousel /> */}
      <div className="top-bar">
        
        <div className="rotating-text">
          <p className="active">📍 Ruta 9 Norte km 757.5 - Sinsacate</p>
          <p>☎️ 3525 53-0412</p>
          <p>🕒 Lun a Vier: 08:30 a 12:30 - 15:00 a 19:00</p>
          <p>Sáb: 9:00 a 13:00</p>
        </div>
      </div>
      <Hero />
      <Info />
      <div className="separador">
        <div class="separator-aos" data-aos="fade-up">
          <h2 class="separador-h2">Tenemos todo para tus proyectos</h2>
        </div>

        <Categorias />
      </div>
      <section className="section-marcas">
        <SliderMarcas />
      </section>

     

      <Footer />
    </>
  );
};

export default Home;
