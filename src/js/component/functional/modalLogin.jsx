import React from "react";
import Modal from "react-modal";
import { Login } from "../../views/login.jsx";

export class ModalLogin extends React.Component {
	constructor(props) {
		super(props);
		this.state = { modalIsOpen: false };
	}

	openModal = () => {
		this.setState({ modalIsOpen: true });
	};

	closeModal = () => {
		this.setState({ modalIsOpen: false });
	};

	handleModalCloseRequest = () => {
		// opportunity to validate something and keep the modal open even if it
		// requested to be closed
		this.setState({ modalIsOpen: false });
	};

	handleSaveClicked = e => {
		alert("Save button was clicked");
	};

	componentDidMount() {
		Modal.setAppElement("body");
	}

	componentWillUnmount() {
		this._isMounted = false;
	}

	render() {
		return (
			<div>
				<button
					type="button"
					className="btn btn-primary"
					onClick={this.openModal}>
					Log In
				</button>
				<Modal
					className="Modal__Bootstrap modal-dialog"
					isOpen={this.state.modalIsOpen}
					onRequestClose={this.handleModalCloseRequest}>
					<div className="modal-content">
						<div className="modal-header">
							<h4 className="modal-title">Log In</h4>
							<button
								type="button"
								className="close"
								onClick={this.handleModalCloseRequest}>
								<span aria-hidden="true">&times;</span>
								<span className="sr-only">Close</span>
							</button>
						</div>
						<div className="modal-body" />
						<Login />
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								onClick={this.handleModalCloseRequest}>
								Close
							</button>
							<button
								type="button"
								className="btn btn-primary"
								onClick={this.handleSaveClicked}>
								Save changes
							</button>
						</div>
					</div>
				</Modal>
			</div>
		);
	}
}
