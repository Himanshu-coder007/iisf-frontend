import React from "react";

const RecipeCard = ({ image, name, onViewClick }) => {
  return (
    <div
      className="card"
      style={{ width: "18rem", margin: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
    >
      <img
        src={image}
        className="card-img-top"
        alt={name}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <button className="btn btn-primary" onClick={onViewClick}>
          View
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;