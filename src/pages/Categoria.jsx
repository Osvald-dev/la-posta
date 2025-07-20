import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Importamos useNavigate
import SubCategoryCard from "../components/SubCategoryCard.jsx";
import Modal from "../components/Modal";
import Footer from '../components/Footer.jsx';
import productsData from "../data/productsData";
import Navbar from "../components/Navbar.jsx";
import { FaArrowLeft } from "react-icons/fa"; // Importamos el ícono de flecha
import "../styles/Categories.css"; // Asegúrate de importar los estilos

const Categoria = () => {
  const { categoria } = useParams();
  const navigate = useNavigate(); // Hook para navegar atrás
  const categoryData = productsData[categoria];

  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  if (!categoryData) {
    return <p className="error-message">No hay productos disponibles</p>;
  }

  return (
    <>
    <Navbar />

      <div className="categoria-container">
        {/* Botón de volver atrás */}


        <h2 className="title">{categoryData.title}</h2>
        <div className="sub-category-container">

          {categoryData.subcategories.map((sub, index) => (

            <SubCategoryCard
              key={index}
              name={sub.name}
              img={sub.img}
              onClick={() => setSelectedSubcategory(sub)}
            />


          ))}

        </div>

        {selectedSubcategory && (
          <Modal
            product={selectedSubcategory}
            categoria={categoryData.title} // Pasamos el título de la categoría actual
            onClose={() => setSelectedSubcategory(null)}
          />
        )}


      </div>
      <button className="back-button" onClick={() => navigate(-1)}>
        <FaArrowLeft className="arrow-icon" /> Volver
      </button>
      <Footer />
    </>
  );
};

export default Categoria;
