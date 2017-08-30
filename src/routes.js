import Main from './components/Main';
import Nav from './components/Nav';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Store from './components/Store';
import SellerAdmin from './components/SellerAdmin'
import CustomerAdmin from './components/Customer/CustomerAdmin';
import Auth from './modules/Auth';

const routes = {
  // base component (wrapper for the whole application).
  component: Main,
  childRoutes: [

    {
      path: '/',
      getComponent: (location, callback) => {
        if (Auth.isUserAuthenticated()) {
          callback(null, Home);
        } else {
          callback(null, Home);
        }
      }
    },

    {
      path: '/login',
      component: Login
    },

    {
      path: '/signup',
      component: SignUp
    },

    {
      path: '/logout',
      onEnter: (nextState, replace) => {
        Auth.deauthenticateUser();

        // change the current URL to /
        replace('/');
      }
    }

  ]
};

export default routes;