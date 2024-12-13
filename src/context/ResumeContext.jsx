// ResumeContext.jsx
import React, { createContext, useState, useEffect } from "react";
import resumeData from "../assets/dummy";

export const ResumeInfoContext = createContext();

export const ResumeInfoProvider = ({ children }) => {
	const [formData, setFormData] = useState(() => {
		const savedData = localStorage.getItem("formData");
		return savedData ? JSON.parse(savedData) : resumeData;
	});

	const [hasWorkExperience, setHasWorkExperience] = useState(() => {
		const savedWorkExp = localStorage.getItem("hasWorkExperience");
		return savedWorkExp ? JSON.parse(savedWorkExp) : true;
	});

	useEffect(() => {
		localStorage.setItem("formData", JSON.stringify(formData));
	}, [formData]);

	useEffect(() => {
		localStorage.setItem("hasWorkExperience", JSON.stringify(hasWorkExperience));
	}, [hasWorkExperience]);

	const setWorkExperience = (has) => {
		setHasWorkExperience(has);
	};

	return (
		<ResumeInfoContext.Provider
			value={{ formData, setFormData, hasWorkExperience, setWorkExperience }}
		>
			{children}
		</ResumeInfoContext.Provider>
	);
};
