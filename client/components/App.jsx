import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Symptoms from './Symptoms.jsx';



class App extends Component {

  render(props) {
    return (
      <div className='parent'>
        <h1 className='title'>Do You Have COVID-19?</h1>
        <h4 className='title'>
            The thing about diagnosing diseases is that you're going to have to first go look for them. 
            If you don't look for them, you'll never find them. </h4>
          <Symptoms />
      </div>
    )
  }
}



export default App;