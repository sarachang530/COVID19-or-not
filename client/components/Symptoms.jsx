import React, { Component } from 'react';


class Symptoms extends Component {
  constructor(props) {
    super(props);
      this.state = {
        name: '',
        sneezing: false,
        chest_pain: false,
        fever: false,
        sore_throat: false,
        shortness_of_breath: false,
        coughing: false
      };

  this.handleUsers = this.handleUsers.bind(this);
  this.handleClick = this.handleClick.bind(this);
  this.handleName = this.handleName.bind(this);
  this.handleSneezing = this.handleSneezing.bind(this);
  this.handleChestPain = this.handleChestPain.bind(this);

  this.handleFever = this.handleFever.bind(this);
  this.handleSoreThroat = this.handleSoreThroat.bind(this);
  this.handleShortness = this.handleShortness.bind(this);
  this.handleCoughing = this.handleCoughing.bind(this);
  };
  handleName(event) {
    this.setState({
      ...this.state,  
      name: event.target.value  
    })
  };

handleSneezing(event) {
  this.setState({ 
    sneezing: event.target.checked  
  })
};

handleChestPain(event) {
  this.setState({ 
    chest_pain: event.target.checked 
  })
};

handleFever(event) {
  this.setState({ 
    fever: event.target.checked 
  })
};

handleSoreThroat(event) {
  this.setState({ 
    sore_throat: event.target.checked 
  })
};

handleShortness(event) {
  this.setState({ 
    shortness_of_breath: event.target.checked  
  })
};

handleCoughing(event) {
  this.setState({ 
    coughing: event.target.checked 
 })
};

handleClick() {
  console.log('this is:', this);
  //fetch post req passing in state with headers, in body-- look identical to backend req.body all keys 
  fetch('/api/addUserSymptoms', {
    method: 'post',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({
      name: this.state.name, 
      sneezing: this.state.sneezing, 
      chest_pain: this.state.chest_pain, 
      fever: this.state.fever, 
      sore_throat: this.state.sore_throat, 
      shortness_of_breath: this.state.shortness_of_breath, 
      coughing: this.state.coughing
    })
  })
};

handleUsers() {
  console.log('this is is:');
  fetch('/api/getUser')
    .then((data) => data.json())
    .then((users) => console.log(users))
};

  render() {
    return (
      <div className='symptomsContainer'>
      <div className='symptoms'>
        <label for="name">Name:</label>
        <input className='textbox' type="text" onChange={(e) => {this.handleName(e)} }></input><br></br>
        <input type="checkbox" onChange={(e) => {this.handleSneezing(e)} }></input>
        <label for="vehicle1"> Sneezing </label><br></br>
        <input type="checkbox" onChange={(e) => {this.handleChestPain(e)} }></input>
        <label for="vehicle2"> Chest Pain</label><br></br>
        <input type="checkbox" onChange={(e) => {this.handleFever(e)} }></input>
        <label for="vehicle3"> Fever </label><br></br>
        <input type="checkbox" onChange={(e) => {this.handleSoreThroat(e)} }></input>
        <label for="vehicle3"> Sore Throat </label><br></br>
        <input type="checkbox" onChange={(e) => {this.handleShortness(e)} }></input>
        <label for="vehicle3"> Shortness of Breath </label><br></br>
        <input type="checkbox" onChange={(e) => {this.handleCoughing(e)} }></input>
        <label for="vehicle3"> Coughing </label><br></br>
        <button className='buttons' onClick={() => this.handleClick()}>Submit</button>
        <button className='buttons' onClick={() => this.handleUsers()}>See All Users</button>
      </div>
      </div>
    )
  }



};

export default Symptoms;
