import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faL, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import RESUMEIQ from "/RESUMEIQ1.png";
import axios from "axios";
import { useUser } from "../../context/UserContext";
import { logOutURL } from "../../assets/URL";

export default function NavBar() {
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);
	const [showDropdown, setShowDropdown] = useState(false);
	const { user, setUser } = useUser();
	const dropdownRef = useRef(null);

	const toggleDropdown = () => setShowDropdown((prev) => !prev);

	const toDash = () => {
		navigate("../dashboard");
	};

	const logout = async (e) => {
		setShowDropdown(false)
		e?.preventDefault();
		try {
			const response = await axios.post(
				logOutURL,
				{},
				{ withCredentials: true }
			);
			if (response.status === 200) {
				navigate("../..");
				alert("Logged out successfully!");
				setUser(null);
				localStorage.clear();
			} else {
				alert("Logout failed. Please try again.");
			}
		} catch (error) {
			alert("Error while logging out!");
			console.error("Error Response:", error.response?.data || error.message);
		}
	};

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setShowDropdown(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	return (
		<nav className="bg-transparent bg-opacity-50 backdrop-blur-md fixed top-0 left-0 w-full shadow-lg z-50 text-center">
			<div className="max-w-7xl w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
				<div className="relative flex items-center justify-between h-16">
					{/* Logo */}
					<div className="flex-shrink-0 mr-8">
						<NavLink to="/">
							<img src={RESUMEIQ} alt="Logo" className="w-12 h-10" />
						</NavLink>
					</div>

					{/* Mobile Menu Button */}
					<div className="sm:hidden flex justify-start">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="inline-flex items-center justify-center p-2 rounded-md text-blue-600 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-400"
						>
							<span className="sr-only">Open main menu</span>
							{isOpen ? (
								<svg
									className="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							) : (
								<svg
									className="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16m-7 6h7"
									/>
								</svg>
							)}
						</button>{" "}
						{/* Profile Icon */}
						{user?.fullname && (
							<button
								className="flex items-center px-4 py-2 bg-transparent text-blue-700 rounded-lg "
								onClick={toggleDropdown}
							>
								<FontAwesomeIcon icon={faUserCircle} className="text-xl" />
							</button>
						)}
						{showDropdown && (
							<div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50">
								<div className="px-4 py-2">
									<p className="text-gray-700 font-bold inline">
										{user.fullname}
									</p>
									<button
										className="float-right text-red-950 border-2 rounded-[50%] w-7"
										onClick={() => setShowDropdown(false)}
									>
										&times;
									</button>
									<p className="text-gray-600 text-sm">@{user.username}</p>
								</div>
								<div className="flex flex-col items-center text-xs">
									<button
										onClick={toDash}
										className="block w-1/2 mb-2  py-2 rounded-md text-white bg-green-700"
									>
										Dashboard
									</button>
									<button
										onClick={logout}
										className="block w-1/2 text-center px-4 py-2 rounded-md text-white bg-red-700"
									>
										Logout
									</button>
								</div>
							</div>
						)}
					</div>

					{/* Links */}
					<div className="hidden sm:flex items-center w-full">
						<div className="flex space-x-5">
							{["Home", "About", "Services", "Contact"].map((link) => {
								const targetLink = link === "Home" ? "" : link.toLowerCase();
								return (
									<NavLink
										key={targetLink}
										to={`/${targetLink}`}
										className={({ isActive }) =>
											`text-blue-600 ${
												isActive
													? "border-b-2 border-blue-500"
													: "hover:text-blue-950"
											} px-3 py-2 text-sm font-medium`
										}
									>
										{link}
									</NavLink>
								);
							})}
						</div>

						{/* Profile Section */}
						{user?.fullname ? (
							<div className="ml-auto relative" ref={dropdownRef}>
								<button
									className="flex items-center space-x-2 px-4 py-2bg-transparent text-blue-700 rounded-lg "
									onClick={toggleDropdown}
								>
									<FontAwesomeIcon icon={faUserCircle} className="text-4xl" />
								</button>
								{showDropdown && (
									<div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50">
										<div className="px-4 py-2">
											<p className="text-gray-700 font-bold inline">
												{user.fullname}
											</p>
											<button
												className="float-right text-red-950 border-2 rounded-[50%] w-7"
												onClick={() => setShowDropdown(false)}
											>
												&times;
											</button>
											<p className="text-gray-600 text-sm">
												@{user.username}
											</p>
										</div>
										<div className="flex justify-evenly text-xs">
											<button
												onClick={toDash}
												className="block w-2/5 py-2 rounded-md text-white bg-green-700"
											>
												Dashboard
											</button>
											<button
												onClick={logout}
												className="block w-2/5 text-center px-4 py-2 rounded-md text-white bg-red-700"
											>
												Logout
											</button>
										</div>
									</div>
								)}
							</div>
						) : (
							<NavLink
								className="ml-auto px-6 py-2 text-sm bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700"
								to="/signup"
							>
								SignUp
							</NavLink>
						)}
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="sm:hidden">
					<div className="flex items-center justify-between px-4 pt-2 pb-3 space-x-2">
						{/* Hamburger Menu Button */}
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="inline-flex items-center justify-center p-2 rounded-md text-blue-600 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-400"
						>
							<span className="sr-only">Open main menu</span>
							{isOpen ? (
								<svg
									className="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							) : (
								<svg
									className="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16m-7 6h7"
									/>
								</svg>
							)}
						</button>
					</div>
					<div className="space-y-2 px-4 py-2 text-center">
						{["Home", "About", "Services", "Contact"].map((link) => {
							const targetLink = link === "Home" ? "" : link.toLowerCase();
							return (
								<NavLink
									key={targetLink}
									to={`/${targetLink}`}
									className={({ isActive }) =>
										`block text-lg py-2 text-blue-600 ${
											isActive ? "font-semibold" : "hover:text-blue-700"
										}`
									}
								>
									{link}
								</NavLink>
							);
						})}
					</div>
				</div>
			)}
		</nav>
	);
}
