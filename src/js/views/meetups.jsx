import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext.jsx";

export const Meetups = () => {
	return (
		<div className="container-fluid">
			<div className="jumbotron jumbotron-fluid text-light bg-dark mt-2">
				<div className="container" style={{ height: "10rem" }}>
					<div className="text-center">
						<h1 className="display-4">The Meetup Clone</h1>
						<p className="lead">
							This is a mini project created by Andy Martinez
						</p>
						<p className="lead">
							Using: ReactJS, Bootstrap, React-router
						</p>
					</div>
				</div>
			</div>

			<Context.Consumer>
				{({ store, actions }) => {
					return store.meetups.map((item, index) => {
						return (
							<div
								className="d-flex flex-row justify-content-center"
								key={index}>
								<div
									className="card m-3"
									style={{
										width: "30rem",
										height: "10rem"
									}}>
									<Link to={"/meetup/" + item.ID}>
										<div className="card-header">
											{item.post_title}
										</div>
									</Link>
									<div className="card-body d-inline-flex justify-content-start">
										<p className="card-text mr-3">
											{item.post_content}
										</p>
									</div>
								</div>
							</div>
						);
					});
				}}
			</Context.Consumer>
		</div>
	);
};
