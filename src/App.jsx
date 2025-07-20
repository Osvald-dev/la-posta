import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contacto from "./pages/Contacto.jsx";
import Home from "./pages/Home.jsx";
import Productos from "./pages/Productos.jsx";
import Nosotros from "./pages/Nosotros.jsx";
import ServiciosPage from "./pages/Servicios.jsx";
import Categoria from "./pages/Categoria.jsx";
import WhatsAppButton from "./components/WhatsappButton.jsx";

const App = () => {
  return (
    <div className="global-container">

      <BrowserRouter>  {/* Usa HashRouter en vez de BrowserRouter */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/:categoria" element={<Categoria />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<ServiciosPage />} />
        </Routes>
        <div className="whatsapp-container">
          <WhatsAppButton />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
