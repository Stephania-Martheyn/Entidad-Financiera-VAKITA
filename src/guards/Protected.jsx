import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Protected = ({ isLogged }) => {
  if (isLogged) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};

export default Protected;