import React, { Component } from 'react';

class SignUpForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({
      [event.currentTarget.name]: event.target.value
    });
  };

  handleSubmit (event) {
    event.preventDefault();
    this.props.saveState(this.state);
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <label style={{color: 'white'}} htmlFor='firstName'>First Name: </label>
          <input className='form-control' type='text' name='firstName' value={this.state.firstName} onChange={this.handleChange} required />
        </div>

        <div className='form-group'>
          <label style={{color: 'white'}} htmlFor='lastName'>Last Name: </label>
          <input className='form-control' type='text' name='lastName' value={this.state.lastName} onChange={this.handleChange} required />
        </div>

        <div className='form-group'>
          <label style={{color: 'white'}} htmlFor='email'>Email: </label>
          <input className='form-control' type='email' name='email' value={this.state.email} onChange={this.handleChange} required />
        </div>

        <div className='form-group'>
          <label style={{color: 'white'}} htmlFor='password'>Password: </label>
          <input className='form-control' type='password' name='password' value={this.state.password} onChange={this.handleChange} required />
          <p className='red'>Password must be at least 10 characters long</p>
        </div>

        <div className='form-group'>
          <button type='submit' className='btn btn-primary'>Sign Up</button>
        </div>
      </form>
    )
  }
}

export default SignUpForm;
