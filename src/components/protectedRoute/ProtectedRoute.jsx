import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../../../contexts/UserAuthContext";


const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();

  console.log("Check user in Private: ", user);
  if (!user) {
    return <Navigate to="/sign-in" />;
  }
  return children;
};

export default ProtectedRoute;