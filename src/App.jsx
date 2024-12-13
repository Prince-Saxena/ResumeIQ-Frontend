import React, { useEffect, useState } from "react";
import Nav from "./components/main-page/Nav";
import { Outlet } from "react-router-dom";
import { StyleProvider } from "./context/StyleContext";
import { UserProvider, useUser } from "./context/UserContext.jsx";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

import "./App.css";

function App() {
	const { user, setUser } = useUser();
	const [loading, setLoading] = useState(true); // Start with loading as true

	useEffect(() => {
		// Only run if there is a token
		if (Cookies.get("accessToken")) {
			setLoading(true); // Ensure loading is true when token exists
		} else {
			setLoading(false); // If no token, immediately set loading to false
		}
	}, []); // This effect only runs once when the component mounts

	useEffect(() => {
		const token = Cookies.get("accessToken");

		if (token) {
			try {
				const decodedToken = jwtDecode(token);

				if (decodedToken && decodedToken.username) {
					setUser({
						_id: decodedToken._id,
						username: decodedToken.username,
						fullname: decodedToken.fullname,
					});
					setLoading(false); // Set loading to false after user is set
				} else {
					console.warn("Invalid JWT token");
					setLoading(false); // Set loading to false if the token is invalid
				}
			} catch (error) {
				console.error("Error decoding JWT:", error);
				setLoading(false); // Set loading to false on error
			}
		} else {
			setLoading(false); // No token, set loading to false
		}
	}, [setUser]); // This effect only runs when setUser is called

	return (
		<>
			<StyleProvider>
				{/* Pass user object to Nav */}
				<Nav />
				<div className="flex items-center justify-center ">
					{loading ? (
						<div className="w-full h-screen text-3xl text-center justify-center items-center">
							Loading...
						</div>
					) : (
						<Outlet />
					)}
				</div>
			</StyleProvider>
		</>
	);
}

export default App;
