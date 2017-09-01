import React, { Component } from 'react';
import LoginForm from './Login/LoginForm';
import helpers from './utils/helpers';
import Auth from './utils/Auth';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.saveState = this.saveState.bind(this);
  }

  saveState (currentState) {
    helpers.logIn(currentState)
      .then( (response) => {
        Auth.authenticateUser(response.data.token, response.data.user.id);
      });
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