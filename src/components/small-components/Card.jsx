import React, { useState } from "react";
import axios from "axios";
import { useUser } from "../../context/UserContext.jsx";
import { delURL } from "../../assets/URL.js";

function Card({ title, publicId }) {
	const { user } = useUser();
	const userId = user._id;
	const [isDeleting, setIsDeleting] = useState(false);

	const handleDelete = async () => {
		if (window.confirm("Are you sure you want to delete this resume?")) {
			try {
				if (!publicId) {
					alert("Invalid publicId");
					return;
				}

				setIsDeleting(true);

				const response = await axios.delete(delURL, {
					params: {
						publicId,
						userId,
					},
				});

				if (response.status === 200) {
					alert("Resume deleted successfully!");
				} else {
					alert(response.data.message || "Error deleting file");
				}
			} catch (error) {
				console.error("Error deleting file:", error);
				alert(error.response?.data?.message || "Error deleting file from server");
			} finally {
				setIsDeleting(false);
				localStorage.clear();
				window.location.reload();
			}
		}
	};

	return (
		<div className="w-60 h-80 bg-gradient-to-r from-white to-gray-100 rounded-lg shadow-xl border border-gray-200 overflow-hidden flex flex-col justify-between items-center p-4 hover:scale-105 transition-transform">
			<div className="text-center">
				<h3 className="text-gray-900 font-bold text-lg truncate w-full px-2">
					{title || "Can't Get"}
				</h3>
				<div className="mt-2">
					<a
						href={`https://res.cloudinary.com/resumeiq/raw/upload/v1733672078/${publicId}.pdf`}
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-600 font-semibold hover:text-blue-800 transition"
					>
						View Resume
					</a>
				</div>
			</div>
			<div className="mt-6 flex justify-center w-full space-x-4">
				<button
					onClick={handleDelete}
					className={`text-white font-medium rounded-full px-5 py-2 shadow-md transition-transform transform hover:scale-105 ${
						isDeleting ? "bg-red-300 cursor-not-allowed" : "bg-red-500 hover:bg-red-600"
					}`}
					disabled={isDeleting}
				>
					{isDeleting ? "Deleting..." : "Delete"}
				</button>
			</div>
		</div>
	);
}

export default Card;
