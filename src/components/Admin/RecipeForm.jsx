import React, { useState } from 'react';
import axios from 'axios';

const RecipeForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    description: '',
  });

  const [status, setStatus] = useState(null); // To display success/error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Map frontend fields to backend fields
      const payload = {
        recipeName: formData.title, // Map `title` to `recipeName`
        imageUrl: formData.image,  // Map `image` to `imageUrl`
        description: formData.description,
      };
  
      const response = await axios.post(
        'http://localhost:8081/api/v1/recipe/addrecipes',
        payload,
        {
          withCredentials: true, // Include credentials (cookies),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setStatus({ type: 'success', message: 'Recipe added successfully!' });
      setFormData({
        title: '',
        image: '',
        description: '',
      }); // Clear the form after submission
      console.log(response);
    } catch (error) {
      setStatus({ type: 'error', message: error.response?.data?.message || 'Failed to add recipe.' });
    }
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Recipe Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            rows="3"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Add Recipe
        </button>
      </form>

      {status && (
        <div
          className={`mt-4 p-2 rounded-md ${
            status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}
        >
          {status.message}
        </div>
      )}
    </div>
  );
};

export default RecipeForm;
