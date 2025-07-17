import React from "react";
import '../styles/ProductCard.css'
const ProductCard = ({ name, img }) => {
  return (
    <div className="product-card">
      <img src={img} alt={name} loading="lazy" className="product-img" />
      <h3 className="product-title">{name}</h3>
    </div>
  );
};

export default ProductCard;
