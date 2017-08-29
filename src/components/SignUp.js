import React, { Component } from 'react';
import SignUpForm from './SignUp/SignUpForm';

class SignUp extends Component {
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
          <SignUpForm saveState={this.saveState}/>
        </div>
      </div>
    )
  }
}

export default SignUp;