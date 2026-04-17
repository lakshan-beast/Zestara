import React from "react";

function CategoryCard({ image, title }) {
  return (
    <div className="category-card">
      <img src={image} alt={title} className="category-card__img" />

      <div className="category-card__overlay">
        <h3>{title}</h3>
        <span>Explore Now</span>
      </div>
    </div>
  );
}

export default CategoryCard;
