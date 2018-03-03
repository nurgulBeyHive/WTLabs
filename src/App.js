import React, { Component } from 'react';
import './App.css';
import ContactList  from './ContactList.js';
import ToDoList  from './ToDoList.js';
import ToDoApp from './ToDoApp.js';
import back from './back.jpg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Home extends Component {
  render(){
    return(

      <img className = "back" src = {back} />
      );
  }
} 
class App extends Component {
  render() {
    return (
      <Router>
      <div>
      <ul className = "menu">
        <li><Link to = {'/Home'}>Home</Link></li>
        <li><Link to = {'/ToDo List'} >ToDo List</Link></li>
        <li><Link to = {'/Contact List'}>Contact List</Link></li>
      </ul>
       <Route path = "/Home" component = {Home} />
      <Route exact path = "/ToDo List" component = {ToDoApp} />
       <Route path = "/Contact List" component = {ContactList} />
       </div>
      </Router>
    );
  }
}

export default App;
