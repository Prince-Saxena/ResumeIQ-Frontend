import React from "react";
import { HeroSection } from "../index.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="container bg-gray-50 pt-3">
			{/* Hero Section */}
			<HeroSection></HeroSection>

			{/* Features Section */}

			<section className="py-12 sm:py-16 bg-gradient-to-b from-white to-blue-100 text-gray-800">
				<h2 className="text-2xl sm:text-3xl font-semibold text-center text-blue-700 mb-8 sm:mb-12">
					Why Choose Us
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
					<div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
						<h3 className="text-xl sm:text-2xl font-bold text-blue-600 mb-4">
							Easy to Use
						</h3>
						<p className="text-gray-700">
							Our user-friendly interface allows you to build a professional resume
							quickly and easily.
						</p>
					</div>
					<div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
						<h3 className="text-xl sm:text-2xl font-bold text-blue-600 mb-4">
							Downloadable Formats
						</h3>
						<p className="text-gray-700">
							Download your resume in various formats, including PDF and DOCX, for
							easy sharing and printing.
						</p>
					</div>
					<div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
						<h3 className="text-xl sm:text-2xl font-bold text-blue-600 mb-4">
							Instant Download
						</h3>
						<p className="text-gray-700">
							Once your resume is ready, download it instantly in multiple formats
							like PDF and DOC.
						</p>
					</div>
				</div>
			</section>

			{/* Call to Action Section */}
			<section className="text-center py-12 sm:py-16 bg-gradient-to-r from-teal-50 to-teal-100 text-gray-800">
				<h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-teal-700">
					Start Building Your Resume Today
				</h2>
				<p className="text-base sm:text-lg mb-4 sm:mb-6 text-gray-600">
					Join thousands of users who have successfully created their resumes with ease!
				</p>
				<Link
					to="/sign-in"
					className="bg-white text-teal-600 py-2 px-6 sm:py-3 sm:px-8 rounded-full font-semibold hover:bg-teal-600 hover:text-white transition-colors duration-300 ease-in-out"
				>
					Sign In & Begin
				</Link>
			</section>

			{/* Footer Section */}
			<footer className="py-8 bg-gradient-to-r from-teal-50 to-teal-100 text-gray-800 text-center">
				<p className="text-gray-700">⚡ Powered by the brilliance of Prince Saxena!</p>
				<p className="text-teal-600">ResumeIQ | Electrifying the tech scene!</p>
			</footer>
		</div>
	);
};

export default Home;
