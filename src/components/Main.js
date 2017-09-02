import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Nav from './Nav';
import Login from './Login';
import Logout from './Logout';
import SignUp from './SignUp';
import Home from './Home';
import Store from './Store';
import SellerAdmin from './SellerAdmin'
import CustomerAdmin from './Customer/CustomerAdmin';
import Auth from './utils/Auth';

//const loggedIn = false;


export default class Main extends Component {
    componentWillMount() {
        this.setState({ loggedIn: Auth.isUserAuthenticated() });
    }
    render() {
        const { loggedIn } = this.state;
        console.log(`Is the user logged in: ${loggedIn}`);
        return (
            <Router>
              <div className='main'>
                <Nav />
                <div className='container-fluid'>
                  <Switch>
                    <Route exact path='/' component={ Home }  />
                    <Route path='/store' component={ Store } />
                    <Route path='/selleradmin' render={ () => (
                        loggedIn ? (
                            <SellerAdmin/>
                        ) : (
                            <Redirect to="/login"/>
                        )
                        )} />
                    <Route path='/customeradmin' render={ () => (
                        loggedIn ? (
                            <CustomerAdmin/>
                        ) : (
                            <Redirect to="/login"/>
                        )
                        )} />
                    <Route path='/signup' component={ SignUp } />
                    <Route path='/login' render={ () => (
                        loggedIn ? (
                            <Redirect to="/"/>
                        ) : (
                            <Login />
                        )
                        )} />
                    <Route path='/logout' component={ Logout } />
                    <Route render={ () => {
                                        return <p> Page Not Found</p>
                                    } } />
                    { /* To be replaced with a 404 error page */ }
                    </ Switch>
                </div>
              </div>
            </Router>
        )
    }
}