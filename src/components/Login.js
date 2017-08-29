import React, { Component } from 'react';
import LoginForm from './Login/LoginForm';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.saveState = this.saveState.bind(this);
  }

  saveState (currentState) {
    console.log(currentState);
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