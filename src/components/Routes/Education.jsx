import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import shortid from "shortid";

import { ResumeInfoContext } from "../../context/ResumeContext";

function Education() {
	const { formData, setFormData } = useContext(ResumeInfoContext);
	const [degree, setDegree] = useState();
	const [major, setMajor] = useState();
	const [start, setStart] = useState();
	const [end, setEnd] = useState();
	const [loc, setLoc] = useState();
	const [institution, setInstitution] = useState();

	const addEdu = () => {
		const exp = {
			id: shortid.generate(),
			degree: degree,
			major: major,
			start: start,
			end: end,
			institution: institution,
			location: loc,
		};
		setFormData((prev) => ({ ...prev, education: [...(prev.education || []), exp] }));
		setDegree("");
		setMajor("");
		setStart("");
		setEnd("");
		setInstitution("");
		setLoc("");
	};

	const handleRemove = (id) => {
		if (formData.education.length == 1) {
			alert("You have to add atleast an Eduaction!");
			return;
		}
		const updatedEducation = formData.education.filter((skill) => skill.id !== id);
		setFormData((prevData) => ({
			...prevData,
			education: updatedEducation,
		}));
	};

	return (
		<div className="w-full 2xl:sticky 2xl:top-16   p-4 pt-0 h-fit">
			<div className="bg-white shadow-lg border-t-4 border-blue-400 rounded-lg min-w-lg p-8">
				<form className="min-w-lg  mx-auto text-[#2e1885]">
					<h2 className="text-2xl font-bold text-center mb-4">Education Details</h2>

					{/* Degree & Institute */}
					<div className="flex space-x-4">
						<input
							type="text"
							name="degree"
							defaultValue=""
							placeholder="Degree"
							required
							className="w-1/2 p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
							onChange={(e) => setDegree(e.target.value)}
						/>
						<input
							type="text"
							name="institution"
							defaultValue=""
							placeholder="Institution"
							required
							className="w-1/2 p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
							onChange={(e) => setInstitution(e.target.value)}
						/>
					</div>

					{/* Start Year & End Year */}
					<div className="flex space-x-4 mt-4">
						<input
							type="number"
							name="startyear"
							defaultValue=""
							placeholder="Start Year"
							required
							className="w-1/2 p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
							onChange={(e) => setStart(e.target.value)}
						/>
						<input
							type="number"
							name="endyear"
							defaultValue=""
							placeholder="End Year"
							required
							className="w-1/2 p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
							onChange={(e) => setEnd(e.target.value)}
						/>
					</div>

					{/* Grade & Major */}
					<div className="flex space-x-4 mt-4">
						<input
							type="text"
							name="location"
							defaultValue=""
							placeholder="Location"
							required
							className="w-1/2 p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
							onChange={(e) => setLoc(e.target.value)}
						/>
						<input
							type="text"
							name="major"
							defaultValue=""
							placeholder="Major/Field of Study"
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
								to="../workexp" // Change this to the next component route
								className="px-4 py-2 bg-blue-500 focus:outline-none text-white text-lg rounded hover:bg-blue-600"
							>
								Next
							</Link>
						</div>
					</div>
				</form>
			</div>
			<div className="section relative bg-white mt-6 p-4 rounded-lg shadow-lg">
				{formData.education.map((idx) => (
					<div
						key={idx.id}
						className="mx-auto border-2 border-slate-200 p-4 mb-4 h-full rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
					>
						<div className="space-y-2">
							<div className="flex justify-between items-center space-x-4">
								<div className="text-xl font-semibold text-[#2e1885]">
									{idx.degree}{" "}
									<span className="text-base font-medium text-gray-600">
										in {idx.major}
									</span>
								</div>
								<button
									className="flex items-center justify-center w-8 h-8 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors duration-200"
									onClick={() => handleRemove(idx.id)}
									title="Remove"
								>
									&times;
								</button>
							</div>
							<p className="text-gray-700 text-lg bg-gray-50 px-3 py-2 rounded-lg">
								{idx.institution} [<i className="font-sans text-base">From</i>{" "}
								{idx.start} <i className="font-sans text-base">To</i> {idx.end}]
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Education;
