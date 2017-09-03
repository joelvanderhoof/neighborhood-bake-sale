import React, { Component } from 'react';
import Auth from './utils/Auth';

class Logout extends Component {
  constructor(props) {
    super(props)
    this.state = {}

  }

  componentDidMount() {
    console.log('logging out')
    Auth.deauthenticateUser();
  }

  render () {
    return (
      <div className='container'>
        <h1>Logging out.. (Please refresh page for now)</h1>
      </div>
    )
  }
}

export default Logout;