import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

import Moment from "react-moment";
import "moment-timezone";

export class Meetup extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="container-fluid">
					<Context.Consumer>
						{({ store, actions }) => {
							return (
								<div className="container">
									<div className="jumbotron jumbotron-fluid mt-2 text-light bg-dark">
										<div className="container">
											<div className="d-flex flex-row-reverse justify-content-between">
												<div className="p-2">
													<h1 className="display-4">
														{
															store.meetups
																.post_title
														}
													</h1>
													<p className="lead">
														Miami, FL
													</p>
													<Link to="/">
														<span
															className="btn btn-primary btn-sm"
															href="/"
															role="button">
															Back home
														</span>
													</Link>
												</div>
												<div className="p-2">
													<img src="https://via.placeholder.com/400x300.png" />
												</div>
											</div>
										</div>
									</div>
								</div>
							);
						}}
					</Context.Consumer>
				</div>
				<div className="container-fluid">
					<Context.Consumer>
						{({ store, actions }) => {
							return actions
								.meetupEventsList(this.props.match.params.theid)
								.map((item, index) => {
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
															{
																item.meta_keys
																	.time
															}
														</Moment>
													</p>
													<div className="d-block ml-3">
														<Link
															to={
																"/event/" +
																index
															}>
															<h5 className="card-title">
																{
																	item.post_title
																}
															</h5>
														</Link>
														<Link
															to={
																"/meetup/" +
																index
															}>
															<h6 className="card-subtitle">
																{
																	actions.getMeetupName(
																		item
																			.meta_keys
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
				</div>
			</div>
		);
	}
}

Meetup.propTypes = {
	match: PropTypes.object
};

/* 
{ store.meetups[ this.props.match .params .theid ] .post_title }
*/
