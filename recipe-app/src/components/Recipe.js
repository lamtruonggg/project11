import React from "react";

const recipe = ({ recipe }) => {
    const { label, image, url, ingredients } = recipe.recipe;

  return (
    <div className="all-meal">
      <div className="food-imgage">
        <img className="image" src={image} alt={label} />
      </div>

      <div className="food-name">
        <h3 title={label}>{label}</h3>
      </div>

      <div className="recipe">
        <a className="title" href={url} rel="noopener noreffered">
          Get Complete Recipe
        </a>
      </div>
    </div>
  );
};

export default recipe;
