import React from "react";
import Moment from "react-moment";
import "moment-timezone";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "../store/appContext.jsx";

import {
	Jumbotron,
	Container,
	Card,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button
} from "reactstrap";

const Events = () => {
	
	return (
		<Container>
			<div>
				<Jumbotron fluid>
					<Container fluid>
						<h1 className="display-3">The Meetup Clone</h1>
						<p className="lead">
							This is a mini project created by Andy Martinez
						</p>
						<p className="lead">
							Using: ReactJS, Bootstrap, React-router
						</p>
					</Container>
				</Jumbotron>
			</div>

			<Context.Consumer>
				{({ store, actions }) => {
					return store.events.map((item, index) => {
						{
							/* let meetupName = actions.getMeetupName(
							item.meta_keys._meetup
						).post_title;  */
						}

						return (
							<div
								className="d-flex flex-row justify-content-center"
								key={index}>
								<Card style={{ width: "30rem" }}>
									<CardBody>
										<CardTitle>
											<Link to={"/event/" + index}>
												{item.post_title}
											</Link>
										</CardTitle>

										<CardSubtitle>
											<Moment
												format="LT"
												parse="HH:mm:ss">
												{item.meta_keys.time}
											</Moment>
										</CardSubtitle>

										<CardSubtitle>
											<Moment format="MMM Do">
												{item.meta_keys.day}
											</Moment>
										</CardSubtitle>

										<CardText>
											{/*<Link
												to={
													"/meetup/" +
													item.meta_keys._meetup
												}>
												{meetupName}
											</Link> */}
										</CardText>
										<Button>Button</Button>
									</CardBody>
								</Card>
							</div>
						);
					});
				}}
			</Context.Consumer>
		</Container>
	);
};

export default Events;
