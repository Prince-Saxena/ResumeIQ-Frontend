import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import shortid from "shortid";
import { ResumeInfoContext } from "../../context/ResumeContext";
import { useNavigate } from "react-router-dom";

function Workexp() {
	const navigate = useNavigate();
	const [showModal, setShowModal] = useState(true);
	const [job, setJob] = useState("");
	const [company, setCompany] = useState("");
	const [start, setStart] = useState("");
	const [end, setEnd] = useState("");
	const [responsibilities, setResponsibilities] = useState("");
	const [editId, setEditId] = useState(null); // Track editing item

	const { formData, setFormData, hasWorkExperience, setWorkExperience } =
		useContext(ResumeInfoContext);

	const handleRadio = (e) => {
		if (e.target.value === "no") {
			setWorkExperience(false);
			navigate("../project");
		} else {
			setShowModal(false);
			setWorkExperience(true);
		}
	};

	const handleRemove = (id) => {
		const updatedExperience = formData.workExperience.filter((exp) => exp.id !== id);
		setFormData((prevData) => ({
			...prevData,
			workExperience: updatedExperience,
		}));
		resetForm();
	};

	const addExp = () => {
		if (editId) {
			// Update existing experience
			const updatedExperience = formData.workExperience.map((exp) =>
				exp.id === editId
					? { id: editId, position: job, company, start, end, responsibilities }
					: exp
			);
			setFormData((prevData) => ({ ...prevData, workExperience: updatedExperience }));
			setEditId(null); // Reset edit state
		} else {
			// Add new experience
			const newExp = {
				id: shortid.generate(),
				position: job,
				company,
				start,
				end,
				responsibilities,
			};
			setFormData((prevData) => ({
				...prevData,
				workExperience: [...(prevData.workExperience || []), newExp],
			}));
		}
		resetForm();
	};

	const handleEdit = (exp) => {
		// Populate form with existing experience details
		setJob(exp.position);
		setCompany(exp.company);
		setStart(exp.start);
		setEnd(exp.end);
		setResponsibilities(exp.responsibilities);
		setEditId(exp.id); // Set the item being edited
	};

	const resetForm = () => {
		setJob("");
		setCompany("");
		setStart("");
		setEnd("");
		setResponsibilities("");
	};

	return (
		<div className="w-full 2xl:sticky 2xl:top-16 p-4 pt-0 h-fit">
			<div className="bg-white shadow-lg border-t-4 border-blue-400 rounded-lg min-w-lg p-8">
				<form className="space-y-4 text-[#2e1885]">
					<h2 className="text-2xl font-bold text-center mb-4">Work Experience</h2>
					<div className="flex space-x-4">
						<input
							type="text"
							name="jobTitle"
							value={job}
							placeholder="Job/Internship Title"
							required={hasWorkExperience}
							disabled={!hasWorkExperience}
							className="w-1/2 p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
							onChange={(e) => setJob(e.target.value)}
						/>
						<input
							type="text"
							name="companyName"
							value={company}
							placeholder="Company Name"
							required={hasWorkExperience}
							disabled={!hasWorkExperience}
							className="w-1/2 p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
							onChange={(e) => setCompany(e.target.value)}
						/>
					</div>
					<div className="flex space-x-4">
						<input
							type="text"
							name="startDate"
							value={start}
							placeholder="Joining Date"
							required={hasWorkExperience}
							disabled={!hasWorkExperience}
							className="w-1/2 p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
							onChange={(e) => setStart(e.target.value)}
						/>
						<input
							type="text"
							name="endDate"
							value={end}
							placeholder="Termination Date"
							required={hasWorkExperience}
							disabled={!hasWorkExperience}
							className="w-1/2 p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
							onChange={(e) => setEnd(e.target.value)}
						/>
					</div>
					<div className="flex space-x-4">
						<textarea
							name="responsibilities"
							value={responsibilities}
							placeholder="Responsibilities"
							required={hasWorkExperience}
							disabled={!hasWorkExperience}
							rows="2"
							className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
							onChange={(e) => setResponsibilities(e.target.value)}
						></textarea>
					</div>
					<div className="flex justify-between mt-4 items-center">
						<button
							type="button"
							className="text-4xl text-blue-500 border-2 border-dashed border-blue-500 rounded-full w-12 h-12 flex items-center justify-center"
							onClick={addExp}
						>
							{editId ? "✔️" : "+"}
						</button>
						<div className="flex justify-end gap-1">
							<Link
								to="../education"
								className="px-4 py-2 bg-gray-500 focus:outline-none text-white text-lg rounded hover:bg-gray-600"
							>
								Prev
							</Link>
							<Link
								to="../project"
								className="px-4 py-2 bg-blue-500 focus:outline-none text-white text-lg rounded hover:bg-blue-600"
							>
								Next
							</Link>
						</div>
					</div>
				</form>
			</div>
			<div className="section relative bg-white mt-6 p-4 rounded-lg shadow-lg">
				{formData.workExperience && formData.workExperience.length > 0 ? (
					formData.workExperience.map((exp) => (
						<div
							key={exp.id}
							className="mx-auto border-2 border-slate-200 p-4 mb-4 h-full rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
						>
							<div className="space-y-2">
								<div className="flex justify-between items-center space-x-4">
									<div className="text-xl font-semibold text-[#2e1885]">
										{exp.position}{" "}
										<span className="text-base font-medium text-gray-600">
											in {exp.company}
										</span>
										<div className="text-sm text-gray-500">
											({exp.start} To {exp.end})
										</div>
									</div>
									<div className="flex gap-2">
										<button
											className="w-8 h-8 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200"
											onClick={() => handleEdit(exp)}
											title="Edit"
										>
											✏️
										</button>
										<button
											className="w-8 h-8 rounded-full bg-red-500 text-white hover:bg-red-600"
											onClick={() => handleRemove(exp.id)}
											title="Remove"
										>
											&times;
										</button>
									</div>
								</div>
								<p className="text-gray-700 text-sm bg-gray-50 px-3 py-2 rounded-lg">
									{exp.responsibilities}
								</p>
							</div>
						</div>
					))
				) : (
					<p className="text-center text-gray-500">No work experience added yet.</p>
				)}
			</div>
		</div>
	);
}

export default Workexp;
