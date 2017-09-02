import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import LoginForm from './Login/LoginForm';
import helpers from './utils/helpers';
import Auth from './utils/Auth';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fireRedirect: false
    };

    this.saveState = this.saveState.bind(this);
  }

  saveState (currentState) {
    helpers.logIn(currentState)
      .then( (response) => {
        Auth.authenticateUser(response.data.token, response.data.user.id);
      })
      .then(() => {
        this.setState({ fireRedirect: Auth.isUserAuthenticated()});
      });
  }

  render () {
    //const { from } = this.props.location.state || '/';
    const { fireRedirect } = this.state;

    return (
      <div className='container'>
        <div className='col-6'>
          <LoginForm saveState={ this.saveState }/>
          { fireRedirect && (
            <Redirect to="/" />
          )}
        </div>
      </div>
    )
  }
}

export default Login;
