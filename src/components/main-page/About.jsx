import React from "react";

const About = () => {
	return (
		<div className="container mx-auto p-8 bg-gray-50">
			{/* About Section */}
			<section className="mb-8">
				<h1 className="text-4xl font-bold text-blue-700 mb-4">About ResumeIQ</h1>
				<p className="text-lg text-gray-700 mb-4">
					Hey there! I’m <strong>Prince Saxena</strong>, and I’m currently studying for my
					Bachelor of Technology in Computer Science. I’ve picked up some skills in
					frontend development, especially with <strong>React</strong> and{" "}
					<strong>Tailwind CSS</strong>. I’m also exploring backend development these
					days!
				</p>
				<p className="text-lg text-gray-700 mb-4">
					I used to be really into cybersecurity, but things changed, and now I’m all
					about full-stack web development. I also have a growing interest in{" "}
					<strong>AI</strong> and <strong>ML</strong>, and after mastering full-stack, I
					definitely want to dive deeper into those areas.
				</p>
			</section>

			{/* Project Purpose */}
			<section className="mb-8">
				<h2 className="text-3xl font-semibold text-blue-600 mb-2">What is ResumeIQ?</h2>
				<p className="text-lg text-gray-700 mb-4">
					Welcome to ResumeIQ! This project is all about helping students and freshers
					create amazing resumes quickly. I’m using the <strong>Gemini API</strong> to
					give you suggestions on how to build your resume, so you can have a standout
					document without the hassle.
				</p>
				<p className="text-lg text-gray-700 mb-4">
					Right now, you can create a resume and download it in two formats:{" "}
					<strong>PDF</strong> and <strong>DOCX</strong>. My aim is to make ResumeIQ a
					go-to tool for anyone looking to put together a great resume, no matter their
					field!
				</p>
			</section>

			{/* Future Plans */}
			<section className="mb-8">
				<h2 className="text-3xl font-semibold text-blue-600 mb-2">What’s Next?</h2>
				<p className="text-lg text-gray-700 mb-4">
					In the future, I plan to create my own AI model to help with resume building,
					making it even better. I also want to add more templates and customization
					options so that everyone can make their resume look just the way they want it.
				</p>
			</section>

			{/* Conclusion */}
			<section>
				<h2 className="text-3xl font-semibold text-blue-600 mb-2">
					Join Me on This Journey!
				</h2>
				<p className="text-lg text-gray-700 mb-4">
					Thanks for checking out ResumeIQ! I’m excited about what’s to come and how this
					project can help people land their dream jobs. Let’s make resume building easy
					and fun together!
				</p>
			</section>
		</div>
	);
};

export default About;
