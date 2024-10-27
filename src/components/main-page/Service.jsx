import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
const Services = () => {
	return (
		<div className="container mx-auto p-8 bg-gray-50">
			{/* Hero Section */}
			<section className="text-center py-16 bg-blue-600 text-white">
				<h1 className="text-5xl font-bold mb-4 leading-tight">Our Services</h1>
				<p className="text-lg mb-6">Helping you create impactful resumes with ease.</p>
			</section>

			{/* Services Section */}
			<section className="py-16">
				<h2 className="text-3xl font-semibold text-center text-blue-600 mb-12">
					What We Offer
				</h2>
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{/* Service 1: Resume Builder */}
					<div className="bg-white p-8 rounded-lg shadow-lg text-center">
						<h3 className="text-2xl font-semibold text-blue-600 mb-4">
							Resume Builder
						</h3>
						<p className="text-gray-700">
							Quickly create a professional resume by filling in your details. Our
							builder guides you step-by-step to produce a standout resume.
						</p>
					</div>

					{/* Service 3: Downloadable Formats */}
					<div className="bg-white p-8 rounded-lg shadow-lg text-center">
						<h3 className="text-2xl font-semibold text-blue-600 mb-4">
							Downloadable Formats
						</h3>
						<p className="text-gray-700">
							Download your resume in various formats, including PDF and DOCX, for
							easy sharing and printing.
						</p>
					</div>

					{/* Service 5: One-Click Sharing */}
					<div className="bg-white p-8 rounded-lg shadow-lg text-center">
						<h3 className="text-2xl font-semibold text-blue-600 mb-4">
							One-Click Sharing
						</h3>
						<p className="text-gray-700">
							Instantly share your resume with recruiters and friends with our
							one-click sharing feature, making the job search even easier.
						</p>
					</div>
				</div>
			</section>

			{/* Call to Action Section */}
			<section className="text-center py-16 bg-blue-600 text-white">
				<h2 className="text-3xl font-semibold mb-6">Ready to create your resume?</h2>
				<p className="text-lg mb-6">
					Get started with ResumeIQ and create a resume that stands out.
				</p>
				<a
					href="#"
					className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors duration-300"
				>
					Start Now
				</a>
			</section>

			{/* Footer Section */}
			<footer className="py-8 bg-gray-800 text-white text-center">
				<p>💻 Built by the next tech legend in training!</p>
				<p>
					ResumeIQ |{" "}
					<FontAwesomeIcon icon={faUserGraduate} /> Learning, coding, and conquering!
				</p>
			</footer>
		</div>
	);
};

export default Services;
