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
        <div className="left">Pawtastic</div>
        <div className="right">
          <h1>Yay, we love dogs! Give us the basics about your pup.</h1>
          <form>
            <div className="textBars">
              <div className="col-25">
              <label for="name">Name</label>
              </div>
              <div className="col-75">
              <input type="text" placeholder="Dog's name" id="name" value={this.state.value}></input>
              </div>
              
              <div className="col-25" id="photo">
              <button type="upload" placeholder="upload a photo"></button>
              </div>
              <div className="col-75">
              <p>Upload a photo</p>
              </div>
            </div>
            <div className="textBars">
              <div class="col-25">
              <label for="breed">Breed</label>
              </div>
              <div class="col-75">
              <input type="text" placeholder="" id="breed"></input>
              </div>
              
              <div class="col-25">
              <label for="birthday">Birthday</label>
              </div>
              <div class="col-75">
              <input type="text" placeholder="MM/DD/YYYY"></input>
              </div>
              </div>
            
            
            <div className="buttons">
              <label for="gender" id="gender">Gender</label>
              <div className="input">
              <input type="checkbox" id="male" name="gender" value="male" className="checkbox"></input>
              <label for="toggle" class="switch" className="switch"></label>
              </div>

              <div className="input">
              <input type="checkbox" id="female" name="gender" value="female" className="checkbox"></input>
              <label for="toggle" class="switch" className="switch"></label>
              </div>
              <label for="spayedOrNeutered">Spayed or Neutered</label>
              <div className="input">
              <input type="radio" id="yes" name="spayedOrNeutered" value="yes" className="radio"></input>
              <label for="toggle" class="switch" className="switch"></label>
              </div>

              <div className="input">
              <input type="radio" id="no" name="spayedOrNeutered" value="no" className="radio"></input>
              <label for="toggle" class="switch" className="switch"></label>
              </div>
            </div>
          </form>
          <div className="right2">
              <button className="right2button" id="leftButton">Back</button>
              <button className="right2button" id="rightButton">Next</button>
          </div>
        </div>
      </div>
    )
  }
}

