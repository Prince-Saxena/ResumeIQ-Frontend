import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { signInURL} from "../../assets/URL";

export default function SignIn() {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		identifier: "",
		password: "",
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(signInURL, formData, {
				headers: { "Content-Type": "application/json" },
				withCredentials: true,
			});
			navigate("../dashboard");
		} catch (error) {
			if (error === "Incorrect Password!") alert("Invaild Credentials!");
			console.log(error);
			
			// alert("Error while SignIn process!");
			// console.error("Error Response:", error.response?.data || error.message);
		}
	};

	return (
		<div className="flex justify-center items-center w-full min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
			<form
				onSubmit={handleSubmit}
				className="w-full max-w-[450px] bg-white p-8 rounded-xl shadow-lg shadow-blue-300/50"
			>
				<h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">Sign In</h2>

				<div className="mb-4">
					<input
						type="text"
						name="identifier"
						onChange={handleChange}
						placeholder="Username or Email"
						className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
						required
						autoComplete="username" // Add autocomplete for username/email
					/>
				</div>

				<div className="mb-6">
					<input
						type="password"
						name="password"
						onChange={handleChange}
						placeholder="Password"
						className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
						required
						autoComplete="current-password" // Add autocomplete for password
					/>
				</div>

				<button
					type="submit"
					className="w-full bg-blue-600 text-white py-2 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
				>
					Sign In
				</button>
				<p className="text-center text-sm text-gray-600 mt-4">
					Didn't have account?{" "}
					<Link
						to="/signup"
						className="text-blue-600 hover:underline focus:outline-none focus:ring-1 focus:ring-blue-400"
					>
						Sign Up
					</Link>
				</p>
			</form>
		</div>
	);
}
