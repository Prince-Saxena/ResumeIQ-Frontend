import React, { useContext, forwardRef } from "react";
import { ResumeInfoContext } from "../../context/ResumeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const Resume = forwardRef((props, ref) => {
	const { formData, hasWorkExperience } = useContext(ResumeInfoContext);

	return (
		<div
			ref={ref}
			className="resume-container h-fit w-full max-w-[850px] border-t-8 border-[#1d4ed8] p-5"
		>
			{/* Header Section */}
			<div className="flex flex-row items-center justify-between mb-3">
				<div className="text-left">
					<h1 className="resume-h1 text-4xl mb-2 font-bold">{`${formData.firstname} ${formData.lastname}`}</h1>
					<p className="text-gray-600">{formData.title}</p>
				</div>
				<div className="text-center md:text-right mt-4">
					<p className="text-gray-600">{formData.email}</p>
					<p className="text-gray-600">{formData.mobile}</p>
					<p className="text-gray-600">{formData.address}</p>
					<p className="text-gray-600">{formData.pincode}</p>
				</div>
			</div>
			<hr className="w-full border-t-2 border-blue-500" />

			{/* Summary Section */}
			<section className="m-2 mb-4">
				<h2 className="resume-h2 text-xl font-bold mb-1">Summary</h2>
				<p className="text-gray-700 ml-3 text-sm font-normal">{formData.summary}</p>
			</section>
			<hr className="w-full border-t-2 border-blue-500" />

			{/* Education Section */}
			<section className="m-2 mb-4">
				<h2 className="resume-h2 text-xl font-bold">Education</h2>
				{formData.education.map((edu, index) => (
					<div className="ml-3" key={index}>
						<h3 className="resume-h3 text-lg font-semibold">
							{edu.degree} in {edu.major}
						</h3>
						<p className="text-gray-600 text-sm font-normal italic">
							{edu.institution} ({edu.location}) - {edu.startyear} to {edu.endyear}
						</p>
					</div>
				))}
			</section>
			<hr className="w-full border-t-2 border-blue-500" />

			{/* Experience Section */}
			{hasWorkExperience && formData.workExperience.length > 0 && (
				<section className="m-2">
					<h2 className="resume-h2 text-xl font-bold">Work Experience</h2>
					{formData.workExperience.map((idx, index) => (
						<div className="ml-3 mt-1" key={index}>
							<div className="flex items-center justify-between">
								<div className="flex items-center gap-2">
									<h3 className="resume-h3 text-lg font-semibold">
										{idx.position}{" "}
									</h3>
									<span className="text-sm text-gray-600">
										<i>in</i> {idx.company}
									</span>
								</div>
								<div className="text-xs text-gray-500">
									({idx.start} To {idx.end})
								</div>
							</div>
							<div className="text-gray-700 text-sm mt-1 mb-4">
								{idx.responsibilities}
							</div>
						</div>
					))}
				</section>
			)}
			<hr className="w-full border-t-2 border-blue-500" />

			{/* Projects Section */}
			{formData.projects && formData.projects.length > 0 && (
				<section className="m-2">
					<h2 className="resume-h2 text-xl font-bold mb-1">Projects</h2>
					{formData.projects.map((project, index) => (
						<div className="mb-4 ml-3" key={index}>
							<h3 className="resume-h3 text-lg font-semibold inline-block mr-3">
								{project.title}
							</h3>
							<p className="inline-block underline">
								<a href={project.link} target="_blank" rel="noopener noreferrer">
									<FontAwesomeIcon icon={faLink} className="mr-2" />
								</a>
							</p>
							<p className="text-gray-600 font-normal text-sm italic">
								Role: {project.role} | Technologies:{" "}
								{project.technologies.join(", ")}
							</p>
							<p className="text-gray-700 text-sm">{project.description}</p>
						</div>
					))}
				</section>
			)}
			<hr className="w-full border-t-2 border-blue-500" />

			{/* Skills Section */}
			<section className="m-3">
				<h2 className=" resume-h2 text-xl font-bold mb-1">Skills</h2>
				<ul className="list-none ml-3 text-gray-700">
					{formData.skillsData.map((categoryData, index) => (
						<li key={index} className="mb-1">
							<h3 className="resume-h3 text-lg font-semibold inline">
								{categoryData.category}:
							</h3>
							<p className="inline ml-2">{categoryData.skills.join(", ")}</p>
						</li>
					))}
				</ul>
			</section>

			<hr className="w-full border-t-2 border-blue-500" />
			{/* Certifications Section */}
			<section className="m-3 mb-0">
				<h2 className="resume-h2 text-xl font-bold mb-1">Certifications</h2>
				<ul className="list-none ml-3 text-gray-700 text-sm font-normal">
					{formData.certifications.map((cert, index) => (
						<li key={index}>
							<i className="text-xl text-blue-600 font-bold">&rarr;</i> {cert}
						</li>
					))}
				</ul>
			</section>
		</div>
	);
});

export default Resume;
