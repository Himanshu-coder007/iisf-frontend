import React, { useState } from "react";
import AddItemForm from "./AddItemForm";
import Navbar from "./Navbar.js";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("schemes");
  const [schemes, setSchemes] = useState([]);
  const [campaigns, setCampaigns] = useState([]);
  const [subsidies, setSubsidies] = useState([]);
  const [pricing, setPricing] = useState([]);

  const handleUpdate = (list, setList, index, updatedItem) => {
    const updatedList = [...list];
    updatedList[index] = updatedItem;
    setList(updatedList);
  };

  const handleDelete = (list, setList, index) => {
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);
  };

  const renderMilletPricingCards = () => (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Millet Pricing</h2>
      <AddItemForm
        title="Add Millet Pricing"
        addItem={(item) => setPricing([...pricing, item])}
        isMilletPricing={true} // Indicates image upload is required
        addWithImage={(name, details, image) =>
          setPricing([...pricing, { name, details, image }])
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {pricing.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-md p-4 bg-gray-50 hover:shadow-lg transition-all"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-lg font-bold">{item.name}</h3>
            <p className="text-gray-600">{item.details}</p>
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => {
                  const updatedName = prompt("Edit Name", item.name);
                  const updatedDetails = prompt("Edit Details", item.details);
                  const updatedImage = prompt("Edit Image URL", item.image);
                  if (updatedName && updatedDetails && updatedImage) {
                    handleUpdate(pricing, setPricing, index, {
                      name: updatedName,
                      details: updatedDetails,
                      image: updatedImage,
                    });
                  }
                }}
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition-all"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(pricing, setPricing, index)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-all"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTable = (title, data, setData) => (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-bold text-gray-700 mb-4">{title}</h2>
      <AddItemForm
        title={`Add ${title}`}
        addItem={(item) => setData([...data, item])}
      />
      {data.length === 0 ? (
        <p className="text-gray-500 mt-4 text-center">No data available</p>
      ) : (
        <table className="w-full mt-4 border-collapse border border-gray-300 rounded-md overflow-hidden">
          <thead>
            <tr className="bg-gradient-to-r from-blue-500 to-green-400 text-white">
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Details</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">
                  {item.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.details}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => {
                      const updatedName = prompt("Edit Name", item.name);
                      const updatedDetails = prompt(
                        "Edit Details",
                        item.details
                      );
                      if (updatedName && updatedDetails) {
                        handleUpdate(data, setData, index, {
                          name: updatedName,
                          details: updatedDetails,
                        });
                      }
                    }}
                    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition-all mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(data, setData, index)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-all"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );

  return (
    <div>
      <Navbar setActiveTab={setActiveTab} />
      <div className="p-6 space-y-6">
        {activeTab === "schemes" && renderTable("Schemes", schemes, setSchemes)}
        {activeTab === "campaigns" &&
          renderTable("Campaigns", campaigns, setCampaigns)}
        {activeTab === "subsidies" &&
          renderTable("Subsidies", subsidies, setSubsidies)}
        {activeTab === "pricing" && renderMilletPricingCards()}
      </div>
    </div>
  );
};

export default Dashboard;
