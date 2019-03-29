const getState = ({ getStore, setStore }) => {
	return {
		store: {
			meetups: [],

			events: [],

			meetupEvents: []
		},
		actions: {
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
					return meetupArr[0];
				}
			}
		}
	};
};

export default getState;
