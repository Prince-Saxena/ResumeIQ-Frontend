import React, { useRef } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Resume from "../Resume/Resume";
import html2pdf from "html2pdf.js";

const ResumeInput = () => {
	const resumeRef = useRef();
	const navigate = useNavigate();

	const handleSelectChange = (e) => {
		const selectedLink = e.target.value;
		if (selectedLink) {
			navigate(selectedLink);
		}
	};
	const handleDownload = () => {
		const element = resumeRef.current;
		const options = {
			margin: 0,
			filename: "resume.pdf",
			image: {
				type: "jpeg",
				quality: 1.0,
			},
			html2canvas: {
				scale: 3,
				useCORS: true,
				backgroundColor: null,
				logging: true,
			},
			jsPDF: {
				orientation: "portrait",
				unit: "in",
				format: "letter",
				margin: 0,
			},
		};

		html2pdf().from(element).set(options).save();
	};

	return (
		<div className=" text-[#2e1885] p-5">
			{/* Navigation Tabs */}
			<section className="flex flex-row  justify-between items-center mb-6">
				{/* Left section with the NavLinks */}
				<div>
					{/* Dropdown for screens smaller than 1024px */}
					<div className="lg:hidden flex justify-center">
						<select
							onChange={handleSelectChange}
							className="p-2 text-base sm:text-lg font-semibold border border-[#d471b4] rounded-full"
							defaultValue="Personal"
						>
							<option value="" disabled>
								Select a section
							</option>
							{[
								"personal",
								"summary",
								"education",
								"workexp",
								"project",
								"skills",
							].map((link) => (
								<option key={link} value={link}>
									{link.charAt(0).toUpperCase() + link.slice(1)}
								</option>
							))}
						</select>
					</div>

					{/* Normal navigation for screens 1024px and above */}
					<div className="hidden lg:flex flex-wrap justify-center sm:justify-start space-x-4">
						{["personal", "summary", "education", "workexp", "project", "skills"].map(
							(link) => (
								<NavLink
									key={link}
									to={link}
									className={({ isActive }) =>
										`inline-block px-4 py-2 text-base sm:text-lg font-semibold rounded-full transition-all duration-200 ease-in-out ${
											isActive
												? "bg-[#d471b4] text-white shadow-lg"
												: "bg-white text-[#2e1885] border border-[#d471b4] hover:bg-[#f0a7cf] hover:text-white"
										}`
									}
								>
									{link.charAt(0).toUpperCase() + link.slice(1)}
								</NavLink>
							)
						)}
					</div>
				</div>
				{/* Download Button */}
				<div className="flex items-center">
					<button
						// onClick={handleDownload}
						onClick={() => handleDownload()}
						className=" sm:mt-0 ml-auto px-4 py-2 bg-blue-500 text-white rounded shadow transition duration-200 hover:bg-blue-600"
					>
						Download PDF
					</button>
				</div>
			</section>

			{/* Layout for Form and Preview */}
			<div className="flex flex-col lg:flex-row overflow-visible">
				{/* Form Component */}
				<div className="mb-4 lg:w-2/5 w-full">
					<Outlet></Outlet>
				</div>

				{/* Resume Component */}
				<div className="md:mt-4 shadow-2xl ">
					<Resume ref={resumeRef} id="resume" />
				</div>
			</div>
		</div>
	);
};

export default ResumeInput;
