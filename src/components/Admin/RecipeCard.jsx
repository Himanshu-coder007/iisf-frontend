import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{recipe.title}</h3>
        <p className="text-gray-700 text-sm">{recipe.description}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
