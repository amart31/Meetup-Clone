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
										Modal title
									</ModalHeader>
									<ModalBody>
										{"Hello " + store.session.user_nicename}
									</ModalBody>
									<ModalFooter>
										<Button
											color="primary"
											onClick={this.toggle}>
											Do Something
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
										Modal title
									</ModalHeader>

									<ModalBody>
										<FormGroup>
											<Label for="exampleEmail">
												Email
											</Label>
											<Input
												type="email"
												name="email"
												id="exampleEmail"
												placeholder="with a placeholder"
											/>
										</FormGroup>
										<FormGroup>
											<Label for="examplePassword">
												Password
											</Label>
											<Input
												type="password"
												name="password"
												id="examplePassword"
												placeholder="password placeholder"
											/>
										</FormGroup>
									</ModalBody>
									<ModalFooter>
										<Button
											color="primary"
											onClick={this.toggle}>
											Do Something
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
