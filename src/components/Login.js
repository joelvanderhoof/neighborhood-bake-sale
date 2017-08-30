import React, { Component } from 'react';
import LoginForm from './Login/LoginForm';

class Login extends Component {
  render () {
    return (
      <div className='container'>
        <div className='col-6'>
          <LoginForm />
        </div>
      </div>
    )
  }
}

export default Login;