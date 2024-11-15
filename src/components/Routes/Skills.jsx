import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import shortid from "shortid";
import { ResumeInfoContext } from "../../context/ResumeContext";

function Skills() {
	const { formData, setFormData } = useContext(ResumeInfoContext);
	const [skill, setSkill] = useState("");
	const [category, setCategory] = useState("");

	// Add Skill logic
	const addSkill = () => {
		if (skill && category) {
			const newSkill = {
				id: shortid.generate(),
				category,
				skills: [skill],
				isEditable: false, // Initially not editable
			};
			setFormData((prevData) => ({
				...prevData,
				skillsData: [...(prevData.skillsData || []), newSkill],
			}));
			// Clear inputs after adding skill
			setSkill("");
			setCategory("");
		}
	};

	// Handle category input change
	const handleChangeCategory = (e) => {
		setCategory(e.target.value);
	};

	// Handle skill input change
	const handleChangeSkill = (e) => {
		setSkill(e.target.value);
	};

	// Handle submit form (could be used for other form submissions)
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted", formData);
	};

	// Remove skill from the list
	const handleRemove = (id) => {
		const updatedSkills = formData.skillsData.filter((skill) => skill.id !== id);
		setFormData((prevData) => ({
			...prevData,
			skillsData: updatedSkills,
		}));
	};

	// Toggle edit mode for a skill (edit category or skills)
	const handleToggleEdit = (id) => {
		const updatedSkills = formData.skillsData.map((skill) =>
			skill.id === id ? { ...skill, isEditable: !skill.isEditable } : skill
		);
		setFormData((prevData) => ({
			...prevData,
			skillsData: updatedSkills,
		}));
	};

	// Edit category of a skill
	const handleEditCategory = (e, id) => {
		const updatedSkills = formData.skillsData.map((skill) =>
			skill.id === id ? { ...skill, category: e.target.value } : skill
		);
		setFormData((prevData) => ({
			...prevData,
			skillsData: updatedSkills,
		}));
	};

	// Edit skills (split by commas for multiple skills)
	const handleEditSkills = (e, id) => {
		const updatedSkills = formData.skillsData.map((skill) =>
			skill.id === id ? { ...skill, skills: e.target.value.split(",") } : skill
		);
		setFormData((prevData) => ({
			...prevData,
			skillsData: updatedSkills,
		}));
	};

	return (
		<div className="w-full 2xl:sticky 2xl:top-16 p-4 pt-0 h-fit">
			<div className="bg-white shadow-md min-w-lg border-t-4 border-blue-400 rounded-lg p-8">
				<form className="max-w-lg mx-auto h-full text-[#2e1885]" onSubmit={handleSubmit}>
					<h2 className="text-2xl font-bold text-center mb-4">Skills Detail</h2>

					{/* Category Input */}
					<div className="flex space-x-4">
						<input
							type="text"
							name="category"
							placeholder="Category"
							required
							className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
							onChange={handleChangeCategory}
						/>
					</div>

					{/* Skill Input */}
					<div className="flex mt-5 space-x-4">
						<input
							type="text"
							name="skill"
							placeholder="Skills (e.g., JavaScript)"
							required
							className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
							onChange={handleChangeSkill}
						/>
					</div>

					{/* Add Skill Button */}
					<div className="flex justify-between items-center mt-6 px-4">
						<div className="flex flex-col items-center w-1/12">
							<div className="flex items-center justify-center w-12 h-12 border-2 border-dashed border-blue-500 rounded-full">
								<button
									type="button"
									className="text-4xl text-blue-500"
									onClick={addSkill}
								>
									+
								</button>
							</div>
						</div>

						{/* Navigation and Submit Buttons */}
						<div className="flex gap-4">
							<Link
								to="../workexp"
								className="px-4 py-2 bg-gray-500 text-white text-lg rounded hover:bg-gray-600 transition duration-200"
							>
								Prev
							</Link>
							<button
								type="submit"
								className="px-4 py-2 bg-blue-500 text-white text-lg rounded hover:bg-blue-600 transition duration-200"
							>
								Submit
							</button>
						</div>
					</div>
				</form>
			</div>

			{/* Skills Display Section */}
			<div className="section relative bg-white mt-6 p-4 rounded-lg shadow-lg">
				{formData.skillsData &&
					formData.skillsData.map((skill) => (
						<div
							key={skill.id}
							className="mx-auto border-2 border-slate-200 p-4 mb-4 h-full rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
						>
							<div className="space-y-2">
								<div className="flex justify-between items-center space-x-4">
									<div className="text-base font-semibold text-[#2e1885]">
										{/* Display editable or static category */}
										{skill.isEditable ? (
											<input
												type="text"
												value={skill.category}
												onChange={(e) => handleEditCategory(e, skill.id)}
												className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
											/>
										) : (
											<p className="inline px-2">{skill.category}</p>
										)}
									</div>
									{/* Edit Button (Pencil Icon) */}
									<button
										className="text-lg text-blue-500 bg-blue-500 rounded-full w-8 h-8 hover:text-blue-700"
										onClick={() => handleToggleEdit(skill.id)}
										title="Edit"
									>
										✏️
									</button>
									{/* Remove Button */}
									<button
										className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors duration-200"
										onClick={() => handleRemove(skill.id)}
										title="Remove"
									>
										&times;
									</button>
								</div>
								<div className="text-gray-700 text-lg bg-gray-50 px-3 py-2 rounded-lg">
									{/* Display editable or static skills */}
									{skill.isEditable ? (
										<input
											type="text"
											value={skill.skills.join(", ")}
											onChange={(e) => handleEditSkills(e, skill.id)}
											className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
										/>
									) : (
										<p className="inline px-2">{skill.skills.join(", ")}</p>
									)}
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	);
}

export default Skills;
