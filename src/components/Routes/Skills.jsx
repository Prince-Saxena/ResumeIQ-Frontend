import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import shortid from "shortid";
import { ResumeInfoContext } from "../../context/ResumeContext";

function Skills() {
	const { formData, setFormData } = useContext(ResumeInfoContext);
	const [skill, setSkill] = useState("");
	const [category, setCategory] = useState("");

	const addSkill = () => {
		if (skill && category) {
			const newSkill = { id: shortid.generate(), category, skills: [skill] };
			setFormData((prevData) => ({
				...prevData,
				skillsData: [...(prevData.skillsData || []), newSkill],
			}));
			// Clear inputs after adding skill
			setSkill("");
			setCategory("");
		}
	};

	const handleChangeCategory = (e) => {
		setCategory(e.target.value);
	};

	const handleChangeSkill = (e) => {
		setSkill(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Logic for form submission
		console.log("Form submitted", formData);
	};

	const handleRemove = (id) => {
		const updatedSkills = formData.skillsData.filter((skill) => skill.id !== id);
		setFormData((prevData) => ({
			...prevData,
			skillsData: updatedSkills,
		}));
	};

	return (
		<div className="w-full 2xl:sticky 2xl:top-16  p-4 pt-0 h-fit">
			<div className="bg-white  shadow-md min-w-lg border-t-4 border-blue-400 rounded-lg p-8">
				<form className="max-w-lg mx-auto h-full text-[#2e1885]" onSubmit={handleSubmit}>
					<h2 className="text-2xl font-bold text-center mb-4">Skills Detail</h2>

					{/* Category Input */}
					<div className="flex space-x-4">
						<input
							type="text"
							name="category"
							// value={category}
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
							// value={skill}
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
			<div className="section sticky top-96 bg-white mt-6 rounded-lg ">
				{formData.skillsData &&
					formData.skillsData.map((skill) => (
						<div
							key={skill.id}
							className=" mx-auto border-2 border-slate-100 p-3 mb-4 h-full text-[#421cd8] rounded-xl"
						>
							<div className="space-y-4">
								<div className="flex space-x-4">
									<input
										type="text"
										name="category"
										value={skill.category}
										placeholder="Skill"
										disabled
										className="w-full p-3 border-none rounded text-base font-bold text-[#2e1885] focus:ring-2 focus:ring-blue-500 focus:outline-none bg-transparent"
									/>
								</div>

								<div className="flex mt-5 space-x-4">
									<input
										type="text"
										name="skills"
										value={skill.skills.join(", ")}
										placeholder="Frameworks & Libraries (Languages)"
										disabled
										className="w-full p-3 border-none rounded focus:ring-2 text-gray-700 focus:ring-blue-500 focus:outline-none bg-transparent "
									/>
									<button
										className="flex text-2xl items-center justify-center w-10 h-10 rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition duration-200"
										onClick={() => handleRemove(skill.id)}
									>
										&times;
									</button>
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	);
}

export default Skills;
