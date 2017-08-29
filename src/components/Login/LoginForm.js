import React, { Component } from 'react';

class LoginForm extends Component {
  render () {
    return (
      <form>
        <div className='form-group'>
          <label for='email'>Email: </label>
          <input className='form-control' type='text' name='email' required />
        </div>

        <div className='form-group'>
          <label for='password'>Password: </label>
          <input className='form-control' type='text' name='password' required />
          <p className='red'>Password must be at least 10 characters long</p>
        </div>

        <div className='form-group'>
          <button type='submit' className='btn btn-primary'>Log In</button>
        </div>
      </form>
    )
  }
}

export default LoginForm;