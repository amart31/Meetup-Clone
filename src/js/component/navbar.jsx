import React from "react";
import { Context } from "../store/appContext.jsx";
import { Link } from "react-router-dom";
import { ModalLogin } from "./functional/modalLogin.jsx";

import Logo from "../../img/logo1.jpg";

export const Navbar = () => {
	//this methods says how the NavBar should look like in HTML
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark justify-content-between">
			<a className="navbar-brand mr-3" href="/">
				<img src={Logo} width="50" height="50" alt="logo" />
			</a>

			<ModalLogin />
		</nav>
	);
};
