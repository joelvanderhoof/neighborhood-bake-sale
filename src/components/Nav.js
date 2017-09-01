import React from 'react'
import { NavLink } from 'react-router-dom'
import Auth from './utils/Auth';

function Nav() {
  return (
    <nav className="nav navbar navbar-toggleable-md">
      <ul className='navbar-nav mr-auto'>
        <li>
          <NavLink exact activeClassName='active' to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName='active' to='/store'>
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
        <li>
          <div className="dropdown">
            <a id="dLabel" role="button" data-toggle="dropdown" data-target="#" href="/page.html">
            <i className="fa fa-flag-o" aria-hidden="true"></i>
                      </a>
            <ul className="dropdown-menu notifications" role="menu" aria-labelledby="dLabel">
              <div className="notification-heading">
                <h4 className="menu-title">Order Queue</h4>
              </div>
              <li className="divider"></li>
              <div className="notifications-wrapper">
                <a className="content" href="#">
                  <div className="notification-item">
                    <h4 className="item-title">Pizza</h4>
                    <p className="item-info">Frank</p>
                  </div>
                </a>
                <a className="content" href="#">
                  <div className="notification-item">
                    <h4 className="item-title">Apple Pie</h4>
                    <p className="item-info">Joey</p>
                  </div>
                </a>
                <a className="content" href="#">
                  <div className="notification-item">
                    <h4 className="item-title">Chocolate Cake</h4>
                    <p className="item-info">Rachael</p>
                  </div>
                </a>
                <a className="content" href="#">
                  <div className="notification-item">
                    <h4 className="item-title">Chicken and Rice</h4>
                    <p className="item-info">Chandler</p>
                  </div>
                </a>
                <a className="content" href="#">
                  <div className="notification-item">
                    <h4 className="item-title">Sandwich</h4>
                    <p className="item-info">Ross</p>
                  </div>
                </a>
                <a className="content" href="#">
                  <div className="notification-item">
                    <h4 className="item-title">Smelly Cat</h4>
                    <p className="item-info">Phoebe</p>
                  </div>
                </a>
              </div>
              <li className="divider"></li>
              <div className="notification-footer">Possible Footer?</div>
            </ul>
          </div>
        </li>
      </ul>
      <ul className='navbar-nav'>
        { Auth.isUserAuthenticated() ?
          <li>
            <NavLink className='mr-3' activeClassName='active' to='/logout'>
              Log Out
            </NavLink>
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

export default Nav

