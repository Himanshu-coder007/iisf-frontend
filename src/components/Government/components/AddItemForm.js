import React, { useState } from "react";

const AddItemForm = ({ title, addItem, isMilletPricing, addWithImage }) => {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isMilletPricing && image) {
      addWithImage(name, details, image);
    } else {
      addItem({ name, details });
    }
    setName("");
    setDetails("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Millet Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded"
        required
      />
      <textarea
        placeholder="Market Location Details and Pricing"
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        className="border p-2 rounded"
        required
      />
      {isMilletPricing && (
        <input
          type="text"
          placeholder="Market Location URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="border p-2 rounded"
        />
      )}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-all"
      >
        {title}
      </button>
    </form>
  );
};

export default AddItemForm;
