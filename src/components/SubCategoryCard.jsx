import React from "react";
import "../styles/SubCategoryCard.css";

const SubCategoryCard = ({ name, img, onClick }) => {
  return (
    <div 
      className="sub-category-card" 
      onClick={() => {
        console.log("Subcategoría seleccionada:", name); // Verifica que se dispara el evento
        if (onClick) onClick();
      }}
    >
      <img src={img} alt={name} loading="lazy" className="sub-category-image" />
      <h3 className="sub-category-title">{name}</h3>
    </div>
  );
};


export default SubCategoryCard;