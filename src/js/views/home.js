import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export function Home() {
	const { store, actions } = useContext(Context);
	const [newItem, setNewItem] = useState("");

	return (
		<div className="form-group my-5 mx-5 text-center">
			<button type="button" className="btn btn-primary" onClick={actions.getList}>
				{"Load default tasks"}
			</button>
			<div className="text-center mt-5">
				<ul className="list-group">
					{store.tasks.map((newItem, index) => {
						return (
							<>
								<li className="list-group-item" key={index}>
									{newItem.label}
									<i
										className="fas fa-trash ml-4 text-muted"
										onClick={e => actions.deleteTask(index)}
									/>
									<i
										className="far fa-check-circle ml-4 text-success font-weight-bold"
										onClick={e => actions.deleteTask(index)} //CHANGE DONE TO TRUE
									/>
								</li>
							</>
						);
					})}
				</ul>

				<div className="text-center mt-5">
					<h1>Add your own tasks</h1>
					<input
						type="text"
						onChange={event => {
							setNewItem(event.target.value);
						}}
						value={newItem}
						placeholder="What needs to be done"
					/>
					<button
						type="button"
						className="btn btn-primary"
						onClick={event => {
							actions.addTask(newItem);
							setNewItem("");
						}}>
						{"Add task"}
					</button>
				</div>

				<label
					className={`text-success font-weight-bold ${store.tasks.length > 0 ? "text-danger" : ""}`}
					htmlFor="taskleft">
					{store.tasks.length} items left
				</label>
			</div>
		</div>
	);
}
