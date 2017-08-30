import React, { Component } from 'react';
import LoginForm from './Login/LoginForm';
import helpers from './utils/helpers';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.saveState = this.saveState.bind(this);
  }

  saveState (currentState) {
    helpers.logIn(currentState);
  }

  render () {
    return (
      <div className='container'>
        <div className='col-6'>
          <LoginForm saveState={this.saveState}/>
        </div>
      </div>
    )
  }
}

export default Login;