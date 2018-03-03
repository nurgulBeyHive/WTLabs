import React, { Component } from 'react';
import './App.css';

export class ToDoItem extends Component{
	constructor(props){
		super(props);
	}

   handleRemove = () => {
   	this.props.handleRemove(this.props.id);
   }


	render(){
		return(
			<li className = "todo">
			<div>{this.props.name}</div>
			<button onClick = {this.handleRemove} className = "remove">Remove</button>
			</li>
			);
	}
}