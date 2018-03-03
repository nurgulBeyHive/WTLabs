import React, { Component } from 'react';

class NewToDo extends Component {

	constructor(props) {
		super(props);
		this.state = {
			newName: "",
			newPriority: "high"
		}

		this.handleNewToDo = this.handleNewToDo.bind(this);
		this.updateName = this.updateName.bind(this);
		this.updatePriority = this.updatePriority.bind(this);
	}

	render() {

		return(
			<div className="add-new-task">
				<input onChange={this.updateName} className="new-task__name-input" type="text" placeholder="Type todo here" value={this.state.newName} />
				<select onChange={this.updatePriority} className="new-task__priority-dropdown">
					<option value="high">High</option>
					<option value="medium">Medium</option>
					<option value="low">Low</option>
				</select>
				<button onClick={this.handleNewToDo}>Add Task</button>
			</div>
		)
	}

	handleNewToDo() {
		this.props.newToDo(this.state.newName, this.state.newPriority);
		this.setState({newName: ""});
	}

	updateName(event) {
		this.setState({newName: event.target.value})
	}

	updatePriority(event) {
		this.setState({newPriority: event.target.value})
		this.props.changePriority(this.state.newPriority, this.state.newName);
	}

}

export default NewToDo;