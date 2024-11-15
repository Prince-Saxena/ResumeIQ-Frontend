import React from "react";
import { createRoot } from "react-dom/client";
import { ResumeInfoProvider } from "./context/ResumeContext.jsx"; 
import {
	RouterProvider,
	createHashRouter,
	Route,
	createRoutesFromElements,
} from "react-router-dom";
import {
	Home,
	About,
	ResumeInput,
	Personal,
	Education,
	Workexp,
	Skills,
	Project,
	ContactUs,
	Services,
} from "./components/index.js";
import App from "./App.jsx";
import "./index.css";
import Summary from "./components/Routes/Summary.jsx";

const router = createHashRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route index element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="contact" element={<ContactUs />} />
			<Route path="services" element={<Services />} />
			<Route path="user-input" element={<ResumeInput />}>
				<Route path="personal" element={<Personal />} />
				<Route path="project" element={<Project />} />
				<Route path="summary" element={<Summary />} />
				<Route path="education" element={<Education />} />
				<Route path="workexp" element={<Workexp />} />
				<Route path="skills" element={<Skills />} />
			</Route>
		</Route>
	)
);

createRoot(document.getElementById("root")).render(
	<ResumeInfoProvider>
		<RouterProvider router={router} />
	</ResumeInfoProvider>
);
