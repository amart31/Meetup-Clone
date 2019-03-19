import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext.jsx";

import "../../styles/demo.css";

export class Events extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="jumbotron w-100" style={{ height: "20rem" }}>
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

				<Context.Consumer>
					{({ store, actions }) => {
						console.log(store.events);
						return store.events.map((item, index) => {
							return (
								<div
									className="d-flex flex-row justify-content-center"
									key={index}>
									<div
										className="card m-3"
										style={{ width: "30rem" }}>
										<div className="card-header">
											{item.meta_keys.day}
										</div>
										<div className="card-body d-inline-flex justify-content-start">
											<p className="card-text mr-3">
												{item.meta_keys.time}
											</p>
											<div className="d-block ml-3">
												<h5 className="card-title">
													<a
														href={
															"/single/" + index
														}>
														{item.post_title}
													</a>
												</h5>
												<h6 className="card-subtitle">
													<a
														href={
															"/single/" + index
														}>
														{" "}
														{item.post_title}
													</a>
												</h6>
											</div>
										</div>
									</div>
								</div>
							);
						});
					}}
				</Context.Consumer>

				<br />
				<Link to="/">
					<button className="btn btn-primary">Back home</button>
				</Link>
			</div>
		);
	}
}
