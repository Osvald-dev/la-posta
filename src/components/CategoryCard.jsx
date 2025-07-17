import React from "react";
import "../styles/Categories.css";
import '../styles/ProductList.css'
const CategoryCard = ({ name, img }) => {
  return (
    <div className="category-card">
      <img src={img} alt={name} className="category-img" />
      <h3 className="category-title">{name}</h3>
    </div>
  );
};

export default CategoryCard;
