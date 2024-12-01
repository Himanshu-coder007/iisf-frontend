import React from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);



const Home = () => {
  // Data for Recent Users (Line Chart)
  const recentUsersData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Recent Users",
        data: [120, 200, 150, 220, 300, 250, 400],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  // Data for Recipe Likes (Bar Chart)
  const recipeLikesData = {
    labels: ["Khichdi", "Ragi Dosa", "Jowar  Roti", "Bajra Upma", "Millet Pulao"],
    datasets: [
      {
        label: "Recipe Likes",
        data: [40, 55, 70, 60, 80],
        backgroundColor: "rgba(153, 102, 255, 0.6)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  const milletData = [
    { state: "Andhra Pradesh", collection: 180 },
    { state: "Arunachal Pradesh", collection: 50 },
    { state: "Assam", collection: 90 },
    { state: "Bihar", collection: 120 },
    { state: "Chhattisgarh", collection: 220 },
    { state: "Goa", collection: 40 },
    { state: "Gujarat", collection: 250 },
    { state: "Haryana", collection: 130 },
    { state: "Himachal Pradesh", collection: 80 },
    { state: "Jharkhand", collection: 150 },
    { state: "Karnataka", collection: 350 },
    { state: "Kerala", collection: 70 },
    { state: "Madhya Pradesh", collection: 400 },
    { state: "Maharashtra", collection: 450 },
    { state: "Manipur", collection: 60 },
    { state: "Meghalaya", collection: 55 },
    { state: "Mizoram", collection: 30 },
    { state: "Nagaland", collection: 45 },
    { state: "Odisha", collection: 200 },
    { state: "Punjab", collection: 150 },
    { state: "Rajasthan", collection: 500 },
    { state: "Sikkim", collection: 20 },
    { state: "Tamil Nadu", collection: 200 },
    { state: "Telangana", collection: 180 },
    { state: "Tripura", collection: 50 },
    { state: "Uttar Pradesh", collection: 300 },
    { state: "Uttarakhand", collection: 90 },
    { state: "West Bengal", collection: 110 },
  ];

  // Define colors based on collection range
  const getColor = (collection) => {
    if (collection > 400) return "bg-red-500";
    if (collection > 300) return "bg-orange-500";
    if (collection > 200) return "bg-yellow-500";
    return "bg-green-500";
  };
  
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col">
      {/* Main Section */}
      <main className="flex-1 mt-16 px-6 py-4">
        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-indigo-600 text-white rounded-lg shadow-lg p-4 flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">60.5k</h2>
              <p className="text-sm">Recipes Views</p>
            </div>
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(31).png"
              alt="Views Icon"
              className="h-12"
            />
          </div>
          <div className="bg-purple-600 text-white rounded-lg shadow-lg p-4 flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">150</h2>
              <p className="text-sm">Likes</p>
            </div>
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20221210185030/14.png"
              alt="Likes Icon"
              className="h-12"
            />
          </div>
          <div className="bg-indigo-600 text-white rounded-lg shadow-lg p-4 flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">320</h2>
              <p className="text-sm">Comments</p>
            </div>
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20221210184645/Untitled-design-(32).png"
              alt="Comments Icon"
              className="h-12"
            />
          </div>
          <div className="bg-purple-600 text-white rounded-lg shadow-lg p-4 flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">70</h2>
              <p className="text-sm">Published</p>
            </div>
            <img
              src="https://media.geeksforgeeks.org/wp-content/uploads/20221210185029/13.png"
              alt="Published Icon"
              className="h-12"
            />
          </div>
        </div>

        {/* Recipes Table */}
        <div className="mt-10 bg-white rounded-lg shadow-lg">
          <div className="flex justify-between items-center px-6 py-4 border-b">
            <h1 className="text-xl font-bold text-purple-700">Recipes</h1>
            <button className="bg-purple-700 text-white px-4 py-2 rounded-lg">
              View All
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Views
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Comments
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  { title: "Millet Upma", views: "2.9k", comments: "210", status: "Published" },
                  { title: "Millet Pongal", views: "1.5k", comments: "360", status: "Published" },
                  { title: "Millet Salad", views: "1.1k", comments: "150", status: "Published" },
                ].map((recipe, idx) => (
                  <tr key={idx}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {recipe.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {recipe.views}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {recipe.comments}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {recipe.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Charts Section */}
      <div className="flex flex-row justify-center space-x-8 p-6">
        <div className="w-1/2 h-80">
          <Line data={recentUsersData} options={chartOptions} />
        </div>
        <div className="w-1/2 h-80">
          <Bar data={recipeLikesData} options={chartOptions} />
        </div>
      </div>
      <div className="min-h-screen flex flex-col items-center bg-blue-50 py-10">
      <h1 className="text-3xl font-bold text-purple-700 mb-8">State Wise Mille Consumption - India</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4">
        {milletData.map((item, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-md p-4 text-center ${getColor(
              item.collection
            )} text-white`}
          >
            <h2 className="text-lg font-bold">{item.state}</h2>
            <p className="text-sm">Millet Collection: {item.collection} MT</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
       
      </div>
    </div>
    </div>
  );
};

export default Home;
