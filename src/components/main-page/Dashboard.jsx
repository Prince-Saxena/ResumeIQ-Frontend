import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ResumeInfoContext } from "../../context/ResumeContext.jsx";
import { useUser } from "../../context/UserContext.jsx";
import Card from "../small-components/Card.jsx";
import { getURL } from "../../assets/URL.js";

const Dashboard = () => {
	const { formData, setFormData } = useContext(ResumeInfoContext);
	const { user } = useUser();
	const [isOpen, setIsOpen] = useState(false);
	const [resumes, setResumes] = useState([]);
	const navigate = useNavigate();

	// Fetch resumes from backend
	const fetchResumes = async () => {
		try {
			const response = await axios.get(getURL, {
				params: {
					userId: user._id, 
				},
			});
			// console.log(response, "skjn");

			if (response.status === 200) {
				// console.log(response.data.data.publicIdArray);

				setResumes(response.data.data.publicIdArray || []);
			} else {
				// console.error("Unexpected response status");
			}
		} catch (error) {
			// console.error("Error fetching resumes:", error.message);
			window.location.reload();
		}
	};

	useEffect(() => {
		fetchResumes();
	}, [user]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsOpen(false);
		navigate("../user-input/personal");
	};

	return (
		<>
			<div className="fixed inset-0 font-serif flex justify-center items-center text-7xl bg-gradient-to-r from-purple-100 via-indigo-200 to-blue-300 text-gray-500 -z-10 opacity-50 pointer-events-none">
				ResumeIQ
			</div>
			{/* Modal for adding a new resume */}
			{isOpen && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
					<div className="w-full max-w-md p-6 bg-white rounded shadow-lg">
						<h2 className="mb-4 text-xl font-semibold text-gray-700">Enter Job Role</h2>
						<form onSubmit={handleSubmit}>
							<div className="mb-4">
								<label
									htmlFor="jobRole"
									className="block mb-2 text-sm font-medium text-gray-600"
								>
									Job Role
								</label>
								<input
									type="text"
									name="title"
									placeholder="Enter job role"
									required
									className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
									onChange={handleChange}
								/>
							</div>
							<div className="flex justify-end">
								<button
									type="button"
									onClick={() => setIsOpen(false)}
									className="px-4 py-2 mr-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
								>
									Cancel
								</button>
								<button
									type="submit"
									className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
								>
									Submit
								</button>
							</div>
						</form>
					</div>
				</div>
			)}

			{/* Main content */}
			<div className="p-4 pt-12 bg-transparent min-h-screen w-full flex justify-center">
				<div className="w-full max-w-7xl h-full py-10 px-6 sm:px-8 lg:px-12">
					<h1 className="text-3xl font-bold mb-6 text-center sm:text-left">My Resumes</h1>

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 lg:gap-20 gap-6">
						{/* Add new resume card */}
						<div
							onClick={() => setIsOpen(true)}
							className="w-60 h-80 bg-white rounded-lg shadow-lg border border-gray-300 overflow-hidden flex justify-center items-center cursor-pointer hover:shadow-xl transition-transform hover:scale-105"
						>
							<span className="text-gray-500 font-medium text-center">
								+ Add New Resume
							</span>
						</div>

						{/* Map over resumes and display them */}
						{resumes &&
							resumes.map((resume, index) => (
								<Card
									title={resume.title || "Can't Get!"}
									publicId={resume.publicId}
									key={index}
								/>
							))}
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
