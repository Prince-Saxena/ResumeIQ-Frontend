import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({ children }) => {
	const isLoggedIn = !!Cookies.get("accessToken");

	return isLoggedIn ? children : <Navigate to="/signin" />;
};

export default ProtectedRoute;
