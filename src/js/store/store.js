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

			findMeetUp: (itemID, index) => {
				const store = getStore();

				if (store.events._meetup == store.meetups.ID) {
					let meetupId = store.meetups.post_title;
					return meetupId;
				}
			}
		}
	};
};

export default getState;
