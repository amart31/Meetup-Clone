const getState = ({ getStore, setStore }) => {
	return {
		store: {
			menu: [
				{ label: "Events", url: "/" },
				{ label: "Meetups", url: "/meetups" }
			],
			meetups: [
				/*
				{
					name: "4Geeks",
					imgurl: "https://via.placeholder.com/800x500.png",
					description:
						"International Bootcamp dedicated to training the next generation of web developers.",
					founded: "2010",
					location: "Miami, FL"
				},
				{
					name: "< Freelancers_United /> ",
					imgurl: "https://via.placeholder.com/800x500.png",
					description:
						"Group of freelancers who come together to discuss the latest technologies and network within the industry at large.",
					founded: "2018",
					location: "Miami, FL"
				},
				{
					name: "South Florida Developers",
					imgurl: "https://via.placeholder.com/800x500.png",
					description:
						"Informal gathering for those in the larger tech community of South Florida, we come together to discuss a wide array of topics and subjects, open to everyone.",
					founded: "2018",
					location: "Miami, FL"
				}
				*/
			],

			events: [
				/*{
					title: "Event 1",
					imgurl: "https://via.placeholder.com/800x500.png",
					description:
						"Freelancers networking event with opportunities to ask questions and expand knowledge base.",
					date: "March 22",
					time: "9 am",
					meetup: "4Geeks"
				},
				{
					title: "Event 2",
					imgurl: "https://via.placeholder.com/728x90.png",
					description:
						"Freelancers networking event with opportunities to ask questions and expand knowledge base.",
					date: "March 27",
					time: "7 am",
					meetup: "4Geeks"
				},
				{
					title: "Event 3",
					imgurl: "https://via.placeholder.com/728x90.png",
					description:
						"Freelancers networking event with opportunities to ask questions and expand knowledge base.",
					date: "April 2",
					time: "8 pm",
					meetup: "4Geeks"
				} */
			],

			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
