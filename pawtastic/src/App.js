import React, { Component } from 'react';
import './App.css';

export default class App extends Component{
  constructor(props) {
    super(props);

    this.state = {value: ''}
  }

  render(){
    return(
      <div className="container">
        <div className="left"></div>
        <div className="right">
          <h1>Yay, we love dogs! Give us the basics about your pup.</h1>
          <form>
              <input type="text" value={this.state.value}
          </form>
        </div>
      </div>
    )
  }
}

export default App;
