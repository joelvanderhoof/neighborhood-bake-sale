import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Auth from './utils/Auth';
import Message from './Nav/Message';

let tempOrders = [
  {
    customerID: "213421414", //same as the ID from the Customer model
    sellerID: "421155423423", //same as the ID from the Seller collection
    customerName: "Frank",
    storeName: "Bob's Pizzaria",
    order: "Pizza", //Array of menu item IDs
    status: "Pending", //The status will be set to specific strings by specific functions
    // To check status compare the strings

  },
  {
    customerID: "213421414", //same as the ID from the Customer model
    sellerID: "213421414", //same as the ID from the Seller collection
    customerName: "Frank",
    storeName: "Ike's Sandwich",
    order: "Sandwich", //Array of menu item IDs
    status: "Accepted", //The status will be set to specific strings by specific functions
    // To check status compare the strings

  },
  {
    customerID: "213421414", //same as the ID from the Customer model
    sellerID: "213421414", //same as the ID from the Seller collection
    customerName: "Frank",
    storeName: "Cakeology",
    order: "Cake",
    status: "Rejected", //The status will be set to specific strings by specific functions
    // To check status compare the strings

  }
];

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: tempOrders
    };

  // this.setEdit = this.setEdit.bind(this);
  // this.setSave = this.setSave.bind(this);
  }

  handleClick() {
    Auth.deauthenticateUser();
    window.location.href = '/';
  }

  render() {
    return (
      <nav className="nav navbar navbar-toggleable-md">
        <ul className='navbar-nav mr-auto'>
          <li>
            <NavLink exact activeClassName='active' to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' to='/store/59ab34d106e8a23b58e70560'>
              Store
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' to='/selleradmin'>
              Seller Admin
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' to='/customeradmin'>
              Customer Admin
            </NavLink>
          </li>
          { Auth.isUserAuthenticated() &&
            <li>
              <Message messages={ this.state.messages } />
            </li> }
        </ul>
        <ul className='navbar-nav'>
          { Auth.isUserAuthenticated() ?
            <li>
              {/* <NavLink className='mr-3' activeClassName='active' to='/logout'>
                Log Out
              </NavLink> */}
              <button className='btn btn-secondary' onClick={this.handleClick}> Log Out </button>
            </li>
            :
            <li>
              <NavLink className='mr-3' activeClassName='active' to='/signup'>
                Sign Up
              </NavLink>
              <NavLink activeClassName='active' to='/login'>
                Log In
              </NavLink>
            </li> }
        </ul>
      </nav>
    )
  }
}

export default Nav