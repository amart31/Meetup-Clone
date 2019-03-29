import React from "react";
import Modal from "react-modal";

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
					closeTimeoutMS={150}
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
						<div className="modal-body">
							<h4>email</h4>
							<p>email</p>
							<p>email</p>
						</div>
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
