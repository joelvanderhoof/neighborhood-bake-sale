import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import WriteReview from './Store/WriteReview';
import StoreMap from './Store/StoreMap';
import helpers from './components/utils/helpers';

// Store front is accessed via /store/:storeID?

// Store Schema:

// storeID: String,
// storeID: String,  // Same as Sellers.ID
// location: String, // physical address
// menu: [{
//     type: Schema.Types.ObjectId, 
//     ref: 'MenuItem' }], // Array of orders
// hours: Array, // Array of objects of day + hours
// description: String,
// photos: Array, // Array of image URLs
// certified: Boolean, // Store passes inspection
// reviews: [{
//             type: Schema.Types.ObjectId, 
//             ref: 'Review' }], // Array of review IDs

export default class Store extends Component {
  constructor(props) {
    super(props)
    this.state = {}

  }

  componentDidMount () {
    // helpers.getStore(storeID)
    // .then((response) =>{
    //   this.setState({ store: response.data})
    // })

    let store = { // this is a dummy response object until the API routes are fully functional
      storeID: '1',
      sellerID: '111', // there are 2 store IDs? need to ask Joel, I'm guessing this is sellerID
      // missing store name, need to ask Joel
      location: 'Irvine, CA', // this is needed for the maps component
      menu: [{
        ref: '123' // some object id that is auto generated, this is needed for the menu component
        }],
      hours: [
        "9:00AM-12:00PM", "1:00PM-6:00PM"
      ],
      description: "Neighborhood Italian Spot",
      photos: ['https://imgur.com/cZYeTjG'],
      reviews: [{
        ref: '321' // some object id that is auto generated, this is needed for the reviews component
      }]
    }

    this.setState({ store });
  }

  render() {
    return (
      <Router>
        <div className='container border'>
          <h1>Store Front Component</h1>
          <StoreMap />
          <br />
          <Link to='/store/review'>
            <button className='btn btn-info'>Write Review</button>
          </Link>

          {/* Routes */}
          <Route exact path='/store/review' component={WriteReview} />
        </div>
      </Router>
    )
  }
}