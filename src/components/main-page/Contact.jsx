import React, { useState } from "react";

const ContactUs = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// Here you can handle the form submission, like sending the data to an API
		alert("Message sent successfully!");
		setName("");
		setEmail("");
		setMessage("");
	};

	return (
		<div className="container bg-gray-50 mx-auto p-8">
			{/* Contact Us Hero Section */}
			<section className="text-center py-16 bg-blue-600 text-white">
				<h1 className="text-5xl font-bold mb-4 leading-tight">Contact Us</h1>
				<p className="text-lg mb-6">
					We'd love to hear from you! Fill out the form below to get in touch with us.
				</p>
			</section>

			{/* Contact Form Section */}
			<section className="py-16">
				<h2 className="text-3xl font-semibold text-center text-blue-600 mb-12">
					Send Us a Message
				</h2>
				<form
					className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg"
					onSubmit={handleSubmit}
				>
					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="name"
						>
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
							className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
						/>
					</div>

					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="email"
						>
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
							className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
						/>
					</div>

					<div className="mb-6">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="message"
						>
							Message
						</label>
						<textarea
							id="message"
							name="message"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							required
							placeholder="Your Message"
							className="w-full p-3 border rounded resize-none h-32 focus:ring-2 focus:ring-blue-500 focus:outline-none"
						></textarea>
					</div>

					<button
						type="submit"
						className="w-full bg-blue-600 text-white py-3 px-8 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 ease-in-out"
					>
						Send Message
					</button>
				</form>
			</section>

			{/* Contact Information Section */}
			<section className="py-16 bg-blue-600 text-white text-center">
				<h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
				<p className="text-lg mb-6">
					Email us at:{" "}
					<a href="mailto:support@yourresumebuilder.com" className="underline">
						support@yourresumebuilder.com
					</a>
				</p>
				<p className="text-lg">Call us: (123) 456-7890</p>
			</section>

			{/* Footer Section */}
			<footer className="py-8 bg-gray-800 text-white text-center">
				<p>© 2024 YourResumeBuilder. All rights reserved.</p>
			</footer>
		</div>
	);
};

export default ContactUs;
