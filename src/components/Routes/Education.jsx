import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import shortid from "shortid";
import { ResumeInfoContext } from "../../context/ResumeContext";

function Education() {
	const { formData, setFormData } = useContext(ResumeInfoContext);
	const [editingId, setEditingId] = useState(null);
	const [degree, setDegree] = useState("");
	const [major, setMajor] = useState("");
	const [start, setStart] = useState("");
	const [end, setEnd] = useState("");
	const [loc, setLoc] = useState("");
	const [institution, setInstitution] = useState("");

	const navigate = useNavigate(); // Hook to programmatically navigate

	// Add a new education entry
	const addEdu = () => {
		const newEdu = {
			id: shortid.generate(),
			degree,
			major,
			start,
			end,
			institution,
			location: loc,
		};
		setFormData((prev) => ({
			...prev,
			education: [...(prev.education || []), newEdu],
		}));
		// Reset input fields
		setDegree("");
		setMajor("");
		setStart("");
		setEnd("");
		setInstitution("");
		setLoc("");
	};

	// Validation function
	const check = (e) => {
		if (!degree || !institution || !start || !end || !loc || !major) {
			// e.preventDefault();
			return false;
		}
		return true;
	};

	// Save the edited education entry
	const save = () => {
		const updatedEducation = formData.education.map((edu) =>
			edu.id === editingId
				? {
						...edu,
						degree: degree || edu.degree,
						major: major || edu.major,
						start: start || edu.start,
						end: end || edu.end,
						institution: institution || edu.institution,
						location: loc || edu.location,
				  }
				: edu
		);
		setFormData((prevData) => ({
			...prevData,
			education: updatedEducation,
		}));
		setEditingId(null);
		// Reset input fields
		setDegree("");
		setMajor("");
		setStart("");
		setEnd("");
		setInstitution("");
		setLoc("");
	};

	return (
		<div className="w-full 2xl:sticky 2xl:top-16 p-4 pt-0 h-fit">
			<div className="bg-white shadow-lg border-t-4 border-blue-400 rounded-lg min-w-lg p-8">
				<form className="min-w-lg mx-auto text-[#2e1885]">
					<h2 className="text-2xl font-bold text-center mb-4">Education Details</h2>

					{/* Degree & Institution */}
					<div className="flex space-x-4">
						<input
							type="text"
							name="degree"
							placeholder="Degree"
							value={degree}
							className="w-1/2 p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
							onChange={(e) => setDegree(e.target.value)}
						/>
						<input
							type="text"
							name="institution"
							placeholder="Institution"
							value={institution}
							className="w-1/2 p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
							onChange={(e) => setInstitution(e.target.value)}
						/>
					</div>

					{/* Start Year & End Year */}
					<div className="flex space-x-4 mt-4">
						<input
							type="number"
							name="startyear"
							placeholder="Start Year"
							value={start}
							className="w-1/2 p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
							onChange={(e) => setStart(e.target.value)}
						/>
						<input
							type="number"
							name="endyear"
							placeholder="End Year"
							value={end}
							className="w-1/2 p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
							onChange={(e) => setEnd(e.target.value)}
						/>
					</div>

					{/* Location & Major */}
					<div className="flex space-x-4 mt-4">
						<input
							type="text"
							name="location"
							placeholder="Location"
							value={loc}
							className="w-1/2 p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
							onChange={(e) => setLoc(e.target.value)}
						/>
						<input
							type="text"
							name="major"
							placeholder="Major/Field of Study"
							value={major}
							className="w-1/2 p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
							onChange={(e) => setMajor(e.target.value)}
						/>
					</div>

					{/* Navigation Buttons */}
					<div className="flex justify-between mt-4 items-center">
						<div className="flex items-center justify-center w-12 h-12 border-2 border-dashed border-blue-500 rounded-full">
							<button
								type="button"
								className="text-4xl text-blue-500"
								onClick={addEdu}
							>
								+
							</button>
						</div>
						<div className="flex justify-end gap-2">
							<Link
								to="../summary"
								className="px-4 py-2 bg-gray-500 focus:outline-none text-white text-lg rounded hover:bg-gray-600"
							>
								Prev
							</Link>
							<button
								onClick={(e) => {
									if (check(e)) {
										navigate("../workexp");
									} else {
										alert("You have not fill fields!");
										// navigate("../workexp");
									}
								}}
								className="px-4 py-2 bg-blue-500 focus:outline-none text-white text-lg rounded hover:bg-blue-600"
							>
								Next
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Education;
