import React, { useRef, useState ,useContext} from "react";
import Resume from "../Resume/Resume";
import { ResumeInfoContext } from "../../context/ResumeContext.jsx";

import html2pdf from "html2pdf.js";
import { useUser } from "../../context/UserContext.jsx";
import axios from "axios";
import { saveURL } from "../../assets/URL.js";

export default function Show() {
		const { formData} = useContext(ResumeInfoContext);
	
	const resumeRef = useRef();
	const { user } = useUser();
	const [loader, setLoader] = useState(false);

	const handleDownload = () => {
		const element = resumeRef.current;
		const options = {
			margin: 0,
			filename: `${user.fullname}'sResume.pdf`,
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

	const handleSaveToServer = async () => {
		setLoader(true);
		const element = resumeRef.current;
		console.log(element);

		const options = {
			margin: 0,
			filename: `${user.fullname}'sResume.pdf`,
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

		// Generate the PDF Blob
		const pdfBlob = await html2pdf().from(element).set(options).outputPdf("blob");
		if (!pdfBlob) {
			alert("Failed to generate PDF. Please try again.");
			return;
		}
		console.log(pdfBlob);

		if (!resumeRef.current) {
			alert("Resume element is not available.");
			return;
		}

		// Create a File object from the PDF blob
		const file = new File([pdfBlob], `${user.fullname}'sResume.pdf`, {
			type: "application/pdf",
		});

		console.log(file, user._id);

		// Prepare data to send with the request
		const data = new FormData();
		data.append("file", file);
		data.append("title", formData.title);
		data.append("userId", `${user._id}`); // Attach the user ID

		// Send to Server with axios
		try {
			const response = await axios.post(saveURL, data, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
			setLoader(false);

			console.log(response);

			if (response.status === 200) {
				alert("Resume saved successfully on the server!");
			} else {
				alert("Failed to save the resume on the server.");
			}
		} catch (error) {
			console.error("Error saving resume:", error);
			alert("An error occurred while saving the resume.", error);
		}
	};

	return (
		<div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-purple-50 via-indigo-100 to-blue-200">
			<div className="flex flex-col-reverse lg:flex-row items-start gap-6 p-4 lg:p-8 lg:pt-20 max-w-6xl w-full">
				{/* Left Side: Message and Save Option */}
				<div className="lg:w-2/5 w-full bg-gradient-to-b  lg:mt-0 sticky lg:top-20 from-indigo-500 via-purple-500 to-pink-500 p-6 rounded-lg shadow-lg text-white">
					<h2 className="text-4xl font-bold mb-4">Your Resume</h2>
					<p className="text-lg mb-6">
						Preview and save your personalized resume. It's easy and simple!
					</p>
					<div className="flex gap-4">
						<button
							className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-lg shadow-md hover:bg-indigo-600 hover:text-white transition-all duration-300"
							onClick={handleDownload}
						>
							Downlaod
						</button>
						<button
							className="px-6 py-3 bg-white text-green-600 font-medium rounded-lg shadow-md hover:bg-green-600 hover:text-white transition-all duration-300"
							onClick={handleSaveToServer}
						>
							Save
						</button>
					</div>
				</div>

				{loader && (
					<div className="fixed w-full min-h-screen z-10 inset-0 bg-transparent bg-opacity-50 backdrop-blur-md h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
						<div className="w-16 h-16 border-4 border-t-transparent border-blue-500 border-solid rounded-full animate-spin"></div>
					</div>
				)}

				{/* Right Side: Scaled Resume */}
				<div className="lg:w-3/5 w-full mt-20 lg:mt-0 bg-white rounded-lg shadow-2xl border overflow-hidden p-6">
					<Resume ref={resumeRef} id="resume" />
				</div>
			</div>
		</div>
	);
}
