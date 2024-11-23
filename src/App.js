import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute"; // Import the PrivateRoute component
import Dashboard from "./components/Shared/Dashboard";
import Login from "./components/Shared/Login";
import Signup from "./components/Shared/Signup";
import Admin from "./components/Admin/Dashboard";
import Agronomists from "./components/Agronomists/Dashboard";
import Farmer from "./components/Farmer/Dashboard";
import Government from "./components/Government/Dashboard";
import Nutritionist from "./components/Nutritionist/Dashboard";
import User from "./components/User/Dashboard";
import Forbidden from "./components/Forbidden"; // Page to show when access is denied

const App = () => {
  

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protecting routes */}
        <Route
          path="/admin"
          element={
            <PrivateRoute element={<Admin />} allowedRoles={["admin"]} />
          }
        />
        <Route
          path="/agronomists"
          element={
            <PrivateRoute
              element={<Agronomists />}
              allowedRoles={["agronomists"]}
            />
          }
        />
        <Route
          path="/farmer"
          element={
            <PrivateRoute element={<Farmer />} allowedRoles={["farmer"]} />
          }
        />
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
