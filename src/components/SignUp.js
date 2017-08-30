import React, { Component } from 'react';
import SignUpForm from './SignUp/SignUpForm';

class SignUp extends Component {
  render () {
    return (
      <div className='container'>
        <div className='col-6'>
          <SignUpForm />
        </div>
      </div>
    )
  }
}

export default SignUp;