import React from 'react'
import { NavLink } from 'react-router-dom'

 function Nav () {
    return (
        <ul className='nav'>
            <li>
                <NavLink exact activeClassName='active' to='/'>
                    <button className='btn btn-primary'>Home</button>
                </NavLink>
            </li>
            <br />
            <li>
                <NavLink activeClassName='active' to='/search-map'>
                <button className='btn btn-info'>Search Map</button>
                </NavLink>
            </li>
            <br />
            <li>
                <NavLink activeClassName='active' to='/store'>
                <button className='btn btn-primary'>Store</button>
                </NavLink>
            </li>
        </ul>
    )
 }

 export default Nav