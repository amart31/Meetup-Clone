import React from "react";
import Moment from "react-moment";
import "moment-timezone";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext.jsx";

import "../../styles/demo.css";

export class Events extends React.Component {
	render() {
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
						return store.events.map((item, index) => {
							return (
								<div
									className="d-flex flex-row justify-content-center"
									key={index}>
									<div
										className="card m-3"
										style={{ width: "30rem" }}>
										<div className="card-header">
											<Moment format="MMM Do">
												{item.meta_keys.day}
											</Moment>
										</div>
										<div className="card-body d-inline-flex justify-content-start">
											<p className="card-text mr-3">
												<Moment
													format="LT"
													parse="HH:mm:ss">
													{item.meta_keys.time}
												</Moment>
											</p>
											<div className="d-block ml-3">
												<Link to={"/event/" + index}>
													<h5 className="card-title">
														{item.post_title}
													</h5>
												</Link>
												<Link
													to={
														"/meetup/" +
														item.meta_keys._meetup
													}>
													<h6 className="card-subtitle">
														{
															actions.getMeetupName(
																item.meta_keys
																	._meetup
															).post_title
														}
													</h6>
												</Link>
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

Events.propTypes = {
	match: PropTypes.object
};
