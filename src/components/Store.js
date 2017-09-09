import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StoreFront from './Store/StoreFront';
import WriteReview from './Store/WriteReview';

// import helpers from './utils/helpers';

// Store front is accessed via /store/:storeID?

class Store extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Router>
        <div className='container rounded bg-white mb-3'>
          <Switch>
            <Route path='/store/:sellerId' component={ StoreFront } store={ this.state.store } />
            <Route path='/review/:sellerId' component={ WriteReview } />
            <Route render={ () => { return <p> Page Not Found</p>} } /> {/* To be replaced with a 404 error page */}
          </ Switch>
        </div>
      </Router>
    )
  }
}

export default Store;