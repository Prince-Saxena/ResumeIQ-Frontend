import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import RESUMEIQ from "/RESUMEIQ1.png";
import { SignedIn ,SignIn,SignedOut,UserButton } from "@clerk/clerk-react";

export default function NavBar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="bg-transparent bg-opacity-50 backdrop-blur-md fixed top-0 left-0 w-full shadow-lg z-50 text-center">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="relative flex items-center justify-between h-16">
					{/* Logo on the Left */}
					<div className="flex-shrink-0 mr-8">
						<NavLink to="/">
							<img src={RESUMEIQ} alt="Logo" className="w-12 h-10" />
						</NavLink>
					</div>

					{/* Mobile menu button */}
					<div className="sm:hidden">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="inline-flex items-center justify-center p-2 rounded-md text-blue-600 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-400"
						>
							<span className="sr-only">Open main menu</span>
							{!isOpen ? (
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
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							)}
						</button>
					</div>

					{/* Links on the Right */}
					<div className="hidden sm:block sm:ml-auto">
						<div className="flex space-x-4">
							<NavLink
								to="/"
								className={({ isActive }) =>
									`text-blue-600 ${
										isActive
											? "border-b-2 border-blue-500"
											: "hover:text-blue-950"
									} px-3 py-2 text-sm font-medium`
								}
							>
								Home
							</NavLink>
							<NavLink
								to="/about"
								className={({ isActive }) =>
									`text-blue-600 ${
										isActive
											? "border-b-2 border-blue-500"
											: "hover:text-blue-950"
									} px-3 py-2 text-sm font-medium`
								}
							>
								About
							</NavLink>
							<NavLink
								to="/services"
								className={({ isActive }) =>
									`text-blue-600 ${
										isActive
											? "border-b-2 border-blue-500"
											: "hover:text-blue-950"
									} px-3 py-2 text-sm font-medium`
								}
							>
								Services
							</NavLink>
							<NavLink
								to="/contact"
								className={({ isActive }) =>
									`text-blue-600 ${
										isActive
											? "border-b-2 border-blue-500"
											: "hover:text-blue-950"
									} px-3 py-2 text-sm font-medium`
								}
							>
								Contact
							</NavLink>
						</div>
						{/* <UserButton></UserButton>
						<SignedIn></SignedIn> */}
						{/* <SignedIn>
							<p className="text-blue-600">Welcome, user!</p>
						</SignedIn>
						<SignedOut>
							<SignIn />
						</SignedOut> */}
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="sm:hidden">
					<div className="px-2 pt-2 pb-3 space-y-1">
						<NavLink
							to="/"
							className="block px-3 py-2 rounded-md text-base font-medium text-blue-600 hover:bg-blue-100"
							onClick={() => setIsOpen(false)}
						>
							Home
						</NavLink>
						<NavLink
							to="/about"
							className="block px-3 py-2 rounded-md text-base font-medium text-blue-600 hover:bg-blue-100"
							onClick={() => setIsOpen(false)}
						>
							About
						</NavLink>
						<NavLink
							to="/services"
							className="block px-3 py-2 rounded-md text-base font-medium text-blue-600 hover:bg-blue-100"
							onClick={() => setIsOpen(false)}
						>
							Services
						</NavLink>
						<NavLink
							to="/contact"
							className="block px-3 py-2 rounded-md text-base font-medium text-blue-600 hover:bg-blue-100"
							onClick={() => setIsOpen(false)}
						>
							Contact
						</NavLink>
					</div>
				</div>
			)}
		</nav>
	);
}
