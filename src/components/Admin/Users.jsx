import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { USER_API_END_POINT } from '../../utils/constant';

const GetUsers = () => {
  const [users, setUsers] = useState([]);

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${USER_API_END_POINT}/api/v1/user/users`,{
        withCredentials:true
      }); // Replace with your API endpoint
      if (response.data.success) {
        setUsers(response.data.users);
      } else {
        toast.error('Failed to fetch users');
      }
    } catch (error) {
      toast.error('An error occurred while fetching users');
    }
  };

  const handleDelete = async (userId) => {
    try {
      const response = await axios.delete(`/api/v1/users/${userId}`); // Replace with your API endpoint
      if (response.data.success) {
        toast.success('User deleted successfully');
        fetchUsers(); // Refresh the user list
      } else {
        toast.error('Failed to delete user');
      }
    } catch (error) {
      toast.error('An error occurred while deleting the user');
    }
  };

  return (
    <div className="container mx-auto p-4">
      {/* Register Button */}
      <div className="mb-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Manage Users</h1>
        <button
          onClick={() => window.location.href = '/register'} // Navigate to the registration page
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
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Full Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Role
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.fullname}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.role}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleDelete(user.id)}
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
    </div>
  );
};

export default GetUsers;
