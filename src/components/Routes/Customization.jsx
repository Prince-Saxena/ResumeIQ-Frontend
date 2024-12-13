import React, { useState } from "react";
import { useStyle } from "../../context/StyleContext";
import Resume from "../Resume/Resume";
import { useNavigate } from "react-router-dom";

function Customization() {
	// const [custom, setCustom] = useState();
	const navigate = useNavigate();
	const { styles, updateStyles } = useStyle();

	const handleStyleChange = (section, key, value) => {
		updateStyles(section, { [key]: value });
		// console.log(value);
	};

	const submit = () => {
		navigate("../share&save");
	};

	return (
		<div>
			<div className="flex flex-col text-[#2e1885] max-h-[1000px] lg:flex-row overflow-visible mt-20">
				{/* Customization Form */}
				<div className="mb-4 lg:w-2/5 w-full min-w-[400px]">
					<div className="w-full 2xl:sticky 2xl:top-16 p-4 pt-0 h-full">
						<div className="bg-white shadow-lg border-t-4 border-blue-400 min-w-lg rounded-lg p-8">
							<h2 className="text-2xl font-bold text-center mb-4">Customization</h2>

							{/* Heading Customization */}
							<div className="border-y-2 border-blue-400 p-5 rounded-2xl">
								<h3 className="font-semibold mb-2">Heading Customization</h3>
								<label className="block mb-2">Font Family</label>
								<select
									value={styles.heading.font}
									onChange={(e) =>
										handleStyleChange("heading", "font", e.target.value)
									}
									className="border border-gray-300 p-2 rounded mb-4 w-full"
								>
									<option value="font-sans">Sans</option>
									<option value="font-serif">Serif</option>
									<option value="font-mono">Mono</option>
								</select>
								<label className="block mb-2">Font Size</label>
								<select
									value={styles.heading.fontSize}
									onChange={(e) =>
										handleStyleChange("heading", "fontSize", e.target.value)
									}
									className="border border-gray-300 p-2 rounded mb-4 w-full"
								>
									<option value="text-bs">Base</option>
									<option value="text-lg">Large</option>
									<option value="text-xl">XL</option>
									<option value="text-2xl">2XL</option>
									<option value="text-3xl">3XL</option>
									<option value="text-4xl">4XL</option>
									<option value="text-5xl">5XL</option>
									<option value="text-6xl">6XL</option>
								</select>

								<label className="block mb-2">Font Color</label>
								<select
									value={styles.heading.color}
									onChange={(e) =>
										handleStyleChange("heading", "color", e.target.value)
									}
									className="border border-gray-300 p-2 rounded mb-4 w-full"
								>
									<option value="text-[#2e1885]">Indigo</option>
									<option value="text-[#5278d2]">Blue</option>
									<option value="text-[#5422b2]">Dark Blue</option>
									<option value="text-[#201775]">Navy Blue</option>
									<option value="text-[#009193]">Green</option>
									<option value="text-[#424242]">Grey</option>
									<option value="text-[#136f22]">Dark Green</option>
									<option value="text-green-600">Green</option>
								</select>
								<label className="block mb-2">Font Weight</label>
								<select
									value={styles.heading.fontWeight}
									onChange={(e) =>
										handleStyleChange("heading", "fontWeight", e.target.value)
									}
									className="border border-gray-300 p-2 rounded mb-4 w-full"
								>
									<option value="font-light">Light</option>
									<option value="font-normal">Normal</option>
									<option value="font-medium">Medium</option>{" "}
									<option value="font-semibold">Semi Bold</option>
									<option value="font-bold">Bold</option>
									<option value="font-extrabold">Extra Bold</option>
								</select>
							</div>

							{/* Subheading Customization */}
							<div className="border-y-2 border-blue-400 p-5 rounded-2xl mt-2">
								<h3 className="font-semibold mb-2">Subheading Customization</h3>
								<label className="block mb-2">Font Family</label>
								<select
									value={styles.subheading.font}
									onChange={(e) =>
										handleStyleChange("subheading", "font", e.target.value)
									}
									className="border border-gray-300 p-2 rounded mb-4 w-full"
								>
									<option value="font-sans">Sans</option>
									<option value="font-serif">Serif</option>
									<option value="font-mono">Mono</option>
								</select>
								<label className="block mb-2">Font Size</label>
								<select
									value={styles.subheading.fontSize}
									onChange={(e) =>
										handleStyleChange("subheading", "fontSize", e.target.value)
									}
									className="border border-gray-300 p-2 rounded mb-4 w-full"
								>
									<option value="text-bs">Base</option>
									<option value="text-lg">Large</option>
									<option value="text-xl">XL</option>
									<option value="text-2xl">2XL</option>
									<option value="text-3xl">3XL</option>
									<option value="text-4xl">4XL</option>
									<option value="text-5xl">5XL</option>
									<option value="text-6xl">6XL</option>
								</select>
								<label className="block mb-2">Font Color</label>
								<select
									value={styles.heading.color}
									onChange={(e) =>
										handleStyleChange("subheading", "color", e.target.value)
									}
									className="border border-gray-300 p-2 rounded mb-4 w-full"
								>
									<option value="text-[#2e1885]">Indigo</option>
									<option value="text-[#5278d2]">Blue</option>
									<option value="text-[#5422b2]">Dark Blue</option>
									<option value="text-[#201775]">Navy Blue</option>
									<option value="text-[#009193]">Green</option>
									<option value="text-[#424242]">Grey</option>
									<option value="text-[#136f22]">Dark Green</option>
									<option value="text-green-600">Green</option>
								</select>
								<label className="block mb-2">Font Weight</label>
								<select
									value={styles.subheading.fontWeight}
									onChange={(e) =>
										handleStyleChange(
											"subheading",
											"fontWeight",
											e.target.value
										)
									}
									className="border border-gray-300 p-2 rounded mb-4 w-full"
								>
									<option value="font-light">Light</option>
									<option value="font-normal">Normal</option>
									<option value="font-medium">Medium</option>
									<option value="font-semibold">Semi Bold</option>
									<option value="font-bold">Bold</option>
									<option value="font-extrabold">Extra Bold</option>
								</select>
							</div>

							{/* Paragraph Customization */}
							<div className="border-y-2 border-blue-400 p-5 rounded-2xl mt-2">
								<h3 className="font-semibold mb-2">Paragraph Customization</h3>
								<label className="block mb-2">Font Family</label>
								<select
									value={styles.paragraph.font}
									onChange={(e) =>
										handleStyleChange("paragraph", "font", e.target.value)
									}
									className="border border-gray-300 p-2 rounded mb-4 w-full"
								>
									<option value="font-sans">Sans</option>
									<option value="font-serif">Serif</option>
									<option value="font-mono">Mono</option>
								</select>
								<label className="block mb-2">Font Size</label>
								<select
									value={styles.paragraph.fontSize}
									onChange={(e) =>
										handleStyleChange("paragraph", "fontSize", e.target.value)
									}
									className="border border-gray-300 p-2 rounded mb-4 w-full"
								>
									<option value="text-bs">Base</option>
									<option value="text-lg">Large</option>
									<option value="text-xl">XL</option>
									<option value="text-2xl">2XL</option>
									<option value="text-3xl">3XL</option>
									<option value="text-4xl">4XL</option>
									<option value="text-5xl">5XL</option>
									<option value="text-6xl">6XL</option>
								</select>

								<label className="block mb-2">Font Color</label>
								<select
									value={styles.heading.color}
									onChange={(e) =>
										handleStyleChange("paragraph", "color", e.target.value)
									}
									className="border border-gray-300 p-2 rounded mb-4 w-full"
								>
									<option value="text-[#2e1885]">Indigo</option>
									<option value="text-[#5278d2]">Blue</option>
									<option value="text-[#5422b2]">Dark Blue</option>
									<option value="text-[#201775]">Navy Blue</option>
									<option value="text-[#009193]">Green</option>
									<option value="text-[#424242]">Grey</option>
									<option value="text-[#136f22]">Dark Green</option>
									<option value="text-green-600">Green</option>
								</select>
								<label className="block mb-2">Font Weight</label>
								<select
									value={styles.paragraph.fontWeight}
									onChange={(e) =>
										handleStyleChange("paragraph", "fontWeight", e.target.value)
									}
									className="border border-gray-300 p-2 rounded mb-4 w-full"
								>
									<option value="font-light">Light</option>
									<option value="font-normal">Normal</option>
									<option value="font-medium">Medium</option>
									<option value="font-semibold">Semi Bold</option>
									<option value="font-bold">Bold</option>
									<option value="font-extrabold">Extra Bold</option>
								</select>
							</div>
							<div className="flex justify-end mt-4">
								<button
									onClick={submit}
									className="px-4 py-2 bg-blue-500 focus:outline-none text-white text-lg rounded hover:bg-blue-600"
								>
									Next
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* Resume Preview */}
				<div className="md:mt-4 lg:w-3/5 w-full 2xl:sticky 2xl:top-16 shadow-2xl h-fit">
					<Resume />
				</div>
			</div>
		</div>
	);
}

export default Customization;
