import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Auth from './utils/Auth';
import Message from './Nav/Message';
import Helpers from "./utils/helpers";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };

  this.queryOrders = this.queryOrders.bind(this);
  // this.setSave = this.setSave.bind(this);
  }

  componentDidMount(){
    this.queryOrders();
  }

  // componentDidUpdate(){
  //   this.queryOrders();
  // }

  handleClick() {
    Auth.deauthenticateUser();
    window.location.href = '/';
  }

  queryOrders() {
    console.log("query orders");
    let userID = Auth.getUserId();
    let activeOrders = [];
    Helpers.getOrders(userID).then((response)=>{
      console.log(response);
      response.data.map((orders)=>{
        if(!orders.pickedUp){
          activeOrders.push(orders);
        }
      })
      this.setState({messages: activeOrders})
    });
   
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
              <Message requery={this.queryOrders} messages={ this.state.messages } />
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