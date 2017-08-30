import React from 'react'
import { NavLink } from 'react-router-dom'
import Auth from '../modules/Auth';

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
            </ul>

            <ul className='navbar-nav'>
              {Auth.isUserAuthenticated() ? 
              <li> 
                <NavLink className='mr-3' activeClassName='active' to='logout'>
                  Log Out
                </NavLink>
              </li> 
              : 
              <li>
              <NavLink className='mr-3' activeClassName='active' to='signup'>
                Sign Up
              </NavLink>
              <NavLink activeClassName='active' to='login'>
                Log In
              </NavLink>
              </li>
              }
            </ul>
        </nav>
    )
}

export default Nav

