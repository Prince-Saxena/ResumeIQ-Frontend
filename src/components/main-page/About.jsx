import React from "react";

const About = () => {
	return (
		<>
			{/* Watermark */}
			<div className="fixed inset-0 font-serif flex justify-center items-center text-7xl text-gray-500 opacity-10 pointer-events-none">
				ResumeIQ
			</div>

			{/* Main Content */}
			<div className="w-full mx-auto pt-24 py-16 bg-gradient-to-r from-purple-100 via-indigo-200 to-blue-300">
				{/* About ResumeIQ */}
				<section className="text-center mb-16">
					<h1 className="text-5xl sm:text-6xl font-extrabold text-purple-700 mb-6">
						About ResumeIQ
					</h1>
					<p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
						Hi, I’m <strong>Prince Saxena</strong>, a passionate developer studying
						Computer Science. I specialize in front-end technologies like{" "}
						<strong>React</strong> and <strong>Tailwind CSS</strong>, and I’m diving
						into back-end and AI.
					</p>
				</section>

				{/* What is ResumeIQ */}
				<section className="text-center mb-16">
					<h2 className="text-4xl sm:text-5xl font-semibold text-blue-600 mb-4">
						What is ResumeIQ?
					</h2>
					<p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
						ResumeIQ is your one-stop solution to create stunning resumes easily. With
						the help of the <strong>Gemini API</strong>, you get intelligent suggestions
						for building a resume that stands out. Choose from multiple formats:{" "}
						<strong>PDF</strong> and <strong>DOCX</strong>.
					</p>
				</section>

				{/* What’s Next */}
				<section className="text-center mb-16">
					<h2 className="text-4xl sm:text-5xl font-semibold text-blue-600 mb-4">
						What’s Next?
					</h2>
					<p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
						In the future, I’m integrating AI-powered features for personalized resume
						recommendations, along with more templates and customization options, so you
						can craft a resume tailored to your unique style and profession.
					</p>
				</section>

				{/* Join Me */}
				<section className="text-center">
					<h2 className="text-4xl sm:text-5xl font-semibold text-blue-600 mb-4">
						Join Me on This Journey!
					</h2>
					<p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
						Thank you for exploring ResumeIQ! I’m excited about its potential to help
						users land their dream jobs with a resume they can be proud of. Let’s make
						resume-building simple, smart, and fun together!
					</p>
				</section>
			</div>
		</>
	);
};

export default About;
