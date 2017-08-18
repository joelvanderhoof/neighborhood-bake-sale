import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav';
import SearchMap from './children/SearchMap';
import Store from './Store';
import SellerAdmin from './SellerAdmin'

export default class Main extends Component {
    // constructor(props) {
    //     super(props)
    // }
    
    render() {
        return (
            <Router>
                <div className='main'>
                    <Nav />
                    <div className='container'>
                        <Route  path='/search-map' component={SearchMap} />
                        <Route  path='/store' component={Store} />
                        <Route path='/selleradmin' component={SellerAdmin} />
                    </div>
                </div>
            </Router>
        )
    }
}