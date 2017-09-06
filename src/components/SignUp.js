import React, { Component } from 'react';
import SignUpForm from './SignUp/SignUpForm';
import helpers from './utils/helpers';

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.saveState = this.saveState.bind(this);
  }

  saveState (currentState) {
    helpers.signup(currentState);
  }

  render () {
    return (
      <div className='container'>
        <div className='col-6'>
          <SignUpForm saveState={this.saveState}/>
        </div>
      </div>
    )
  }
}

export default SignUp;