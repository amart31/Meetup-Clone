import React from "react";
import { Context } from "../store/appContext.jsx";

import "../../styles/footer.css";

export const Footer = () => {
	return (
		<footer className="footer mb-2">
			<div className="container d-inline-flex justify-content-end">
				<Context.Consumer>
					{({ store }) => {
						return store.menu.map((item, index) => (
							<ul className="nav" key={index}>
								<li className="nav-item">
									<a className="nav-link" href={item.url}>
										{item.label}
									</a>
								</li>
							</ul>
						));
					}}
				</Context.Consumer>
			</div>
		</footer>
	);
};
