import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// Store is accessed via REST API. Example:
// neightborhood-bake-sale.com/store/:storeId, where :storeId is the mongoose _id
// of the store OR an auto incremented number so it is easier to read/deal
// with. Get request at /store/:storeId is supplied on page load and we will
// have all of the store's data stored into props.

export default class SearhMap extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <Router>
        <div className='container'>
          <h1>Search Map Component</h1>
        </div>
      </Router>
    )
  }
}
