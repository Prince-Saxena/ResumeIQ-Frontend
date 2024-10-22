import React, { createContext, useState } from "react";
import resumeData from "../assets/dummy"; // Adjust the import path accordingly

// Create the ResumeInfoContext
export const ResumeInfoContext = createContext();

export const ResumeInfoProvider = ({ children }) => {
	// State for form data
	const [formData, setFormData] = useState(resumeData);

	// State for toggling work experience visibility
	const [hasWorkExperience, setHasWorkExperience] = useState(true);

	// Function to toggle work experience on or off
	const setWorkExperience = (has) => {
		setHasWorkExperience(has);
	};

	return (
		<ResumeInfoContext.Provider
			value={{
				formData,
				setFormData,
				hasWorkExperience,
				setWorkExperience, // Expose the toggle function
			}}
		>
			{children}
		</ResumeInfoContext.Provider>
	);
};
