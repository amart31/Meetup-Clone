import React from "react";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

export const Footer = () => {
	return (
		<footer className="footer mb-2">
			<div className="container d-inline-flex justify-content-end">
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
