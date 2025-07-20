import React from 'react'
import { useNavigate } from "react-router-dom"; // Importamos useNavigate
import { FaArrowLeft } from "react-icons/fa";
import Servicios from '../components/Servicios';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';

function ServiciosPage() {
  const navigate = useNavigate();
  return (
    <>
<Navbar />
      <Servicios />
      <button className="back-button" onClick={() => navigate(-1)}>
        <FaArrowLeft className="arrow-icon" /> Volver
      </button>
      <Footer />
    </>
  )
}


export default ServiciosPage