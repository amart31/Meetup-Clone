import React from "react";
import PropTypes from "prop-types";
import "../../styles/login.scss";

//FormPRovider holds state, available to FormConsumer
const FormContext = React.createContext({});
const FormProvider = FormContext.Provider;
const FormConsumer = FormContext.Consumer;

class Form extends React.Component {
	state = {
		activePanel: "login"
	};

	render() {
		return (
			//declare state that determines active panel & method to switch panels
			<React.Fragment>
				<FormProvider
					value={{
						activePanel: this.state.activePanel,
						actions: {
							switchPanel: newPanel => {
								this.setState({
									activePanel: newPanel
								});
							}
						}
					}}>
					{this.props.children}
				</FormProvider>
			</React.Fragment>
		);
	}
}
//handles displaying the panels
const FormPanel = props => {
	return (
		<FormConsumer>
			{({ activePanel }) =>
				activePanel === props.isActive ? props.children : null
			}
		</FormConsumer>
	);
};
/*panels id passed as props used to set activePanel to swap forms
above the FormPanel component runs the ternary to see if true */
const Panel = props => (
	<FormConsumer>
		{({ actions }) => {
			return (
				<div onClick={() => actions.switchPanel(props.id)}>
					{props.children}
				</div>
			);
		}}
	</FormConsumer>
);

export const Login = () => {
	return (
		<React.Fragment>
			<div id="login-tab-content" className="active tabs-content">
				<form className="login-form" action="" method="post">
					<input
						type="text"
						className="input"
						id="user_login"
						placeholder="Email"
					/>
					<input
						type="password"
						className="input"
						id="user_pass"
						placeholder="Password"
					/>

					<input
						type="checkbox"
						className="checkbox"
						id="remember_me"
					/>
					<label htmlFor="remember_me">Remember me</label>

					<input type="submit" className="button" value="Login" />
				</form>
			</div>
		</React.Fragment>
	);
};

const SignUp = () => {
	return (
		<React.Fragment>
			<div id="sign-up-tab-content" className="active tabs-content">
				<form className="sign-up form" action="" method="post">
					<input
						type="email"
						className="input"
						id="user_email"
						placeholder="Email"
					/>
					<input
						type="text"
						className="input"
						id="user_name"
						placeholder="Username"
					/>
					<input
						type="password"
						className="input"
						id="user_pass"
						placeholder="Password"
					/>
					<input type="submit" className="button" value="Sign Up" />
				</form>
			</div>
		</React.Fragment>
	);
};

export const LoginSignUp = () => {
	return (
		<div className="form-wrap">
			<Form>
				<div className="tabs">
					<Panel id="login">
						<h2 className="login-tab">Login</h2>
					</Panel>
					<Panel id="signup">
						<h2 className="signup-tab">Sign Up</h2>
					</Panel>
				</div>
				<FormPanel isActive="login">
					<Login />
				</FormPanel>
				<FormPanel isActive="signup">
					<SignUp />
				</FormPanel>
			</Form>
		</div>
	);
};

Form.propTypes = {
	children: PropTypes.object
};
FormPanel.propTypes = {
	isActive: PropTypes.bool,
	children: PropTypes.object
};
Panel.propTypes = {
	id: PropTypes.string,
	children: PropTypes.object
};
LoginSignUp.propTypes = {
	isActive: PropTypes.bool
};
