import React from "react";

function ServiceCard({ icon, title, description }) {
  return (
    <div className="service-card">
      <div className="service-card__icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;
