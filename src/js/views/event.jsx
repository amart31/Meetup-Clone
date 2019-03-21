import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

import Moment from "react-moment";
import "moment-timezone";

export class Event extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<Context.Consumer>
					{({ store }) => {
						return (
							<div className="container">
								<div className="jumbotron jumbotron-fluid mt-2 text-light bg-dark">
									<div className="container">
										<div className="row">
											<div className="col-9">
												<p className="lead">
													<Moment format="MMM Do">
														{
															store.events[
																this.props.match
																	.params
																	.theid
															].meta_keys.day
														}
													</Moment>
												</p>
												<h1 className="display-4">
													{
														store.events[
															this.props.match
																.params.theid
														].post_title
													}
												</h1>
												<p className="lead">
													Meetup Name
												</p>
												<Link to="/">
													<span
														className="btn btn-primary btn-sm"
														href="#"
														role="button">
														Back home
													</span>
												</Link>
											</div>
											<div className="col-3">
												<div
													className="container bg-secondary"
													style={{
														height: "6rem",
														width: "10rem"
													}}>
													<h5 className="text-center">
														People Going
													</h5>
													<button
														type="button"
														className="btn btn-primary btn-sm">
														Log in to RSVP
													</button>
													<div className="teext-center">
														<i className="fab fa-twitter fa-sm" />{" "}
														&nbsp;
														<i className="fab fa-facebook fa-sm" />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="container-fluid">
									<div className="row">
										<div className="col">
											<h2 className="display-6">
												Details
											</h2>

											<hr className="my-4" />
										</div>
									</div>
									<div className="row">
										<div className="col-8">
											<p>
												{
													store.events[
														this.props.match.params
															.theid
													].post_content
												}
											</p>
										</div>
										<div className="col-4">
											<Moment
												format="LT"
												parse="HH:mm:ss">
												{
													store.events[
														this.props.match.params
															.theid
													].meta_keys.time
												}
											</Moment>
											<br />
											<Moment format="MMM Do">
												{
													store.events[
														this.props.match.params
															.theid
													].meta_keys.day
												}
											</Moment>
										</div>
									</div>
								</div>
							</div>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}

Event.propTypes = {
	match: PropTypes.object
};
