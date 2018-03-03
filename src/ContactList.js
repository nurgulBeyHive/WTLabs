import React, { Component } from 'react';
import './ContactList.css';


var CONTACTS = [   
{
    id : 1,
    name : 'Nurgul',
    phoneNumber: '87754567634'
},
  
{
    id: 2,
    name: 'Zhadyra',
    phoneNumber: '87472546321'
},
  
{
    id: 3,
    name: 'Laura',
    phoneNumber: '87472136655'
}
];

class Contact extends Component{
  constructor(props){
    super(props);
  }
  onShowInfoClicked(index){
       this.props.onShowInfoClicked(index)
   }
  render(){

    return(

      <li className = "contact" onClick = {(e) => this.onShowInfoClicked(this.props.index) }>
      <div className = "contact-info">
              <div className = "contact-name">{this.props.name}</div>
              <div className = "contact-number">{this.props.phoneNumber}</div>
      </div>

      </li>

      );
  }
}
export class ContactList extends Component{
  constructor(props){
    super(props);

    this.state = {
      displayedContacts: CONTACTS,
      showInfo: false,
      showName: '',
      showEmail: '',
      showPhoneNumber: ''
    }

    this.handleSearch = this.handleSearch.bind(this);
    this.onShowInfoClicked = this.onShowInfoClicked.bind(this);
    this.changeMode = this.changeMode.bind(this);
  }
  onShowInfoClicked(index){
       this.setState({
        showInfo: true,
        showName: this.state.displayedContacts[index].name,
        showPhoneNumber: this.state.displayedContacts[index].phoneNumber
       });

  }
  handleSearch(event) {
    var searchQuery = event.target.value.toLowerCase();      
    var displayedContacts = CONTACTS.filter(function(el){    
      var searchValue = el.name.toLowerCase();
      return searchValue.indexOf(searchQuery) !== -1;     
    });
     
    this.setState({
      displayedContacts: displayedContacts
    });
  }
  changeMode(){
    this.setState({
      showInfo: false
    });
  }
  render(){
    return(
      <div className = "contact_list">

      <div className = "showMode" hidden = {this.state.showInfo === true ? "" : "hidden"} >
      <label className = "sh">Name:</label>
      <input className = "showInfo" value = {this.state.showName} type = "text"/>
      <label className = "sh">Phone Number:</label>
      <input className = "showInfo" value = {this.state.showPhoneNumber} type = "text" />
      <button className = "btn-ok" onClick = {this.changeMode}>OK</button>
      </div>

      <div className = "contacts" hidden = {this.state.showInfo === false ? "": "hidden"}>
      <input type = "text" className = "search-field" onChange = {this.handleSearch} />
      <ul className = "contacts-list">
         {
            this.state.displayedContacts.map((element, index) => {
              return <Contact 
              index = {index}
              id = {element.id}
              key = {element.id}
              name = {element.name}
              phoneNumber = {element.phoneNumber}
              onShowInfoClicked = {this.onShowInfoClicked}
              />;
            })

          }
      </ul>
      </div>
      </div>
      );
  }
}
export default ContactList;
