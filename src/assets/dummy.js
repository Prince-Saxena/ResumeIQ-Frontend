const resumeData = {
	firstname: "John",
	lastname: "Doe",
	title: "Software Developer",
	email: "johndoe@example.com",
	pincode: "101100",
	phone: "+1 123 456 7890",
	address: "123 Main St, City, Country",
	summary:
		"Highly skilled software developer with 5+ years of experience in web development, specializing in JavaScript frameworks such as React, Node.js, and modern front-end technologies. Passionate about building user-friendly, efficient applications and constantly learning new technologies to solve complex problems.",
	workExperience: [
		{
			id: 1,
			position: "Software Developer",
			company: "ABC Corporation",
			start: "2020",
			end: "Present",
			responsibilities:
				"Developed user interfaces using React.js and Redux. Led the migration of the company's legacy system to a modern stack. Collaborated with cross-functional teams to ensure high-quality code delivery.",
		},
		{
			id: 2,
			position: "Junior Web Developer",
			company: "XYZ Solutions",
			start: "2018",
			end: "2020",
			responsibilities:
				"Maintained and updated company websites using HTML, CSS, and JavaScript. Worked closely with designers to create responsive, accessible interfaces. Contributed to back-end development using Node.js and Express.",
		},
	],
	education: [
		{
			id: 1,
			degree: "Bachelor of Technology",
			major: "Computer Science",
			institution: "XYZ University",
			start: "2020",
			end: "2024",
			location: "Delhi, India",
		},
	],

	// Add your projects section
	projects: [
		{
			id: 1,
			title: "E-commerce Website",
			role: "Full-Stack Developer",
			technologies: ["React", "Node.js", "MongoDB", "Express"],
			link: "https://example.com/project",
			description:
				"Developed a fully-functional e-commerce website with user authentication, product search, and payment gateway integration.",
		},
		{
			id: 2,
			title: "Portfolio Website",
			role: "Frontend Developer",
			technologies: ["HTML", "CSS", "JavaScript"],
			link: "https://example.com/portfolio",
			description:
				"Created a personal portfolio website showcasing projects and skills with a responsive and modern design.",
		},
	],

	skillsData: [
		{
			id: 1,
			category: "Programming Languages & Frameworks",
			skills: ["JavaScript", "React.js", "Redux", "Node.js"],
		},
		{
			id: 2,
			category: "Web Technologies",
			skills: ["HTML5", "CSS3", "SASS", "Tailwind CSS"],
		},
	],

	certifications: [
		"Certified React Developer - XYZ Academy",
		"Full-Stack Web Development Certification - ABC Online Bootcamp",
	],
};

export default resumeData;
