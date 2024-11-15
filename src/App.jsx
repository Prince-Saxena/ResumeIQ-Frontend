import React from "react";
import Nav from "./components/main-page/Nav";
import { Outlet } from "react-router-dom";
// import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";

import "./App.css";

function App() {
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

	return (
		<>
			{/* <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/"> */}
				{" "}
				<Nav></Nav>
				<div className="flex items-center justify-center ">
					<Outlet></Outlet>
				</div>
				{/* <Home></Home> */}
				{/* <Template></Template> */}
				{/* <ResumeInput></ResumeInput> */}
			{/* </ClerkProvider> */}
		</>
	);
}

export default App;

