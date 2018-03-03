import React from 'react';
import './ToDoList.css';
import initList from './initList.js';
import NewToDo from './NewToDo.js';


function ToDoList(props) {

	let completedTasks = props.toDos.filter(function(todo) {
		return todo.completed
	});
	console.log(completedTasks);
	var toDos = props.toDos.map(function(todo, index) {
		let checkClass = "checkbox";
		if (todo.completed) {
			checkClass += " complete";
		} else {
			checkClass += " incomplete";
		}
		return(
			<div key={index} className={todo.priority}>
				{todo.name}
				<div className={checkClass} onClick={props.toggleComplete}></div>
			</div>
		)
	});
	toDos = toDos.reverse();
	return <div className="todos">{toDos}</div>
}

export default ToDoList;