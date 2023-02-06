import React, { Fragment } from "react";
import { Navigate } from "react-router-dom";

// 1. DashBoard protected Route
const ProtectedRoute = ({ component: Component, ...props }) => {

  return (
    sessionStorage.getItem("token") ? <Fragment> <Component {...props} /> </Fragment> : <Navigate to="/login" />
  );
};

export default ProtectedRoute;
