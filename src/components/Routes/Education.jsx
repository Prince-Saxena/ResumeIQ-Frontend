import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
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

	// Handle clicking on an education entry to edit
	const handleEdit = (edu) => {
		setEditingId(edu.id);
		setDegree(edu.degree || "");
		setMajor(edu.major || "");
		setStart(edu.start || "");
		setEnd(edu.end || "");
		setInstitution(edu.institution || "");
		setLoc(edu.location || "");
	};

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

	// Remove an education entry
	const handleRemove = (id) => {
		if (formData.education.length === 1) {
			alert("You have to add at least one Education!");
			return;
		}
		const updatedEducation = formData.education.filter((edu) => edu.id !== id);
		setFormData((prevData) => ({
			...prevData,
			education: updatedEducation,
		}));
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
							<Link
								to="../workexp"
								className="px-4 py-2 bg-blue-500 focus:outline-none text-white text-lg rounded hover:bg-blue-600"
							>
								Next
							</Link>
						</div>
					</div>
				</form>
			</div>

			{/* Education Display */}
			<div className="section relative bg-white mt-6 p-4 rounded-lg shadow-lg">
				{formData.education.map((edu) => (
					<div
						key={edu.id}
						className="mx-auto border-2 border-slate-200 p-4 mb-4 h-full rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
					>
						<div className="space-y-2">
							<div className="flex justify-between items-center space-x-4">
								<div className="text-xl font-semibold text-[#2e1885]">
									<p className="inline px-2" onClick={() => handleEdit(edu)}>
										{edu.degree}
									</p>
									<span className="text-base font-medium text-gray-600">
										<p className="inline px-2" onClick={() => handleEdit(edu)}>
											in {edu.major}
										</p>
									</span>
								</div>
								{/* Edit Button (Pencil Icon) */}
								<button
									className="text-lg text-blue-500 bg-blue-500 rounded-full w-8 h-8 hover:text-blue-700"
									onClick={() => handleEdit(edu)}
									title="Edit"
								>
									✏️
								</button>
								{/* Remove Button */}
								<button
									className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors duration-200"
									onClick={() => handleRemove(edu.id)}
									title="Remove"
								>
									&times;
								</button>
							</div>
							<div className="text-gray-700 text-lg bg-gray-50 px-3 py-2 rounded-lg">
								<p className="inline px-2" onClick={() => handleEdit(edu)}>
									{edu.institution}
								</p>
								<p className="inline px-2" onClick={() => handleEdit(edu)}>
									{edu.start} - {edu.end}
								</p>
							</div>
							<div className="text-gray-700 text-lg bg-gray-50 px-3 py-2 rounded-lg">
								<p className="inline px-2" onClick={() => handleEdit(edu)}>
									{edu.location}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Education;
