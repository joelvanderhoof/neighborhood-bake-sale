import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import WriteReview from './Store/WriteReview';
import StoreMap from './Store/StoreMap';

// const routes = [
//   { path: '/review',
//     component: WriteReview
//   }
// ]

// const RouteWithSubRoutes = (route) => (
//   <Route path={route.path} render={props => (
//     // pass the sub-routes down to keep nesting
//     <route.component {...props} routes={route.routes}/>
//   )}/>
// )

export default class Store extends Component {
  constructor(props) {
    super(props)
    this.state = {}

  }

  render() {
    return (
      <Router>
        <div className='container border'>
          <h1>Store Front Component</h1>
          <StoreMap />
          <br />
          {/* <Route exact path='/store'> */}
          <Link to='/store/review'>
            <button className='btn btn-info'>Write Review</button>
          </Link>
          {/* </Route> */}
          

          {/* {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route}/>
          ))} */}

          <Route exact path='/store/review' component={WriteReview} />

        </div>
      </Router>
    )
  }
}