import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ResumeInfoContext } from "../../context/ResumeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function Summary() {
	const [showModal, setShowModal] = useState(false);
	const { formData, setFormData } = useContext(ResumeInfoContext);
	const [summaries, setSummaries] = useState({
		beginner: "",
		intermediate: "",
		expert: "",
	});
	const [loading, setLoading] = useState(false);

	// Handle text area change
	const handleChange = (e) => {
		let value = e.target.value;
		setFormData({ ...formData, summary: value });
	};

	// Fetch summaries from the API
	const fetchSummaries = async () => {
		setLoading(true); // Start loading
		try {
			const response = await axios.post("https://api.gemini.com/generate-summary", {
				// Assuming the API takes some role, profession, and level
				role: formData.role || "Developer",
				profession: formData.profession || "Software Engineer",
			});
			// Assuming the response contains summaries for each level
			setSummaries({
				beginner: response.data.beginner,
				intermediate: response.data.intermediate,
				expert: response.data.expert,
			});
		} catch (error) {
			console.error("Error generating summaries:", error);
		} finally {
			setLoading(false); // Stop loading
		}
	};

	// When a summary is clicked, update the formData
	const handleSummaryClick = (summary) => {
		setFormData({ ...formData, summary });
	};

	const handle = () => {
		setShowModal(true);
	};

	// console.log(formData.firstname);

	return (
		<>
			<div className="w-full 2xl:sticky 2xl:top-16  p-4 pt-0 h-fit">
				<div className="bg-white border-t-4 border-blue-400 shadow-lg min-w-lg rounded-lg p-8">
					<h2 className="text-2xl font-bold text-center mb-4">Summary</h2>
					<textarea
						name="summary"
						// value={formData.summary || ""}
						placeholder="Give brief info about yourself"
						required
						className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
						onChange={handleChange}
					/>

					{/* Display summaries below the form */}
					{(summaries.beginner || summaries.intermediate || summaries.expert) && (
						<div className="mt-8">
							<h3 className="text-lg font-semibold mb-4">Generated Summaries</h3>
							{/* Beginner Summary */}
							<div
								className="cursor-pointer p-3 border rounded mb-2"
								onClick={() => handleSummaryClick(summaries.beginner)}
							>
								<h4 className="font-bold">Beginner Summary</h4>
								<p>{summaries.beginner || "No summary available"}</p>
							</div>

							{/* Intermediate Summary */}
							<div
								className="cursor-pointer p-3 border rounded mb-2"
								onClick={() => handleSummaryClick(summaries.intermediate)}
							>
								<h4 className="font-bold">Intermediate Summary</h4>
								<p>{summaries.intermediate || "No summary available"}</p>
							</div>

							{/* Expert Summary */}
							<div
								className="cursor-pointer p-3 border rounded"
								onClick={() => handleSummaryClick(summaries.expert)}
							>
								<h4 className="font-bold">Expert Summary</h4>
								<p>{summaries.expert || "No summary available"}</p>
							</div>
						</div>
					)}

					{/* Modal for entering additional details */}
					{showModal && (
						<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
							<div className="bg-white p-8 rounded-lg shadow-lg w-96">
								<h2 className="text-xl font-semibold mb-4">Enter Your Details</h2>
								<form>
									<div className="mb-4">
										<input
											type="text"
											name="role"
											// value={formData.role}
											// onChange={(e) =>
											// 	setFormData({ ...formData, role: e.target.value })
											// }
											className="w-full px-3 py-2 border rounded"
											placeholder="Your role"
											required
										/>
									</div>

									<div className="mb-4">
										<input
											type="text"
											name="profession"
											// value={formData.profession}
											// onChange={(e) =>
											// 	setFormData({ ...formData, profession: e.target.value })
											// }
											className="w-full px-3 py-2 border rounded"
											placeholder="Your profession"
											required
										/>
									</div>

									<div className="mb-4">
										<input
											type="text"
											name="otherinfo"
											// value={formData.profession}
											// onChange={(e) =>
											// 	setFormData({ ...formData, profession: e.target.value })
											// }
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
											type="submit"
											className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
											onClick={fetchSummaries}
										>
											Generate
										</button>
									</div>
								</form>
							</div>
						</div>
					)}

					<div className="flex justify-between items-center mt-6 px-4">
						{/* Button for generating summaries using AI */}
						<div className="flex flex-col items-center w-full">
							<div className="flex items-center justify-center w-28 h-12 border-2 border-dashed border-blue-500 rounded-full xl:w-1/3 lg:w-1/2 md:w-2/3 sm:w-3/4">
								<button
									className="text-xl w-full h-full flex items-center justify-center text-blue-500 mr-2"
									onClick={handle}
									disabled={loading}
								>
									<FontAwesomeIcon icon={faBrain} className="mr-2" />
									{loading ? "Generating..." : "Generate By AI"}
								</button>
							</div>
						</div>

						{/* Navigation buttons */}
						<div className="flex items-center justify-end gap-2">
							<Link
								to="../personal"
								className="px-4 py-2 h-12 bg-gray-500 focus:outline-none text-white text-lg rounded hover:bg-gray-600 flex items-center justify-center"
							>
								Prev
							</Link>
							<Link
								to="../education"
								className="px-4 py-2 h-12 bg-blue-500 text-white text-lg rounded hover:bg-blue-600 flex items-center justify-center"
							>
								Next
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Summary;
