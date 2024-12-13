import React from "react";
import { createRoot } from "react-dom/client";
import { ResumeInfoProvider } from "./context/ResumeContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";
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
	SignIn,
	SignUp,
	Dashboard,
	Show,
	Summary,
	Customization,
	ProtectedRoute,
} from "./components/index.js";
import App from "./App.jsx";
import "./index.css";

const router = createHashRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route index element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="contact" element={<ContactUs />} />
			<Route path="services" element={<Services />} />
			<Route path="signin" element={<SignIn />} />
			<Route path="signup" element={<SignUp />} />
			<Route
				path="/dashboard"
				element={
					<ProtectedRoute>
						<Dashboard />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/share&save"
				element={
					<ProtectedRoute>
						<Show />
					</ProtectedRoute>
				}
			/>
			<Route
				path="/user-input"
				element={
					<ProtectedRoute>
						<ResumeInput />
					</ProtectedRoute>
				}
			>
				<Route path="personal" element={<Personal />} />
				<Route path="project" element={<Project />} />
				<Route path="summary" element={<Summary />} />
				<Route path="education" element={<Education />} />
				<Route path="workexp" element={<Workexp />} />
				<Route path="skills" element={<Skills />} />
			</Route>
			{/* <Route path="share&save" element={<Show />} /> */}
			<Route path="customization" element={<Customization />} />

			{/* <Route path="user-input" element={<ResumeInput />}>
				<Route path="personal" element={<Personal />} />
				<Route path="project" element={<Project />} />
				<Route path="summary" element={<Summary />} />
				<Route path="education" element={<Education />} />
				<Route path="workexp" element={<Workexp />} />
				<Route path="skills" element={<Skills />} />
			</Route> */}
		</Route>
	)
);

createRoot(document.getElementById("root")).render(
	<ResumeInfoProvider>
		<UserProvider>
			<RouterProvider router={router} />
		</UserProvider>
	</ResumeInfoProvider>
);
