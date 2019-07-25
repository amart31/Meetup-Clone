import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
	return (
		<footer className="footer mt-2 p-2 bg-dark">
			<div className="container d-inline-flex justify-content-end">
				<Link to="/login">
					<span>Sign Up</span>
				</Link>
				&nbsp;
				<Link to="/">
					<span>Events</span>
				</Link>{" "}
				&nbsp;
				<Link to="/meetups">
					<span>Meetups</span>
				</Link>
			</div>
		</footer>
	);
};
