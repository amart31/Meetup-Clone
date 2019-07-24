import React from "react";
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	FormGroup,
	Label,
	Input
} from "reactstrap";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";

export class LoginModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false,
			user: "",
			pass: ""
		};

		this.user = React.createRef();
		this.pass = React.createRef();

		this.toggle = this.toggle.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}
	toggle() {
		this.setState(prevState => ({
			modal: !prevState.modal
		}));
	}

	render() {
		return (
			<div>
				<Button color="danger" onClick={this.toggle}>
					Login
				</Button>

				<Context.Consumer>
					{({ store, actions }) => {
						if (store.session.isLoggedIn === true) {
							return (
								<Modal
									isOpen={this.state.modal}
									toggle={this.toggle}>
									<ModalHeader toggle={this.toggle}>
										Login
									</ModalHeader>
									<ModalBody>
										{"Hello " + store.session.user_nicename}
									</ModalBody>
									<ModalFooter>
										<Button
											color="primary"
											onClick={this.toggle}>
											Login
										</Button>{" "}
										<Button
											color="secondary"
											onClick={this.toggle}>
											Cancel
										</Button>
									</ModalFooter>
								</Modal>
							);
						} else {
							return (
								<Modal
									isOpen={this.state.modal}
									toggle={this.toggle}>
									<ModalHeader toggle={this.toggle}>
										Login
									</ModalHeader>

									<ModalBody>
										<FormGroup>
											<Label for="username">
												Username
											</Label>
											<Input
												type="text"
												name="username"
												id="username"
												placeholder="Your username"
											/>
										</FormGroup>
										<FormGroup>
											<Label for="password">
												Password
											</Label>
											<Input
												type="password"
												name="password"
												id="password"
												placeholder="Your password"
											/>
										</FormGroup>
									</ModalBody>
									<ModalFooter>
										<Button
											color="primary"
											onClick={actions.login}>
											Login
										</Button>{" "}
										<Button
											color="secondary"
											onClick={this.toggle}>
											Cancel
										</Button>
									</ModalFooter>
								</Modal>
							);
						}
					}}
				</Context.Consumer>
			</div>
		);
	}
}
