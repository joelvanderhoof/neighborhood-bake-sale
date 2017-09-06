import React, { Component } from 'react';
import Auth from './utils/Auth';

class Logout extends Component {
  componentDidMount() {
    Auth.deauthenticateUser();
    this.props.router.push('/');
  }

  render () {
    return (
      <div className='container'>
        <h1>Logging out...</h1>
      </div>
    )
  }
}

export default Logout;