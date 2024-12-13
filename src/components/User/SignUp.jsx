import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { signUpURL } from "../../assets/URL.js";

export default function SignUp() {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		fullname: "",
		username: "",
		email: "",
		password: "",
	});
	const [otpSent, setOtpSent] = useState(false);
	const [otp, setOtp] = useState("");
	const [serverOtp, setServerOtp] = useState("");
	const [isVerified, setIsVerified] = useState(false);

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleOtpChange = (e) => {
		setOtp(e.target.value);
	};



	const postData = async () => {
		try {
			const response = await axios.post(signUpURL, formData);
			// console.log("User registered successfully:", response.data);
			// alert("User registered successfully!");
			navigate("../signin");
		} catch (error) {
			alert("Error registering user.");
			// console.error(error);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		postData();
	};

	return (
		<div className="flex justify-center items-center w-full min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
			<form
				onSubmit={handleSubmit}
				className="w-full max-w-[450px] bg-white p-8 rounded-xl shadow-lg shadow-blue-300/50"
			>
				<h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Sign Up</h2>

				<div className="mb-5">
					<input
						type="text"
						name="fullname"
						value={formData.fullname}
						onChange={handleChange}
						placeholder="Full Name"
						className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
						required
					/>
				</div>
				<div className="mb-5">
					<input
						type="text"
						name="username"
						value={formData.username}
						onChange={handleChange}
						placeholder="Username"
						className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
						required
					/>
				</div>
				<div className="mb-5">
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						placeholder="Email"
						className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
						required
					/>
				</div>
				<div className="mb-6">
					<input
						type="password"
						name="password"
						minLength={8}
						maxLength={16}
						value={formData.password}
						onChange={handleChange}
						placeholder="Password"
						className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
						required
					/>
				</div>

				{/* OTP Verification Section */}
				{otpSent && (
					<div className="mb-6">
						<input
							type="text"
							value={otp}
							onChange={handleOtpChange}
							placeholder="Enter OTP"
							className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
							required
						/>
						<button
							type="button"
							onClick={verifyOtp}
							className="w-full bg-green-600 text-white py-2 rounded-lg shadow-md hover:bg-green-700 mt-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
						>
							Verify OTP
						</button>
					</div>
				)}

				<button
					type="submit"
					className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
				>
					Register
					{/* {otpSent ? (isVerified ? "Register" : "Verify Email") : "Send OTP"} */}
				</button>

				<p className="text-center text-gray-600 mt-4">
					Already have an account?{" "}
					<Link to="/signin" className="text-blue-600 font-semibold hover:underline">
						Sign In
					</Link>
				</p>
			</form>
		</div>
	);
}
