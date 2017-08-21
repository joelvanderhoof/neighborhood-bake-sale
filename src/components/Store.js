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

  componentDidMount () {
    // helpers.getStore(storeID)
    // .then((response) =>{
    //   this.setState({ store: response.data})
    // })

    let store = { // this is a dummy response object until the API routes are fully functional
      storeID: '1',
      sellerID: '111', // there are 2 store IDs? need to ask Joel, I'm guessing this is sellerID
      title: "John's Bistro",// missing store name, need to ask Joel
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
          <Switch>
            <Route exact path='/store' component={StoreFront} store={this.state.store} />
            <Route path='/review' component={WriteReview} />
            <Route render={ () => { return <p> Page Not Found</p>} } /> {/* To be replaced with a 404 error page */}
          </ Switch>
        </div>
      </Router>
    )
  }
}

export default Store;