import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ResumeInfoContext } from "../../context/ResumeContext";

function Personal() {
	const { formData, setFormData } = useContext(ResumeInfoContext);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	return (
		<div className="w-full 2xl:sticky 2xl:top-16  p-4 pt-0 h-fit">
			<div className="bg-white shadow-lg border-t-4 border-blue-400 min-w-lg rounded-lg p-8">
				<form className="space-y-4">
					<h2 className="text-2xl font-bold text-center mb-4">Personal Information</h2>

					{/* First Name & Last Name */}
					<div className="flex space-x-4">
						<input
							type="text"
							name="firstname"
							defaultValue="" // Set to empty string for initial state
							placeholder="First Name"
							required
							className="w-1/2 p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
							onChange={handleChange}
						/>
						<input
							type="text"
							name="lastname"
							defaultValue="" // Set to empty string for initial state
							placeholder="Last Name"
							required
							className="w-1/2 p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
							onChange={handleChange}
						/>
					</div>

					{/* Email & Mobile */}
					<div className="flex space-x-4">
						<input
							type="email"
							name="email"
							defaultValue="" // Set to empty string for initial state
							placeholder="Email"
							required
							className="w-1/2 p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
							onChange={handleChange}
						/>
						<input
							type="tel"
							name="mobile"
							defaultValue="" // Set to empty string for initial state
							placeholder="Mobile No."
							required
							className="w-1/2 p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
							onChange={handleChange}
						/>
					</div>
					<div className="flex space-x-4">
						<input
							type="text"
							name="pincode"
							defaultValue="" // Set to empty string for initial state
							placeholder="Pincode"
							required
							className="w-1/2 p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
							onChange={handleChange}
							onInput={(e) => {
								// Allow only numbers
								e.target.value = e.target.value.replace(/[^0-9]/g, "");
							}}
							pattern="[0-9]*" // Regex pattern for numbers
							inputMode="numeric" // Mobile keyboard shows number pad
						/>
						<input
							type="text"
							name="title"
							defaultValue="" // Set to empty string for initial state
							placeholder="title"
							required
							className="w-1/2 p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
							onChange={handleChange}
						/>
					</div>

					{/* Address */}
					<textarea
						name="address"
						defaultValue="" // Set to empty string for initial state
						placeholder="Address"
						required
						className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
						onChange={handleChange}
					/>

					{/* Navigation Buttons */}
					<div className="flex justify-end gap-2 mt-6">
						<Link
							to="../summary"
							className="px-4 py-2 bg-blue-500 text-white text-lg rounded hover:bg-blue-600"
						>
							Next
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Personal;
