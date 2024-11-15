import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import shortid from "shortid";

import { ResumeInfoContext } from "../../context/ResumeContext";

function Projects() {
	const { formData, setFormData } = useContext(ResumeInfoContext);
	const [title, setTitle] = useState("");
	const [tech, setTech] = useState("");
	const [role, setRole] = useState("");
	const [link, setLink] = useState("");
	const [desc, setDesc] = useState("");
	const [editProjectId, setEditProjectId] = useState(null); // To track which project is being edited

	const addProject = () => {
		const technology = tech ? tech.split(",") : [];
		const newProject = {
			id: shortid.generate(),
			title,
			technologies: technology,
			link,
			description: desc,
			role,
		};

		setFormData((prev) => ({
			...prev,
			projects: [...(prev.projects || []), newProject],
		}));

		// Reset input fields
		setTitle("");
		setTech("");
		setRole("");
		setLink("");
		setDesc("");
	};

	const handleRemove = (id) => {
		const updatedProjects = formData.projects.filter((project) => project.id !== id);
		setFormData((prev) => ({
			...prev,
			projects: updatedProjects,
		}));
	};

	const handleEdit = (project) => {
		setTitle(project.title);
		setTech(project.technologies.join(","));
		setRole(project.role);
		setLink(project.link);
		setDesc(project.description);
		setEditProjectId(project.id); // Set the project being edited
	};

	const handleSave = () => {
		const updatedProjects = formData.projects.map((project) =>
			project.id === editProjectId
				? {
						...project,
						title,
						technologies: tech.split(","),
						role,
						link,
						description: desc,
				  }
				: project
		);
		setFormData((prev) => ({ ...prev, projects: updatedProjects }));
		// Reset the form
		setTitle("");
		setTech("");
		setRole("");
		setLink("");
		setDesc("");
		setEditProjectId(null);
	};

	return (
		<div className="w-full 2xl:sticky 2xl:top-16 p-4 pt-0 h-fit sm:px-8 lg:px-6">
			<div className="bg-white shadow-lg border-t-4 border-blue-400 rounded-lg p-8 min-w-lg">
				<form className="text-[#2e1885]">
					<h2 className="text-2xl font-bold text-center mb-6">Project Details</h2>

					{/* Project Title & Role */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
						<input
							type="text"
							value={title}
							placeholder="Project Title"
							required
							className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500"
							onChange={(e) => setTitle(e.target.value)}
						/>
						<input
							type="text"
							value={role}
							placeholder="Your Role"
							required
							className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500"
							onChange={(e) => setRole(e.target.value)}
						/>
					</div>

					{/* Technologies Used & Project Link */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
						<input
							type="text"
							value={tech}
							placeholder="Technologies Used"
							required
							className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500"
							onChange={(e) => setTech(e.target.value)}
						/>
						<input
							type="text"
							value={link}
							placeholder="Project Link (GitHub/Live Demo)"
							className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500"
							onChange={(e) => setLink(e.target.value)}
						/>
					</div>

					{/* Description */}
					<div className="mt-4">
						<textarea
							value={desc}
							placeholder="Project Description"
							required
							className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500"
							onChange={(e) => setDesc(e.target.value)}
						/>
					</div>

					{/* Navigation Buttons */}
					<div className="flex justify-between items-center mt-6">
						<button
							type="button"
							className="text-4xl text-blue-500 border-2 border-dashed border-blue-500 rounded-full w-12 h-12 flex items-center justify-center"
							onClick={editProjectId ? handleSave : addProject} // Use save for edit or add for new
						>
							{editProjectId ? "✔️" : "+"} {/* Conditional button text */}
						</button>
						<div className="flex gap-2">
							<Link
								to="../workexp"
								className="px-4 py-2 bg-gray-500 text-white text-lg rounded hover:bg-gray-600"
							>
								Prev
							</Link>
							<Link
								to="../skills"
								className="px-4 py-2 bg-blue-500 text-white text-lg rounded hover:bg-blue-600"
							>
								Next
							</Link>
						</div>
					</div>
				</form>
			</div>

			<div className="section relative bg-white mt-8 p-4 rounded-lg shadow-lg min-w-lg mx-auto">
				{formData.projects.map((project) => (
					<div
						key={project.id}
						className="border-2 border-slate-200 p-4 mb-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
					>
						<div className="space-y-2">
							<div className="flex justify-between items-center">
								<div className="text-xl font-semibold text-[#2e1885]">
									{project.title}{" "}
									<span className="text-base font-medium text-gray-400">
										{`{${project.role}}`}
									</span>
								</div>
								<div className="flex gap-2">
									<button
										className="w-8 h-8 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200"
										onClick={() => handleEdit(project)} // Edit functionality
										title="Edit"
									>
										✏️
									</button>
									<button
										className="w-8 h-8 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors duration-200"
										onClick={() => handleRemove(project.id)}
										title="Remove"
									>
										&times;
									</button>
								</div>
							</div>
							<p className="text-gray-700 text-sm bg-gray-50 px-3 py-2 rounded-lg">
								{project.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Projects;
