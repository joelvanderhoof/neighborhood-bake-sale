import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
    return (
        <nav className='nav navbar navbar-toggleable-md'>
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
                <NavLink className='mr-3' activeClassName='active' to='signup'>
                    Sign Up
                </NavLink>
                <NavLink activeClassName='active' to='login'>
                    Log In
                </NavLink>
            </ul>
        </nav>
    )
}

export default Nav

