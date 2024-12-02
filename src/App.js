import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute"; // Import the PrivateRoute component
import Dashboard from "./components/Shared/Dashboard/pages/Home";
import Login from "./components/Shared/Login";
import Signup from "./components/Shared/Signup";
import Admin from "./components/Admin/Dashboard";
import AdminHome from "./components/Admin/Home"; // Component for /admin/home
import AdminUsers from "./components/Admin/Users"; // Component for /admin/users
import AdminRecipes from "./components/Admin/Recipes"; // Component for /admin/recipes
import Agronomists from "./components/Agronomists/Dashboard";
import Farmer from "./components/Farmer/pages/Dashboard.jsx";
import TrainingSession from "./components/Farmer/components/TrainingSession.jsx";
import Ecommerce from "./components/Farmer/components/Ecommerce.jsx";
import Guidebook from "./components/Farmer/components/Guidebook.jsx";
import Community from "./components/Farmer/components/Community.jsx";
import Government from "./components/Government/components/Dashboard";
import Nutritionist from "./components/Nutritionist/Dashboard";
import User from "./components/User/Dashboard";
import Forbidden from "./components/Forbidden"; // Page to show when access is denied
import Farmerhome from './components/Farmer/components/Home.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protecting routes */}
        <Route
          path="/admin/*"
          element={
            <PrivateRoute element={<Admin />} allowedRoles={["admin"]} />
          }
        >
          {/* Nested Admin Routes */}
          <Route path="home" element={<AdminHome />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="recipes" element={<AdminRecipes />} />
        </Route>

        <Route
          path="/agronomist"
          element={
            <PrivateRoute
              element={<Agronomists />}
              allowedRoles={["agronomist"]}
            />
          }
        />

        <Route
          path="/farmer/*"
          element={
            <PrivateRoute element={<Farmer />} allowedRoles={["farmer"]} />
          }
        >
          {/* Nested Farmer Routes */}
          <Route path="home" element={<Farmerhome />} />
          <Route path="training" element={<TrainingSession />} />
          <Route path="ecommerce" element={<Ecommerce />} />
          <Route path="guidebook" element={<Guidebook />} />
          <Route path="community" element={<Community />} />
        </Route>

        <Route
          path="/government"
          element={
            <PrivateRoute
              element={<Government />}
              allowedRoles={["government"]}
            />
          }
        />
        <Route
          path="/nutritionist"
          element={
            <PrivateRoute
              element={<Nutritionist />}
              allowedRoles={["nutritionist"]}
            />
          }
        />
        <Route
          path="/user"
          element={<PrivateRoute element={<User />} allowedRoles={["user"]} />}
        />

        {/* Public route */}
        <Route path="/" element={<Dashboard />} />

        {/* Forbidden route */}
        <Route path="/forbidden" element={<Forbidden />} />
      </Routes>
    </Router>
  );
};

export default App;
