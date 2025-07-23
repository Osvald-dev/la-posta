import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavBar from "../components/NavBar";
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';
import '../styles/Productos.css';
import imgMader from '../assets/img/mader.webp';
import imgHerr from '../assets/img/herr.webp';
import imgMelaminas from '../assets/img/melaminas.webp';
import imgCemento from '../assets/img/cemento.webp';
import imgAislante from '../assets/img/asilantes.webp';
import imgBulones from '../assets/img/bulones.webp';

const categorias = [
  {
    titulo: 'Maderas',
    descripcion: 'Variedad en maderas macizas, cepilladas e impregnadas para interiores y exteriores.',
    imagen: imgMader,
  },
  {
    titulo: 'Herramientas',
    descripcion: 'Todo en herramientas manuales y eléctricas para profesionales y aficionados.',
    imagen: imgHerr,
  },
  {
    titulo: 'Melaminas',
    descripcion: 'Placas melamínicas de diferentes espesores y acabados para muebles y revestimientos.',
    imagen: imgMelaminas,
  },
  {
    titulo: 'Cementos',
    descripcion: 'Gama de cementos en bolsa de Holcim, ideales para proyectos de construcción de cualquier tamaño y tipo.',
    imagen: imgCemento,
  },
  {
    titulo: 'Aislantes',
    descripcion: 'Elegí la aislación que mejor se adapte para tu casa o proyecto: techos, paredes exteriores e interiores o cielorrazos.',
    imagen: imgAislante,
  },
  {
    titulo: 'Tornillos y Bulones',
    descripcion: 'autoperforantes, resistentes y en todas las medidas.',
    imagen: imgBulones,
  },
];

const Productos = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <NavBar />
      <BackButton/>

      <div className="productos-container">
        <section className="productos-hero">
          <div className="productos-hero-overlay">
            <h1 data-aos="fade-down">Nuestros Productos</h1>
            <p data-aos="fade-up">Materiales de calidad para cada proyecto</p>
          </div>
        </section>

        <section className="productos-categorias">
          {categorias.map((cat, index) => (
            <div className="producto-card" key={index} data-aos="fade-up">
              <img src={cat.imagen} alt={cat.titulo} className="producto-img" />
              <div className="producto-info">
                <h2>{cat.titulo}</h2>
                <p>{cat.descripcion}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="productos-cta" data-aos="fade-up">
          <p>¿Tenés un proyecto en mente? Visitá nuestro local o escribinos y te ayudamos a elegir lo mejor para vos.</p>
          <a href="/contacto" className="cta-btn">Contactanos</a>
        </section>
      </div>
   
      <Footer />
    </>
  );
};

export default Productos;
