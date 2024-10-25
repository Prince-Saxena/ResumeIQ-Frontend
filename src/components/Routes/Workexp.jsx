import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import shortid from "shortid";
import { ResumeInfoContext } from "../../context/ResumeContext";
import { useNavigate } from "react-router-dom";

function Workexp() {
	const navigate = useNavigate(); // useNavigate hook from react-router-dom
	const [showModal, setShowModal] = useState(true);
	const [job, setJob] = useState();
	const [company, setCompany] = useState();
	const [start, setStart] = useState();
	const [end, setEnd] = useState();
	const [responsibilities, setResponsibilities] = useState();
	const { formData, setFormData, hasWorkExperience, setWorkExperience } =
		useContext(ResumeInfoContext);

	const handleRadio = (e) => {
		if (e.target.value == "no") {
			setWorkExperience(false);
			navigate("../project");
		} else {
			setShowModal((prev) => !prev);
			setWorkExperience(true);
		}
	};

	const handleRemove = (id) => {
		const updatedSkills = formData.workExperience.filter((skill) => skill.id !== id);
		setFormData((prevData) => ({
			...prevData,
			workExperience: updatedSkills,
		}));
		setJob("");
		setCompany("");
		setStart("");
		setEnd("");
		setResponsibilities("");
	};

	const addExp = () => {
		const exp = {
			id: shortid.generate(),
			position: job,
			company: company,
			start: start,
			end: end,
			responsibilities: responsibilities,
		};
		setFormData((prev) => ({ ...prev, workExperience: [...(prev.workExperience || []), exp] }));
		setJob("");
		setCompany("");
		setStart("");
		setEnd("");
		setResponsibilities("");
	};

	// useEffect;

	return (
		<div className="w-full 2xl:sticky 2xl:top-16 p-4 pt-0 h-fit">
			<div className="bg-white  shadow-lg border-t-4 border-blue-400 rounded-lg min-w-lg p-8">
				<form className="space-y-4  text-[#2e1885]">
					<h2 className="text-2xl font-bold text-center mb-4">Work Experience</h2>

					<div className="flex space-x-4">
						<input
							type="text"
							name="jobTitle"
							// value={formData.position}
							placeholder="Job/Internship Title"
							required={hasWorkExperience}
							disabled={!hasWorkExperience}
							className="w-1/2 p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
							onChange={(e) => setJob(e.target.value)}
						/>
						<input
							type="text"
							name="companyName"
							// value={formData.company}
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
							// value={formData.start}
							placeholder="Joining Date"
							required={hasWorkExperience}
							disabled={!hasWorkExperience}
							className="w-1/2 p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
							onChange={(e) => setStart(e.target.value)}
						/>
						<input
							type="text"
							name="endDate"
							// value={formData.end}
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
							value={formData.responsibilities}
							placeholder="Responsibilities"
							required={hasWorkExperience}
							disabled={!hasWorkExperience}
							rows="2"
							className=" w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
							onChange={(e) => setResponsibilities(e.target.value)}
						></textarea>
					</div>

					<div className="flex justify-between mt-4 items-center">
						<div className="flex w-2/5">
							<div className="flex items-center justify-center w-28 h-12 border-2 border-dashed border-blue-500 rounded-full xl:w-1/4 lg:w-1/2 md:w-1/4 sm:w-1/2">
								<button
									className="text-xl w-full h-full flex items-center justify-center text-blue-500 mr-2"
									onClick={addExp}
								>
									+
								</button>
							</div>
						</div>

						{/* Navigation Buttons */}
						<div className="flex justify-end gap-1">
							<Link
								to="../education"
								className="px-4 py-2 bg-gray-500 focus:outline-none text-white text-lg rounded hover:bg-gray-600"
							>
								Prev
							</Link>
							<Link
								to="../project" // Change this to the next component route
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
					formData.workExperience.map((idx) => (
						<div
							key={idx.id}
							className="mx-auto border-2 border-slate-200 p-4 mb-4 h-full rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
						>
							<div className="space-y-2">
								<div className="flex justify-between items-center space-x-4">
									<div className="text-xl font-semibold text-[#2e1885]">
										{idx.position}{" "}
										<span className="text-base font-medium text-gray-600">
											in {idx.company}
										</span>
										<div className="text-sm text-gray-500">
											({idx.start} To {idx.end})
										</div>
									</div>
									<button
										className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors duration-200"
										onClick={() => handleRemove(idx.id)}
										title="Remove"
									>
										&times;
									</button>
								</div>
								<p className="text-gray-700 text-sm bg-gray-50 px-3 py-2 rounded-lg">
									{idx.responsibilities}
								</p>
							</div>
						</div>
					))
				) : (
					<p className="text-center text-gray-500">No work experience added yet.</p>
				)}

				{showModal && (
					<div className="fixed z-10 max-w-full inset-0 bg-black bg-opacity-50 flex items-center justify-center">
						<div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
							{/* New Experience Question */}
							<h3 className="text-xl font-semibold mb-4 text-center">
								Work Experience
							</h3>
							<div className="mb-4">
								<label className="block text-lg font-medium mb-2 text-gray-700">
									Do you have any experience?
								</label>
								<div className="flex justify-around gap-6">
									<label className="flex items-center text-lg text-gray-700">
										<input
											type="radio"
											name="experience"
											value="yes"
											className="mr-2"
											required
											onClick={handleRadio}
										/>
										Yes
									</label>
									<label className="flex items-center text-lg text-gray-700">
										<input
											type="radio"
											name="experience"
											value="no"
											className="mr-2"
											required
											onClick={handleRadio}
										/>
										No
									</label>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default Workexp;
