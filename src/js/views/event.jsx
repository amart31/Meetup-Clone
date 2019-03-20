import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export class Event extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="jumbotron jumbotron-fluid">
					<div className="container">
						<h1 className="display-4">
							This will show the events element
						</h1>
						<p className="lead">Description</p>
						<Link to="/">
							<span
								className="btn btn-primary btn-lg"
								href="#"
								role="button">
								Back home
							</span>
						</Link>
					</div>
				</div>
				<Context.Consumer>
					{({ store }) => {
						return (
							<div className="container-fluid">
								<h2 className="display-4">
									{
										store.events[
											this.props.match.params.theid
										].post_title
									}
								</h2>

								<hr className="my-4" />
								<p>
									{
										store.events[
											this.props.match.params.theid
										].post_content
									}
								</p>
								<br />

								<Link to="/">
									<span
										className="btn btn-primary btn-lg"
										href="#"
										role="button">
										Back home
									</span>
								</Link>
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
