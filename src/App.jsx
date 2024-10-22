import React from "react";
import Nav from "./components/main-page/Nav";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<>
			<Nav></Nav>
			<div className="flex items-center justify-center ">
				<Outlet></Outlet>
			</div>
			{/* <Home></Home> */}
			{/* <Template></Template> */}
			{/* <ResumeInput></ResumeInput> */}
		</>
	);
}

export default App;
