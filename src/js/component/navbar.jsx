import React from "react";
import { Context } from "../store/appContext.jsx";
import { Link } from "react-router-dom";
import { LoginModal } from "./loginModal.jsx";

import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";

import Logo from "../../img/logo1.jpg";

export default class NavBar extends React.Component {
	constructor() {
		super();

		this.toggle = this.toggle.bind(this);
		this.state = {
			showModal: false,
			isOpen: false,
			session: {
				isLoggedIn: false,
				token: "",
				user_display_name: "",
				user_email: "",
				user_nicename: ""
			}
		};

		this.handleOpenModal = this.handleOpenModal.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	handleOpenModal() {
		this.setState({ showModal: true });
	}

	handleCloseModal() {
		this.setState({ showModal: false });
	}

	render() {
		//this methods says how the NavBar should look like in HTML
		return (
			<div>
				<Navbar
					className=" navbar-dark bg-dark justify-content-between"
					color="light"
					light
					expand="md">
					<div className="nav-brand">
						<Link to="/">
							<img src={Logo} width="50" height="50" alt="logo" />
						</Link>
					</div>

					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Context.Consumer>
							{({ store, actions }) => {
								if (store.session.isLoggedIn) {
									return (
										<Nav className="ml-auto" navbar>
											<NavItem>
												<Link to="/" className="mx-3">
													Events
												</Link>
											</NavItem>
											<NavItem>
												<Link
													to="/meetups/"
													className="mx-3">
													Meetups
												</Link>
											</NavItem>
											<NavItem>
												<Link
													to="/account/"
													className="mx-3">
													{
														store.session
															.user_nicename
													}
												</Link>
											</NavItem>
										</Nav>
									);
								} else {
									return (
										<Nav className="ml-auto" navbar>
											<NavItem>
												<Link to="/" className="mx-3">
													Home
												</Link>
											</NavItem>
											<NavItem>
												<Link
													to="/meetups/"
													className="mx-3">
													Meetups
												</Link>
											</NavItem>
											<NavItem>
												<Link
													to="/signup/"
													className="mx-3">
													Account
												</Link>
											</NavItem>
										</Nav>
									);
								}
							}}
						</Context.Consumer>
					</Collapse>
					<LoginModal />
				</Navbar>
			</div>
		);
	}
}
