import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Nav from './Nav'
import SearchMap from './children/SearchMap'
import Store from './children/Store'

export default class Main extends Component {
    render() {
        return (
            <Router>
                <div className='container'>
                    <Nav />
                    <Route  path='/search-map' component={SearchMap} />
                    <Route  path='/store' component={Store} />
                </div>
            </Router>
        )
    }
}