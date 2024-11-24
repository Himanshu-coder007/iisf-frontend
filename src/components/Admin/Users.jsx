import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Modal from "./Modal"; // Import Modal component
import "react-toastify/dist/ReactToastify.css";
import { USER_API_END_POINT } from "../../utils/constant";

const GetUsers = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false); // State to toggle modal visibility
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    role: "", // Default role will be empty
  });

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        `${USER_API_END_POINT}/api/v1/user/users`,
        {
          withCredentials: true,
        }
      );
      if (response.data.success) {
        setUsers(response.data.users);
      } else {
        toast.error("Failed to fetch users");
      }
    } catch (error) {
      toast.error("An error occurred while fetching users");
    }
  };

  const handleDelete = async (userId) => {
    try {
      const response = await axios.delete(
        `${USER_API_END_POINT}/api/v1/user/users/${userId}`,
        {
          withCredentials: true,
        }
      );
      if (response.data.success) {
        toast.success("User deleted successfully");
        fetchUsers(); // Refresh the user list
      } else {
        toast.error("Failed to delete user");
      }
    } catch (error) {
      toast.error("An error occurred while deleting the user");
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${USER_API_END_POINT}/api/v1/user/register`,
        formData,
        {
          withCredentials: true,
        }
      );

      if (response.data.success) {
        toast.success("User registered successfully");
        setShowModal(false);
        setFormData({
          fullname: "",
          email: "",
          password: "",
          role: "",
        }); // Close modal after successful registration
        fetchUsers(); // Refresh the user list
      } else {
        toast.error(response.data.message || "Registration failed");
      }
    } catch (error) {
      toast.error("An error occurred during registration");
    }
  };

  return (
    <div className="container mx-auto p-4">
      {/* Register Button */}
      <div className="mb-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Manage Users</h1>
        <button
          onClick={() => setShowModal(true)} // Open modal when clicking "Register User"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Register User
        </button>
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 bg-white shadow-md rounded-md">
          <thead className="bg-gray-100">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Full Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Role
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user?._id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {user.fullname}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.role}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleDelete(user?._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                  >
                    Delete User
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Registration Form */}
      <Modal showModal={showModal} closeModal={() => setShowModal(false)}>
        <h2 className="text-xl font-bold mb-4">Register New User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Role
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              required
            >
              <option value="">Select a Role</option>
              <option value="nutritionist">Nutritionist</option>
              <option value="agronomist">Agronomist</option>
              <option value="government">Government</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Register
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default GetUsers;
