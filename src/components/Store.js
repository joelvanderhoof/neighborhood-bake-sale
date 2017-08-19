import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import WriteReview from './Store/WriteReview';

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
    this.postReview = this.postReview.bind(this);
  }

  postReview(review) {
    // Placeholder, will need to do an AJAX call to submit the review
    console.log('review to be posted: ', review);
  }

  render() {
    return (
      <Router>
        <div className='container border'>
          <h1>Store Front Component</h1>
          <Link to='/review'>
            <button className='btn btn-info'>Write Review</button>
          </Link>

          <Route path='/review' render= {props => <WriteReview postReview={this.postReview}/>}/>
          {/* {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route}/>
          ))} */}

        </div>
      </Router>
    )
  }
}