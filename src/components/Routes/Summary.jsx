import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook
import { ResumeInfoContext } from "../../context/ResumeContext.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { genAIURL } from "../../assets/URL.js";

function Summary() {
	const [showModal, setShowModal] = useState(false);
	const { formData, setFormData } = useContext(ResumeInfoContext);
	const [data, setData] = useState({
		role: "",
		exp: "",
		additionalInfo: "",
	});
	const [summaries, setSummaries] = useState({
		beginner: "",
		intermediate: "",
		expert: "",
	});
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate(); // Using useNavigate to handle page navigation

	// Handle text area change
	const handleChange = (e) => {
		let value = e.target.value;
		setFormData({ ...formData, summary: value });
	};

	// Fetch summaries from the API
	const fetchSummaries = async () => {
		if (!data.role || !data.exp) {
			alert("Please fill in all fields.");
			return;
		}
		setLoading(true);
		try {
			const response = await axios.post(genAIURL, {
				role: data.role || "Developer",
				exp: data.exp || "Software Engineer",
				additionalInfo: data.additionalInfo,
			});

			// The response data contains the JSON string, so first parse it
			const parsedData = JSON.parse(response.data.data); // Parsing the JSON string inside "data"

			// Now set the summaries
			// console.log(parsedData);
			
			setSummaries({
				beginner: parsedData.beginner,
				intermediate: parsedData.intermediate,
				expert: parsedData.expert,
			});
		} catch (error) {
			console.log("Error generating summaries:", error);
		} finally {
			setLoading(false);
			setShowModal(false); // Close modal after fetching summaries
		}
	};

	// When a summary is clicked, update the formData
	const handleSummaryClick = (summary) => {
		setFormData({ ...formData, summary });
	};

	const handle = () => {
		setShowModal(true);
	};

	return (
		<>
			<div className="w-full 2xl:sticky 2xl:top-16  p-4 pt-0 h-fit">
				<div className="bg-white border-t-4 border-blue-400 shadow-lg min-w-lg rounded-lg p-8">
					<form className="space-y-4">
						<h2 className="text-2xl font-bold text-center mb-4">Summary</h2>
						<textarea
							name="summary"
							value={formData.summary || ""}
							placeholder="Give brief info about yourself"
							required
							className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none h-28 text-justify resize-none"
							onChange={handleChange}
						/>

						{/* Modal for entering additional details */}
						{showModal && (
							<div className="fixed z-10 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
								<div className="bg-white p-8 rounded-lg shadow-lg w-96">
									<h2 className="text-xl font-semibold mb-4">
										Enter Your Details
									</h2>
									<div>
										<div className="mb-4">
											<input
												type="text"
												name="role"
												onChange={(e) =>
													setData({ ...data, role: e.target.value })
												}
												className="w-full px-3 py-2 border rounded"
												placeholder="Your role"
												required
											/>
										</div>

										<div className="mb-4">
											<input
												type="text"
												name="exp"
												onChange={(e) =>
													setData({ ...data, exp: e.target.value })
												}
												className="w-full px-3 py-2 border rounded"
												placeholder="Your Experience"
												required
											/>
										</div>

										<div className="mb-4">
											<input
												type="text"
												name="additionalInfo"
												onChange={(e) =>
													setData({
														...data,
														additionalInfo: e.target.value,
													})
												}
												className="w-full px-3 py-2 border rounded"
												placeholder="Additional Info"
												required
											/>
										</div>

										<div className="flex justify-end gap-4">
											<button
												type="button"
												className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
												onClick={() => setShowModal(false)}
											>
												Cancel
											</button>
											<button
												type="button"
												className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
												onClick={fetchSummaries}
											>
												Generate
											</button>
										</div>
									</div>
								</div>
							</div>
						)}

						{/* Button for generating summaries using AI */}
						<div className="flex justify-between items-center mt-6 px-4">
							<div className="flex items-center w-full relative">
								<div className="flex items-center w-full h-11 border-2 border-dashed border-blue-500 rounded-full md:w-1/3 justify-start min-w-[140px] sm:w-1/2 max-w-[160px] mr-2">
									<button
										className="text-sm w-full h-full flex items-center justify-center text-blue-500"
										onClick={handle}
										disabled={loading}
									>
										<FontAwesomeIcon icon={faBrain} className="mr-2 text-xs" />
										{loading ? "Generating..." : "Generate By AI"}
									</button>
								</div>
							</div>

							{/* Navigation buttons */}
							<div className="flex items-center justify-end gap-2">
								<button
									onClick={() => navigate("../personal")}
									className="px-4 py-2 h-12 bg-gray-500 focus:outline-none text-white text-lg rounded hover:bg-gray-600 flex items-center justify-center"
								>
									Prev
								</button>
								<button
									onClick={() => navigate("../education")}
									className="px-4 py-2 h-12 bg-blue-500 text-white text-lg rounded hover:bg-blue-600 flex items-center justify-center"
								>
									Next
								</button>
							</div>
						</div>
					</form>
				</div>

				{/* Display generated summaries */}
				{(summaries.beginner || summaries.intermediate || summaries.expert) && (
					<div className="mt-8 text-justify">
						<h3 className="text-xl font-semibold mb-6">Generated Summaries</h3>

						{/* Beginner Summary */}
						{summaries.beginner && (
							<div
								className="cursor-pointer p-4 border rounded-lg mb-4 hover:bg-gray-100"
								onClick={() => handleSummaryClick(summaries.beginner)}
							>
								<h4 className="text-lg font-bold text-blue-600">
									Beginner Summary
								</h4>
								<p className="text-gray-700">{summaries.beginner}</p>
							</div>
						)}

						{/* Intermediate Summary */}
						{summaries.intermediate && (
							<div
								className="cursor-pointer p-4 border rounded-lg mb-4 hover:bg-gray-100"
								onClick={() => handleSummaryClick(summaries.intermediate)}
							>
								<h4 className="text-lg font-bold text-yellow-600">
									Intermediate Summary
								</h4>
								<p className="text-gray-700">{summaries.intermediate}</p>
							</div>
						)}

						{/* Expert Summary */}
						{summaries.expert && (
							<div
								className="cursor-pointer p-4 border rounded-lg hover:bg-gray-100"
								onClick={() => handleSummaryClick(summaries.expert)}
							>
								<h4 className="text-lg font-bold text-red-900">Expert Summary</h4>
								<p className="text-gray-700">{summaries.expert}</p>
							</div>
						)}

						{/* Fallback if no summaries are available */}
						{!summaries.beginner && !summaries.intermediate && !summaries.expert && (
							<p className="text-gray-500 mt-4">No summaries available</p>
						)}
					</div>
				)}
			</div>
		</>
	);
}

export default Summary;
