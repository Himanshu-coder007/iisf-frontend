import React from 'react';
import { useParams } from 'react-router-dom';

const ViewRecipe = () => {
  const { id } = useParams();

  // Dummy recipe data for illustration (you can fetch from a backend)
  const recipes = [
    { id: 1, title: 'Millet Pancakes', imageUrl: 'path_to_millet_pancakes_image.jpg', description: 'A delicious millet pancake recipe.' },
    { id: 2, title: 'Millet Salad', imageUrl: 'path_to_millet_salad_image.jpg', description: 'A fresh and healthy millet salad.' },
    { id: 3, title: 'Millet Khichdi', imageUrl: 'path_to_millet_khichdi_image.jpg', description: 'A savory millet khichdi recipe.' },
  ];

  const recipe = recipes.find((recipe) => recipe.id === parseInt(id));

  return (
    <div className="container my-5">
      <h1 className="text-center">{recipe?.title}</h1>
      <div className="text-center mb-4">
        <img src={recipe?.imageUrl} alt={recipe?.title} className="img-fluid" style={{ maxWidth: '500px' }} />
      </div>
      <p>{recipe?.description}</p>
    </div>
  );
};

export default ViewRecipe;