import React, { useContext, forwardRef } from "react";
import { ResumeInfoContext } from "../../context/ResumeContext.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
// import "./style.css";

const Resume2 = forwardRef((props, ref) => {
	const { formData, hasWorkExperience } = useContext(ResumeInfoContext);

	return (
		<div
			ref={ref}
			className="resume-container h-fit w-full max-w-[850px] bg-white shadow-lg rounded-lg p-6"
			style={{
				fontFamily: "Georgia, serif",
				color: "#333",
				pageBreakAfter: "always",
				boxSizing: "border-box",
			}}
		>
			{/* Header */}
			<div className="flex justify-between w-full items-start border-b-2 border-gray-300 pb-2">
				<div>
					<h1 className="text-3xl font-extrabold text-[#1a202c]">{`${formData.firstname} ${formData.lastname}`}</h1>
					<p className="text-lg text-[#718096]">{formData.title}</p>
				</div>
				<div className="text-right text-md">
					<p className="text-[#1a202c]">{formData.email}</p>
					<p className="text-[#718096]">{formData.mobile}</p>
					<p className="text-[#718096]">
						{formData.address}, {formData.pincode}
					</p>
				</div>
			</div>

			<div className="grid grid-cols-3 gap-4 mt-4">
				{/* Left Column */}
				<div className="col-span-1">
					<section className="mb-4">
						<h2 className="text-xl font-bold text-[#2d3748] border-b-2 border-[#2d3748] pb-1">
							Summary
						</h2>
						<p className="text-md text-[#4a5568] mt-1 leading-relaxed">
							{formData.summary}
						</p>
					</section>
					{/* Education */}
					<section>
						<h2 className="text-xl font-bold text-[#2d3748] border-b-2 border-[#2d3748] pb-1">
							Education
						</h2>
						{formData.education.map((edu, index) => (
							<div className="mt-4" key={index}>
								<h3 className="text-lg font-semibold text-[#1a202c]">
									{edu.degree} in {edu.major}
								</h3>
								<p className="text-md text-[#718096] italic">
									{edu.institution} ({edu.location})
								</p>
								<p className="text-md text-[#4a5568] mt-1">
									{edu.startyear} - {edu.endyear}
								</p>
							</div>
						))}
					</section>

					<section>
						<h2 className="text-xl font-bold text-[#2d3748] border-b-2 border-[#2d3748] pb-1">
							Certifications
						</h2>
						<ul className="text-md text-[#4a5568] mt-1">
							{formData.certifications.map((cert, index) => (
								<li key={index}>&rarr; {cert}</li>
							))}
						</ul>
					</section>
				</div>

				{/* Right Column */}
				<div className="col-span-2">
					{/* Experience */}
					{hasWorkExperience && formData.workExperience.length > 0 && (
						<section className="mb-4">
							<h2 className="text-xl font-bold text-[#2d3748] border-b-2 border-[#2d3748] pb-1">
								Work Experience
							</h2>
							{formData.workExperience.map((job, index) => (
								<div className="mt-4" key={index}>
									<h3 className="text-lg font-semibold text-[#1a202c]">
										{job.position} at {job.company}
									</h3>
									<p className="text-md text-[#718096] italic">
										{job.start} - {job.end}
									</p>
									<p className="text-md text-[#4a5568] mt-1 leading-relaxed">
										{job.responsibilities}
									</p>
								</div>
							))}
						</section>
					)}

					{/* Projects */}
					{formData.projects && formData.projects.length > 0 && (
						<section className="mb-4">
							<h2 className="text-xl font-bold text-[#2d3748] border-b-2 border-[#2d3748] pb-1">
								Projects
							</h2>
							{formData.projects.map((project, index) => (
								<div className="mt-4" key={index}>
									<h3 className="text-lg font-semibold inline-block mr-2 text-[#1a202c]">
										{project.title}
									</h3>
									<a
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
										className="text-[#2d3748] underline text-md"
									>
										<FontAwesomeIcon icon={faLink} className="mr-1" /> Link
									</a>
									<p className="text-md text-[#718096] italic mt-1">
										Role: {project.role} | Tech:{" "}
										{project.technologies.join(", ")}
									</p>
									<p className="text-md text-[#4a5568] mt-1 leading-relaxed">
										{project.description}
									</p>
								</div>
							))}
						</section>
					)}
					<section className="mb-4">
						<h2 className="text-xl font-bold text-[#2d3748] border-b-2 border-[#2d3748] pb-1">
							Skills
						</h2>
						<ul className="text-md text-[#4a5568] mt-1">
							{formData.skillsData.map((category, index) => (
								<li key={index} className="mt-1">
									<strong>{category.category}:</strong>{" "}
									{category.skills.join(", ")}
								</li>
							))}
						</ul>
					</section>
				</div>
			</div>
		</div>
	);
});

export default Resume2;
