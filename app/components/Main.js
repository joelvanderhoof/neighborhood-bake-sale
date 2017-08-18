
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Nav from './Nav'
import SearchMap from './children/SearchMap'
import SellerAdmin from './SellerAdmin'
import Store from './children/Store'

export default class Main extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <Router>
                <div className='container'>
                    <Nav />
                    <Route  path='/search-map' component={SearchMap} />
                    <Route  path='/store' component={Store} />
                    <Route  path='/selleradmin' component={SellerAdmin} />
                </div>
            </Router>
        )
    }
}
