const getState = ({ getStore, setStore }) => {
	return {
		store: {
			meetups: [],
			events: [],
			meetupEvents: [],
			session: {
				isLoggedIn: false,
				token: "",
				user_email: "",
				user_nicename: ""
			}
		},
		actions: {
			login: (user, pass) => {
				const endpoint =
					"https://8080-b126db93-61fd-461f-bd60-c39ef7e847a3.ws-us0.gitpod.io/wp-json/jwt-auth/v1/token";

				//fetch session
				fetch(endpoint, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						username: user,
						password: pass
					})
				})
					.then(res => {
						if (res.status !== 200) {
							console.log("error " + res.status);
							return;
						}
						res.json().then(data => {
							let store = getStore();

							store.session = data;
							store.session.isLoggedIn = true;
							console.log(data);
							setStore({
								store
							});
						});
					})
					.catch(err => {
						alert("Fetch error: ", err);
					});
			},
			meetupEventsList: (meetupID, index) => {
				const store = getStore();

				var events = store.events.filter(event => {
					if (event.meta_keys._meetup == meetupID) return event;
				});

				return events;
			},

			getMeetupName: (meetupId, index) => {
				const store = getStore();

				let meetupArr = store.meetups.filter(meetup => {
					if (meetupId == meetup.ID) return meetup.post_title;
				});

				if (meetupArr !== []) {
					console.log(meetupArr[0]);
					return meetupArr[0];
				}
			}
		}
	};
};

export default getState;
