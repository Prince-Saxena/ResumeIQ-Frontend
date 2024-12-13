import React, { createContext, useState, useContext } from "react";

const StyleContext = createContext();

export const StyleProvider = ({ children }) => {
	const [styles, setStyles] = useState({
		heading: {
			color: "text-[#2e1885]",
			fontSize: "text-4xl",
			fontWeight: "font-normal",
			font: "font-serif",
		},
		subheading: {
			color: "text-[#2e1885]",
			fontSize: "text-xl",
			fontWeight: "font-semibold",
			font: "font-serif",
		},
		paragraph: {
			color: "text-gray-700",
			fontSize: "text-sm",
			fontWeight: "400",
			font: "font-serif",
		},
	});

	const updateStyles = (section, newStyles) => {
		setStyles((prev) => ({
			...prev,
			[section]: {
				...prev[section],
				...newStyles,
			},
		}));
	};

	return (
		<StyleContext.Provider value={{ styles, updateStyles }}>{children}</StyleContext.Provider>
	);
};

export const useStyle = () => useContext(StyleContext);
