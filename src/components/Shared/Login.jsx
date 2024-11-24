import React, { useState } from "react";
import Navbar from "./NavBar.jsx";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { USER_API_END_POINT } from "../../utils/constant.js";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "../../redux/authSlice.js";
import { Loader2 } from "lucide-react";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const { loading } = useSelector((store) => store.auth); // Get user data from store
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(res.data.user)); // Update user and set isAuthenticated to true
        
        // Navigate based on user role
        const userRole = res.data.user.role;
        switch (userRole) {
          case "admin":
            navigate("/admin");
            break;
          case "agronomist":
            navigate("/agronomist");
            break;
          case "farmer":
            navigate("/farmer");
            break;
          case "government":
            navigate("/government");
            break;
          case "nutritionist":
            navigate("/nutritionist");
            break;
          case "user":
            navigate("/user");
            break;
          default:
            toast.error("Invalid role");
        }
  
        toast.success(res.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "An error occurred");
    } finally {
      dispatch(setLoading(false));
    }
  };
  

  return (
    <div>
      <Navbar />
      <ToastContainer />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-full sm:w-2/3 md:w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5 text-center">Login</h1>

          <div className="my-2">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              placeholder="email@gmail.com"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="my-2">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
              placeholder="password"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          {loading ? (
            <button
              type="button"
              className="w-full my-4 flex items-center justify-center px-4 py-2 bg-gray-500 text-white rounded-md"
              disabled
            >
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please Wait
            </button>
          ) : (
            <button
              type="submit"
              className="w-full my-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Login
            </button>
          )}

          <span className="text-sm">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600">
              Signup
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
