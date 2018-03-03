import React, { Component } from 'react';
import ToDoList from './ToDoList';
import NewToDo from './NewToDo';
import './ToDoApp.css';
import {ToDoItem} from './ToDoItem.js';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			toDoList: [],
			nextId: 0
		}
		this.addToList = this.addToList.bind(this);
	}

	

	addToList(newName, newPriority) {
		let i;
		let index = -1;
		for(i = 0; i < this.state.toDoList.length; i++){
			if(this.state.toDoList[i].name === newName){
				index = i;
			}
		}


		if(newName.length > 0 && index === -1){
			let newToDoList = this.state.toDoList;
			newToDoList.push({
				id: this.state.nextId,
				name: newName,
				priority: newPriority,
				completed: false,
				className: ""
			});
			this.setState({
				toDoList: newToDoList,
				nextId: ++this.state.nextId
			});
		}
		
	}

	toggleComplete(event) {
		let split = event.target.className.split(" ");
		let completeClass = split[1];
		if (completeClass === "complete") {
			event.target.className = split[0] + " incomplete";
		} else if (completeClass === "incomplete") {
			event.target.className = split[0] + " complete";
		}
	}
	handleRemove = (id) =>{
		let todos = this.state.toDoList.filter((todo) => todo.id !== id);
		this.setState({
			toDoList: todos
		});
	}
   changePriority = (priority, name) =>{
        let i;

   }
	render() {

		return(
			<div>
				<h1>Welcome to my App!</h1>
				<NewToDo newToDo={this.addToList}  changePriority = {this.changePriority}/>
				<ul>
				{
                   this.state.toDoList.map((todo) => {
					return <ToDoItem
                          name = {todo.name}
                          id = {todo.id}
                          key = {todo.id}
                          handleRemove = {this.handleRemove}
					 />
					})
				}
					 </ul>
			</div>
		)
	}

}

export default App;