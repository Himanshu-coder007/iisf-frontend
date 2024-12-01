import React, { useState } from "react";
import Navbar from "./NavBar.jsx";
import { Link, useNavigate } from "react-router-dom";
import { USER_API_END_POINT } from "../../utils/constant.js";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';  // Import react-toastify
import 'react-toastify/dist/ReactToastify.css';  // Import react-toastify CSS
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../../redux/authSlice.js';
import { Loader2 } from 'lucide-react';

const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    password: "",
    role: "",
  });

  const { loading } = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/api/v1/user/register`, input, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message, { position: "top-right" });  // Ensure the success message is shown
      } else {
        toast.error(res.data.message || "Something went wrong!", { position: "top-right" });
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "An error occurred", { position: "top-right" });
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Sign Up</h1>
          <div className="my-2">
            <label htmlFor="fullname" className="block text-sm">Full Name</label>
            <input
              type="text"
              value={input.fullname}
              name="fullname"
              onChange={changeEventHandler}
              placeholder="Full Name"
              id="fullname"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="my-2">
            <label htmlFor="email" className="block text-sm">Email</label>
            <input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="email@example.com"
              id="email"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="my-2">
            <label htmlFor="password" className="block text-sm">Password</label>
            <input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="Password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Radio Button for Role Selection */}
          <div className="my-4">
            <label className="block text-sm">Role</label>
            <div className="flex items-center gap-6">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="user"
                  name="role"
                  value="user"
                  checked={input.role === "user"}
                  onChange={changeEventHandler}
                  className="mr-2"
                />
                <label htmlFor="user">User</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="farmer"
                  name="role"
                  value="farmer"
                  checked={input.role === "farmer"}
                  onChange={changeEventHandler}
                  className="mr-2"
                />
                <label htmlFor="farmer">Farmer</label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          {loading ? (
            <button className="w-full my-4 p-2 bg-blue-500 text-white rounded-md flex items-center justify-center">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please Wait
            </button>
          ) : (
            <button type="submit" className="w-full my-4 p-2 bg-blue-500 text-white rounded-md">
              Signup
            </button>
          )}

          <span className="text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600">
              Login
            </Link>
          </span>
        </form>
      </div>

      {/* ToastContainer should be outside of the form */}
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={true} closeOnClick pauseOnHover />
    </div>
  );
};

export default Signup;
