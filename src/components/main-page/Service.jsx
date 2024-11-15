import React from "react";

const Services = () => {
	return (
		<>
			{/* Watermark */}
			<div className="fixed inset-0 font-serif flex justify-center items-center text-7xl text-gray-500 opacity-10 pointer-events-none">
				ResumeIQ
			</div>

			{/* Main Content */}
			<div className="w-full mx-auto pt-24 py-16 bg-gradient-to-r from-purple-100 via-indigo-200 to-blue-300">
				{/* Our Services */}
				<section className="text-center mb-16">
					<h1 className="text-5xl sm:text-6xl font-extrabold text-purple-700 mb-6">
						Our Services
					</h1>
					<p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
						We offer a range of tools and services to help you create and perfect your
						resume. From easy-to-use templates to smart suggestions, we make resume
						building faster and better.
					</p>
				</section>

				{/* Services List */}
				<section className="text-center mb-16">
					<h2 className="text-4xl sm:text-5xl font-semibold text-blue-600 mb-4">
						What We Offer
					</h2>
					<p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
						Our services include customizable templates, PDF and DOCX download options,
						and the ability to share your resume directly with recruiters. We also
						provide advanced AI-powered suggestions to help enhance your resume.
					</p>
				</section>

				{/* Service 1: Resume Builder */}
				<section className="text-center mb-16">
					<h2 className="text-4xl sm:text-5xl font-semibold text-blue-600 mb-4">
						Resume Builder
					</h2>
					<p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
						Our intuitive resume builder lets you create a professional resume step by
						step. Choose from a variety of templates and formats to ensure your resume
						looks great and stands out.
					</p>
				</section>

				{/* Service 2: Download Options */}
				<section className="text-center mb-16">
					<h2 className="text-4xl sm:text-5xl font-semibold text-blue-600 mb-4">
						Download Options
					</h2>
					<p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
						Once your resume is ready, you can download it in multiple formats,
						including PDF and DOCX, making it easy to share and apply for jobs anywhere.
					</p>
				</section>

				{/* Service 3: One-Click Sharing */}
				<section className="text-center mb-16">
					<h2 className="text-4xl sm:text-5xl font-semibold text-blue-600 mb-4">
						One-Click Sharing
					</h2>
					<p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
						Share your resume directly with potential employers with just one click. Our
						platform makes it easy for you to get your resume in front of the right
						people quickly.
					</p>
				</section>

				{/* Call to Action */}
				<section className="text-center mb-16">
					<h2 className="text-4xl sm:text-5xl font-semibold text-blue-600 mb-4">
						Ready to Create Your Resume?
					</h2>
					<p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto mb-6">
						Join us today and start building a standout resume that will help you land
						your dream job!
					</p>
					<a
						href="#"
						className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
					>
						Start Now
					</a>
				</section>
			</div>
		</>
	);
};

export default Services;
