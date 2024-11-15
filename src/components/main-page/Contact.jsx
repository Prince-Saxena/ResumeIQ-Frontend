import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
	const [message, setMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		const mailToLink = `mailto:princesaxena202020@gmail.com?subject=Contact Us&body=${encodeURIComponent(
			message
		)}`;
		window.location.href = mailToLink;
		setMessage(""); // Clear message after submission
	};

	return (
		<>
			{/* Main Content */}
			<div className="w-full mx-auto pt-24 py-16 bg-gradient-to-r from-purple-100 via-indigo-200 to-blue-300">
				{/* Hero Section */}
				<section className="text-center mb-16">
					<h1 className="text-5xl sm:text-6xl font-extrabold text-purple-700 mb-6">
						Get in Touch
					</h1>
					<p className="text-lg sm:text-xl text-blue-600 mb-4">
						Connect with us for queries or support
					</p>
				</section>

				{/* Form Section */}
				<section className="text-center mb-16">
					<h2 className="text-3xl font-bold text-purple-700 mb-10">Send Us a Message</h2>
					<form
						className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg border-t-4 border-indigo-400 text-purple-600"
						onSubmit={handleSubmit}
					>
						<div className="mb-6">
							<textarea
								id="message"
								name="message"
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								required
								placeholder="Your Message"
								className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 h-32 resize-none"
							></textarea>
						</div>

						<button
							type="submit"
							className="w-full bg-purple-700 text-white py-3 rounded-lg font-semibold hover:bg-purple-800 transition duration-300"
						>
							Send Message
						</button>
					</form>
				</section>

				{/* Contact Details Section */}
				<section className="text-center mb-16">
					<h2 className="text-3xl font-bold text-purple-700 mb-6">Contact Information</h2>
					<div className="flex justify-center space-x-8">
						<a
							className="text-blue-700 text-3xl"
							href="mailto:princesaxena202020@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon icon={faEnvelope} />
						</a>
						<a
							href="https://github.com/Prince-Saxena"
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-800 hover:text-blue-500 text-3xl"
						>
							<FontAwesomeIcon icon={faGithub} />
						</a>
						<a
							href="https://www.linkedin.com/in/prince-saxena1/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-purple-700 text-3xl hover:text-purple-800"
						>
							<FontAwesomeIcon icon={faLinkedinIn} />
						</a>
					</div>
				</section>

				{/* Footer Section */}
				<footer className="py-4 bg-gradient-to-r from-purple-100 via-indigo-100 to-blue-300 text-white text-stroke text-center">
					<p className="text-blue-700">
						📚 Built with a lot of late-night coding and a dash of snacks!
					</p>
					<p>
						ResumeIQ | <FontAwesomeIcon icon={faLaptopCode} /> Code, coffee, conquer!
					</p>
				</footer>
			</div>
		</>
	);
};

export default ContactUs;
