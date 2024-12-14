import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import shortid from "shortid";
import { ResumeInfoContext } from "../../context/ResumeContext.jsx";

function Skills() {
	const navigate = useNavigate();
	const { formData, setFormData } = useContext(ResumeInfoContext);
	const [skills, setSkills] = useState("");
	const [category, setCategory] = useState("");
	const [editSkillId, setEditSkillId] = useState(null);

	const submit = () => {
		// console.log(formData);
		if (!skills || !category) {
			alert("Please fill all fields!");
			return;
		}
		handleSave();
		navigate("../../customization");
	};
	// Add or Save Skill logic
	const handleSave = () => {
		if (editSkillId) {
			// Update existing skill
			setFormData((prevData) => ({
				...prevData,
				skillsData: prevData.skillsData.map((skill) =>
					skill.id === editSkillId
						? {
								...skill,
								skills: skills.split(",").map((s) => s.trim()),
								category,
						  }
						: skill
				),
			}));
			setEditSkillId(null); // Exit edit mode
		} else if (skills && category) {
			// Add new skill
			const newSkill = {
				id: shortid.generate(),
				category,
				skills: skills.split(",").map((s) => s.trim()),
				isEditable: false,
			};
			setFormData((prevData) => ({
				...prevData,
				skillsData: [...(prevData.skillsData || []), newSkill],
			}));
		}
		setSkills("");
		setCategory("");
	};

	// Remove Skill logic
	const handleRemove = (id) => {
		setFormData((prevData) => ({
			...prevData,
			skillsData: prevData.skillsData.filter((skill) => skill.id !== id),
		}));
	};

	// Enable Edit Mode
	const handleEdit = (skill) => {
		setEditSkillId(skill.id);
		setCategory(skill.category);
		setSkills(skill.skills.join(", "));
	};

	return (
		<div className="w-full 2xl:sticky 2xl:top-16 p-4 pt-0 h-fit">
			<div className="bg-white shadow-md min-w-lg border-t-4 border-blue-400 rounded-lg p-8">
				<form className="max-w-lg mx-auto h-full text-[#2e1885]">
					<h2 className="text-2xl font-bold text-center mb-4">Skills Detail</h2>

					{/* Category Input */}
					<div className="flex space-x-4">
						<input
							type="text"
							name="category"
							value={category}
							placeholder="Category"
							required
							className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
							onChange={(e) => setCategory(e.target.value)}
						/>
					</div>

					{/* Skill Input */}
					<div className="flex mt-5 space-x-4">
						<input
							type="text"
							name="skill"
							value={skills}
							placeholder="Skills (e.g., JavaScript, React)"
							required
							className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
							onChange={(e) => setSkills(e.target.value)}
						/>
					</div>

					{/* Add or Save Skill Button */}
					<div className="flex justify-between items-center mt-6 px-4">
						<button
							type="button"
							className="text-4xl text-blue-500"
							onClick={handleSave}
						>
							{editSkillId ? "✔️" : "+"}
						</button>

						{/* Navigation */}
						<div className="flex gap-4">
							<Link
								to="../workexp"
								className="px-4 py-2 bg-gray-500 text-white text-lg rounded hover:bg-gray-600 transition duration-200"
							>
								Prev
							</Link>
							{/* <Link
								to="../../share&save"
								className="px-4 py-2 bg-blue-500 text-white text-lg rounded hover:bg-blue-600 transition duration-200"
							>
								Submit
							</Link> */}
							<button
								// type="submit"
								onClick={submit}
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
									<div>
										<p className="text-base font-semibold text-[#2e1885]">
											{skill.category}
										</p>
									</div>
									<div className="flex justify-between space-x-4">
										<button
											className="text-lg text-blue-500"
											onClick={() => handleEdit(skill)}
										>
											✏️ Edit
										</button>
										<button
											className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors duration-200"
											onClick={() => handleRemove(skill.id)}
										>
											&times;
										</button>
									</div>
								</div>
								<p className="text-gray-700 text-lg bg-gray-50 px-3 py-2 rounded-lg">
									{skill.skills.join(", ")}
								</p>
							</div>
						</div>
					))}
			</div>
		</div>
	);
}

export default Skills;
