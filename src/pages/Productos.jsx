import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CategoryCard from "../components/CategoryCard";
import melaminasImg from "../assets/img/melaminas.webp";
import herrajesImg from "../assets/img/herrajes.webp";
import ferreteriaImg from "../assets/img/ferreteria.webp";
import maderasImg from "../assets/img/maderas.webp";
import placasImg from "../assets/img/placas.webp";
import pisosImg from "../assets/img/pisos.webp";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate
import { FaArrowLeft } from "react-icons/fa";
import '../styles/Productos.css'

const categories = [
  { name: "Melaminas", img: melaminasImg },
  { name: "Herrajes", img: herrajesImg },
  { name: "Ferreteria", img: ferreteriaImg },
  { name: "Maderas", img: maderasImg },
  { name: "Placas", img: placasImg },
  { name: "Pisos", img: pisosImg },
];
// const navigate = useNavigate();

const Productos = () => {
  const navigate = useNavigate();
  return (
    <>

      <Navbar />

      <div className="productos-container">
        <h2 className="title">Categorías de Productos</h2>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <Link key={index} to={`/productos/${category.name.toLowerCase()}`}>
              <CategoryCard name={category.name} img={category.img} />
            </Link>
          ))}
        </div>
      </div>
      <button className="back-button" onClick={() => navigate(-1)}>
        <FaArrowLeft className="arrow-icon" /> Volver
      </button>
      <Footer />
    </>
  );
};

export default Productos;
