import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddRecipe = () => {
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // You would typically submit this to a server or save it locally
    console.log({ recipeName, ingredients, instructions });
    // Redirect to the recipe list page
    navigate('/recipes');
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Add New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="recipeName">Recipe Name</label>
          <input
            type="text"
            id="recipeName"
            className="form-control"
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="ingredients">Ingredients</label>
          <textarea
            id="ingredients"
            className="form-control"
            rows="4"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="instructions">Instructions</label>
          <textarea
            id="instructions"
            className="form-control"
            rows="6"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipe;