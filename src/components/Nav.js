import React from 'react'
import { NavLink } from 'react-router-dom'

 function Nav () {
    return (
        <ul className='nav'>
            <li>
                <NavLink exact activeClassName='active' to='/'>
                    Home
                </NavLink>
            </li>
            <br />
            <li>
                <NavLink activeClassName='active' to='/search-map'>
                    Search Map
                </NavLink>
            </li>
            <br />
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
    )
 }

 export default Nav