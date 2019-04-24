import React from "react";
import getState from "./store.js";

export const Context = React.createContext(null);

const Store = PassedComponent => {
	class StoreWrapper extends React.Component {
		constructor(props) {
			super(props);

			this.showModal = false;
			this.state = getState({
				getStore: () => this.state.store,
				setStore: updatedStore =>
					this.setState({
						store: Object.assign(this.state.store, updatedStore)
					})
			});
		}

		componentDidMount() {
			// this function is the equivalent to "window.onLoad"
			// it only run once on the entire application lifetime
			// you should do your ajax requests here

			fetch("https://assets.breatheco.de/apis/fake/meetup/events")
				.then(response => {
					if (response.status !== 200) {
						alert("Connection error, status " + response.status);
						return;
					}

					response.json().then(data => {
						let store = this.state.store;
						store.events = data;
						this.setState({ store });
					});
				})
				.catch(err => {
					alert("Fetch error: ", err);
				});

			fetch("https://assets.breatheco.de/apis/fake/meetup/meetups")
				.then(response => {
					if (response.status !== 200) {
						alert("Connection error, status " + response.status);
						return;
					}

					response.json().then(data => {
						let store = this.state.store;
						store.meetups = data;

						let meetup = store.meetups.find((ID, index) => {
							if (store.meetups < 0) {
								return meetup;
							}
						});

						this.setState({ store });
					});
				})
				.catch(err => {
					alert("Fetch error: ", err);
				});
		}

		componentWillUnmount() {
			this.showModal = false;
		}

		render() {
			return (
				<Context.Provider value={this.state}>
					<PassedComponent {...this.props} />
				</Context.Provider>
			);
		}
	}
	return StoreWrapper;
};

export default Store;
