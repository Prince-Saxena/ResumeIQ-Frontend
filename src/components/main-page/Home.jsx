import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="container bg-gray-50 mx-auto p-4 sm:p-8">
			{/* Hero Section */}
			<section className="text-center py-12 sm:py-16 bg-blue-600 text-white">
				<h1 className="text-3xl sm:text-5xl font-bold mb-4 leading-snug sm:leading-tight">
					Build Your Professional Resume Effortlessly
				</h1>
				<p className="text-base sm:text-lg mb-6">
					Create a polished resume in minutes with our easy-to-use resume builder.
				</p>
				<Link
					to="user-input/personal"
					className="bg-white text-blue-600 py-2 px-6 sm:py-3 sm:px-8 rounded-full font-semibold hover:bg-blue-700 hover:text-white transition-colors duration-300 ease-in-out"
				>
					Get Started
				</Link>
			</section>

			{/* Features Section */}
			<section className="py-12 sm:py-16">
				<h2 className="text-2xl sm:text-3xl font-semibold text-center text-blue-600 mb-8 sm:mb-12">
					Why Choose Us
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
					<div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
						<h3 className="text-xl sm:text-2xl font-bold text-blue-600 mb-4">
							Easy to Use
						</h3>
						<p>
							Our user-friendly interface allows you to build a professional resume
							quickly and easily.
						</p>
					</div>
					<div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
						<h3 className="text-xl sm:text-2xl font-bold text-blue-600 mb-4">
							Downloadable Formats
						</h3>
						<p>
							Download your resume in various formats, including PDF and DOCX, for
							easy sharing and printing.
						</p>
					</div>
					<div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
						<h3 className="text-xl sm:text-2xl font-bold text-blue-600 mb-4">
							Instant Download
						</h3>
						<p>
							Once your resume is ready, download it instantly in multiple formats
							like PDF and DOC.
						</p>
					</div>
				</div>
			</section>

			{/* Call to Action Section */}
			<section className="text-center py-12 sm:py-16 bg-blue-600 text-white">
				<h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">
					Start Building Your Resume Today
				</h2>
				<p className="text-base sm:text-lg mb-4 sm:mb-6">
					Join thousands of users who have successfully created their resumes with ease!
				</p>
				<Link
					to="/sign-in"
					className="bg-white text-blue-600 py-2 px-6 sm:py-3 sm:px-8 rounded-full font-semibold hover:bg-blue-700 hover:text-white transition-colors duration-300 ease-in-out"
				>
					Sign In & Begin
				</Link>
			</section>

			{/* Footer Section */}
			<footer className="py-8 bg-gray-800 text-white text-center">
				<p>⚡ Powered by the brilliance of Prince Saxena!</p>
				<p>
					ResumeIQ | <FontAwesomeIcon icon={faBolt} /> Electrifying the tech scene!
				</p>
			</footer>
		</div>
	);
};

export default Home;
