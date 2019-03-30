import React from "react";
import { Context } from "../store/appContext.jsx";
import { Link } from "react-router-dom";
import { ModalLogin } from "./functional/modalLogin.jsx";

import Logo from "../../img/logo1.jpg";

export class Navbar extends React.Component {
	constructor() {
		super();
		this.state = {
			showModal: false
		};

		this.handleOpenModal = this.handleOpenModal.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);
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
			<nav className="navbar navbar-expand-sm navbar-dark bg-dark justify-content-between">
				<a className="navbar-brand mr-3" href="/">
					<img src={Logo} width="50" height="50" alt="logo" />
				</a>

				<ModalLogin />
			</nav>
		);
	}
}
