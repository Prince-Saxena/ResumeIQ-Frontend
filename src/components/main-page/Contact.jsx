import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
const ContactUs = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		alert("Message sent successfully!");
		setName("");
		setEmail("");
		setMessage("");
	};

	return (
		<div className="container mx-auto bg-gray-100 p-8">
			{/* Hero Section */}
			<section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center py-16">
				<h1 className="text-5xl font-extrabold mb-4">Get in Touch</h1>
				<p className="text-lg mb-4">Connect with us for queries or support</p>
			</section>

			{/* Form Section */}
			<section className="py-16 bg-white">
				<h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
					Send Us a Message
				</h2>
				<form
					className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg border-t-4 border-blue-600"
					onSubmit={handleSubmit}
				>
					<div className="mb-4">
						<label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
							Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
							placeholder="Your Name"
							className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>

					<div className="mb-4">
						<label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							placeholder="Your Email"
							className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>

					<div className="mb-6">
						<label className="block text-gray-700 font-semibold mb-2" htmlFor="message">
							Message
						</label>
						<textarea
							id="message"
							name="message"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							required
							placeholder="Your Message"
							className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
						></textarea>
					</div>

					<button
						type="submit"
						className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition duration-300"
					>
						Send Message
					</button>
				</form>
			</section>

			{/* Contact Details Section */}
			<section className="py-16 bg-gray-50 text-center">
				<h2 className="text-3xl font-bold text-blue-700 mb-6">Contact Information</h2>
				<div className="flex justify-center space-x-8">
					<a
						className="text-gray-700 text-3xl"
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
						className="text-gray-800 hover:text-gray-500 text-3xl"
					>
						<FontAwesomeIcon icon={faGithub} />{" "}
					</a>
					<a
						href="https://www.linkedin.com/in/prince-saxena1/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-700 text-3xl hover:text-blue-800"
					>
						<FontAwesomeIcon icon={faLinkedinIn} />
					</a>
				</div>
			</section>

			{/* Footer Section */}
			<footer className="py-8 bg-gray-800 text-white text-center">
				<p>📚 Built with a lot of late-night coding and a dash of snacks!</p>
				<p>
					ResumeIQ | <FontAwesomeIcon icon={faLaptopCode} /> Code, coffee, conquer!
				</p>
			</footer>
		</div>
	);
};

export default ContactUs;
