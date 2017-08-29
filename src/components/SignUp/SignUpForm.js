import React from 'react';
import { Link } from 'react-router-dom';

const SignUpForm = ({ onSubmit, onChange, errors, user }) => (
  <div className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2>Sign Up</h2>

      {errors.summary && <p className="error-message">{errors.summary}</p>}

      <div className="field-line">
        <label> First Name: {'\u00A0'} <br />
        <input
          placeholder="John"
          name="firstName"
          errorText={errors.name}
          onChange={onChange}
          value={user.firstName}
        />
        </label>
      </div>

      <div className="field-line">
      <label> Last Name: {'\u00A0'} <br />
        <input
          placeholder="Smith"
          name="lastName"
          errorText={errors.name}
          onChange={onChange}
          value={user.lastName}
        />
      </label>
      </div>

      <div className="field-line">
        <label> Email: {'\u00A0'} <br />
        <input
          placeholder="jsmith@email.com"
          name="email"
          errorText={errors.email}
          onChange={onChange}
          value={user.email}
        />
        </label>
      </div>

      <div className="field-line">
        <label> Password: {'\u00A0'} <br />
        <input
          placeholder="10 characters are required"
          type="password"
          name="password"
          onChange={onChange}
          errorText={errors.password}
          value={user.password}
        />
        </label>
      </div>
      <hr />
      <div className="button-line">
        <button type="submit"> Create New Account </button>
      </div>

      <div>Already have an account? <Link to={'/login'}>Log in</Link></div>
    </form>
  </div>
);

export default SignUpForm;