import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Nav from './Nav';
import MapSearch from './MapSearch/MapSearch';
import Login from './Login';
import Logout from './Logout';
import SignUp from './SignUp';
import Home from './Home';
import Store from './Store';
import WriteReview from './Store/WriteReview';
import SellerAdmin from './SellerAdmin'
import CustomerAdmin from './CustomerAdmin';
import Auth from './utils/Auth';

export default class Main extends Component {
    componentWillMount() {
        this.setState({ loggedIn: Auth.isUserAuthenticated() });
    }

    render() {
        const { loggedIn } = this.state;
        
        return (
            <Router>
              <div className='main'>
                <Nav />
                <div className='container-fluid'>

                    <Switch>
                        <Route exact path='/' component={ Home }  />
                        <Route path='/map' component={MapSearch} />
                        <Route path='/store/:sellerId' component={ Store } />
                        <Route path='/review/:sellerId' component={ WriteReview } />
                        <Route path='/selleradmin' render={ () => (loggedIn ? (<SellerAdmin/>) : (<Redirect to="/login"/>))} />
                        <Route path='/customeradmin' render={ () => (loggedIn ? (<CustomerAdmin/>) : (<Redirect to="/login"/>))} />
                        <Route path='/signup' component={ SignUp } />
                        <Route path='/login' render={ () => (loggedIn ? (<Redirect to="/"/>) : (<Login />))} />
                        <Route path='/logout' component={ Logout } />
                        <Route render={ () => {return <h1> Page Not Found</h1>} } /> { /* To be replaced with an error page */ }
                    </ Switch>
                </div>
              </div>
            </Router>
        )
    }
}