import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ResumeInfoContext } from "../../context/ResumeContext";

function Personal() {
	const { formData, setFormData } = useContext(ResumeInfoContext);
	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const checkEmptyFields = () => {
		const requiredFields = [
			"firstname",
			"lastname",
			"email",
			"mobile",
			"pincode",
			"title",
			"address",
		];
		for (const field of requiredFields) {
			if (!formData[field] || formData[field].trim() === "") {
				alert("All fields Required!");
				return false;
			}
		}
		return true;
	};

	function Submit(e) {
		e.preventDefault();
		if (checkEmptyFields()) {
			navigate("../summary");
		}
	}

	return (
		<div className="w-full 2xl:sticky 2xl:top-16 p-4 pt-0 h-fit ">
			<div className="bg-white shadow-lg border-t-4 border-blue-400 min-w-lg rounded-lg p-8">
				<form className="space-y-4">
					<h2 className="text-2xl font-bold text-center mb-4">Personal Information</h2>

					{/* First Name & Last Name */}
					<div className="flex space-x-4">
						<input
							type="text"
							name="firstname"
							defaultValue=""
							placeholder="First Name"
							required
							className="w-1/2 p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
							onChange={handleChange}
						/>
						<input
							type="text"
							name="lastname"
							defaultValue=""
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
							defaultValue=""
							placeholder="Email"
							required
							className="w-1/2 p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
							onChange={handleChange}
						/>
						<input
							type="tel"
							name="mobile"
							defaultValue=""
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
							defaultValue=""
							placeholder="Pincode"
							required
							className="w-1/2 p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
							onChange={handleChange}
							onInput={(e) => {
								// Allow only numbers
								e.target.value = e.target.value.replace(/[^0-9]/g, "");
							}}
							pattern="[0-9]*"
							inputMode="numeric"
						/>
						<input
							type="text"
							name="title"
							defaultValue=""
							placeholder="Title"
							required
							className="w-1/2 p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
							onChange={handleChange}
						/>
					</div>

					{/* Address */}
					<textarea
						name="address"
						defaultValue=""
						placeholder="Address"
						required
						className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
						onChange={handleChange}
					/>

					{/* Navigation Buttons */}
					<div className="flex justify-end gap-2 mt-6">
						<button
							type="submit"
							onClick={Submit}
							className="px-4 py-2 bg-blue-500 focus:outline-none text-white text-lg rounded hover:bg-blue-600"
						>
							Next
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Personal;
