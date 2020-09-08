const getState = ({ getStore, getActions, setStore }) => {
	const baseUrl = "https://3000-d02ef992-c5e2-4db4-9dab-d237d03740bb.ws-us02.gitpod.io/";
	return {
		store: {
			tasks: []
		},
		actions: {
			// MISSING CHANGE DONE TO TRUE

			getList: async () => {
				const result = await fetch(`${baseUrl}/todos`, {
					method: "GET"
				});
				const taskList = await result.json();
				setStore({ tasks: taskList });
			},

			deleteTask: async position => {
				let actions = getActions();
				const response = await fetch(`${baseUrl}/todos/${position}`, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				});
				await actions.getList();
			},

			addTask: async task => {
				let actions = getActions();
				if (task != "") {
					const response = await fetch(`${baseUrl}/todos`, {
						method: "POST",
						body: JSON.stringify({ label: `${task}`, done: false }),
						headers: {
							"Content-Type": "application/json"
						}
					});
					await actions.getList();
				} else alert("Please type a new task");
			}
		}
	};
};

export default getState;
