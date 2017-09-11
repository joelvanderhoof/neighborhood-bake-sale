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
    let userID = Auth.getUserId();
    let activeOrders = [];
    Helpers.getOrdersCustomer(userID).then((response)=>{
      response.data.map((orders)=>{
        if(!orders.pickedUp){ //if order is picked up, dont show it
          activeOrders.push(orders);
        }
      })
      this.setState({messages: activeOrders})
    });
   
  }

  render() {
    const yourStore = `/store/${Auth.getUserId()}`
    return (
      <nav className="nav navbar-toggleable-md">
        <ul className='nav mr-auto'>
          <li>
            <NavLink className='white' exact activeClassName='active' to='/'>
              Home
            </NavLink>
          </li>
          {Auth.isUserAuthenticated() &&
          <li>
            <NavLink className='white' activeClassName='active' to={yourStore}>
              Your Store
            </NavLink>
          </li>
          }

          {Auth.isUserAuthenticated() && <li>
            <NavLink className='white' activeClassName='active' to='/selleradmin'>
              Seller Admin
            </NavLink>
          </li>
          }
          
          {Auth.isUserAuthenticated() && <li>
            <NavLink className='white' activeClassName='active' to='/customeradmin'>
              Customer Admin
            </NavLink>
          </li>
          }
          { Auth.isUserAuthenticated() &&
            <li>
              <Message requery={this.queryOrders} messages={ this.state.messages } />
            </li> }
        </ul>
        <ul className='nav'>
          { Auth.isUserAuthenticated() ?
            <li>
              <button className='btn btn-sm btn-danger' onClick={this.handleClick}> Log Out </button>
            </li>
            :
            <li>
              <NavLink className='mr-3 white' activeClassName='active' to='/signup'>
                Sign Up
              </NavLink>
              <NavLink className='white' activeClassName='active' to='/login'>
                Log In
              </NavLink>
            </li> }
        </ul>
      </nav>
    )
  }
}

export default Nav
