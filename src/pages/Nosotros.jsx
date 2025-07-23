import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import BackButton from "../components/BackButton";
import SliderMarcas from "../components/SliderMarcas"
import video from "../assets/videos/lapostavideo.mp4";
import "../styles/Nosotros.css";

const Nosotros = () => {

  return (
    <>
      <NavBar />
      <BackButton />

      return (
    <section className="nosrespalda-section">
      
      <div className="nosrespalda-texto">
        <h2>Sobre Nosotros</h2>
        <p>
        En La Posta Maderas hace más de 10 años abastecemos a corralones, ferreterías y obras con el mejor surtido en materiales.
        </p>
        <p>
          Brindamos atención personalizada y asesoramiento técnico para que cada proyecto avance con confianza.
        </p>
        <p>
         Ofrecemos fenólicos, vigas, revestimientos, cemento, tornillos, aislantes, herramientas, pinturas y más. Calidad garantizada por los mejores proveedores del país.
        </p>
      </div>
      <div className="nosrespalda-video-wrapper">
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          className="nosrespalda-video"
        />
      </div>
    </section>
      <section className="section-marcas">
        <SliderMarcas />
      </section>
  );



      <Footer />
    </>
  );
};

export default Nosotros;
