import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux"; // Assuming you're using Redux for state management

const PrivateRoute = ({ element, allowedRoles }) => {
  const { user, isAuthenticated } = useSelector((store) => store.auth); // Get user and auth status from the store

  if (!isAuthenticated) {
    // Redirect to login if user is not authenticated
    return <Navigate to="/login" />;
  }

  if (allowedRoles && !allowedRoles.includes(user?.role)) {
    // Redirect to a forbidden page if user does not have the required role
    return <Navigate to="/forbidden" />;
  }

  return element; // Allow access to the element if authenticated and role is allowed
};

export default PrivateRoute;
