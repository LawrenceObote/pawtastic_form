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
            <div>
              <h3>Name</h3>
              <input type="text" placeholder="Dog's name" value={this.state.value}></input>
              <button type="upload" placeholder="upload a photo"></button>
              <h3>Upload a photo</h3>
            </div>
            <div>
              <h3>Breed</h3>
              <input type="text" placeholder=""></input>
              <h3>Birthday</h3>
              <input type="text" placeholder="MM/DD/YYYY"></input>
            </div>
            <div>
              <h3>Gender</h3>
              <input type="checkbox" id="male" name="gender" value="male" className="checkbox"></input>
              <label for="toggle" class="switch" className="switch"></label>
              
              <input type="checkbox" id="female" name="gender" value="female" className="checkbox"></input>
              <label for="toggle" class="switch" className="switch"></label>

              <input type="radio" id="yes" name="spayedOrNeutered" value="yes" className="radio"></input>
              <label for="toggle" class="switch" className="switch"></label>
              
              <input type="radio" id="no" name="spayedOrNeutered" value="no" className="radio"></input>
              <label for="toggle" class="switch" className="switch"></label>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

