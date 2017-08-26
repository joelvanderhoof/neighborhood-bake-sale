import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import StoreMap from './StoreFront/StoreMap';
import AddPhoto from './StoreFront/AddPhoto';
import Bookmark from './StoreFront/Bookmark';
import Order from './StoreFront/Order';

import StoreTitle from '../Shared/StoreTitle';
import StoreHours from '../Shared/StoreHours';
import StoreDescription from '../Shared//StoreDescription';
import Reviews from '../Shared/Reviews';
import Rating from '../Shared/Rating';

// Currently using for testing
import Menu from '../Shared/Menu';

let pizza = {
  name: 'Large Pepperoni Pizza',
  description: 'Gluten Free, Cheese from the rare hipster Cow, Pepperoni made from an Oak Tree',
  price: 1150,
  img: 'http://cdn.schwans.com/media/images/products/56720-1-1540.jpg',
  availability: 'In Stock!' //current inventory
};

let sandwich = {
  name: 'Cardboard',
  description: 'Made with no Peanuts',
  price: 200,
  img: 'https://static.pexels.com/photos/236834/pexels-photo-236834.jpeg',
  availability: 'Sold Out!' //current inventory
};

let drink = {
  name: 'Fat Free Burger',
  description: '0 Calories',
  price: 100,
  img: 'https://static.pexels.com/photos/8996/pexels-photo.jpg',
  availability: 'Sold Out!' //current inventory
};

let testMenu = [pizza, sandwich, drink];
// End Testing

class StoreFront extends Component {
  constructor(props) {
    super(props)
    this.state = {
      customerOrder: []
    }

    this.addToOrder = this.addToOrder.bind(this);
  }

  componentDidMount() {
    // helpers.getStore(storeID) .then((response) =>{   this.setState({ store:
    // response.data}) })

    this.setState({
      // this is a dummy response object until the API routes are fully functional
      storeID: '1',
      sellerID: '111', // there are 2 store IDs? need to ask Joel, I'm guessing this is sellerID
      title: 'John\'s Bistro', // missing store name, need to ask Joel
      location: 'Irvine, CA', // this is needed for the maps component
      menu: testMenu,
      hours: [
        '9:00AM-12:00PM', '1:00PM-6:00PM'
      ],
      description: 'Neighborhood Italian Spot',
      photos: ['http://www.grappaitalianbistro.com/uploads/files/images/grappa-italian-bistro-hs' +
          '04.jpg'],
      reviews: [
        {
          ref: '321' // some object id that is auto generated, this is needed for the reviews component
        }
      ]
    });
  }

  addToOrder(order) {
    this.setState({ customerOrder: this.state.customerOrder.concat(order) })
  }

  render() {
    return (
      <div className='container-store'>

        {/* Row */}
        <div className='row'>
          <div className='col-lg-6 col-sm-12'>
            <StoreTitle title={this.state.title} storeTitleStyle='h1'/>
            <StoreDescription description={this.state.description} storeDescriptionStyle='h6'/>
            <img
                className='img-fluid rounded mt-3 mb-3'
                src='http://www.grappaitalianbistro.com/uploads/files/images/grappa-italian-bistro-hs04.jpg'
                alt='Italian Bistro'/> {/* To be replaced with StorePhoto */}
            <StoreHours storeHoursStyle='list-unstyled' hours={['9:00AM-12:00PM', '1:00PM-6:00PM']}/>
            <hr />
            <Rating ratingStyle='rating col-12 mb-3' rating='4' numReviews='751'/> {/* Need a field for rating and number of reviews*/}
          </div>
          <div className='col-lg-6 col-md-12 align-middle'>
            <div className='store-front-link border'>
              <Link className='btn col-md-4 col-sm-12' to='/review'>
                <div><span style={ {color: 'gold', textShadow:'1px 1px goldenrod, 2px 2px #B57340, .1em .1em .2em rgba(0,0,0,.5)' }}>★</span>{'\u00A0'} Write Review </div>
              </Link>
              <AddPhoto AddPhotoStyle='btn red col-md-4 col-sm-12'/>
              <Bookmark BookmarkStyle='btn red col-md-4 col-sm-12'/>
            </div>
          </div>
        </div>
        {/* End Row */}
        <hr />
        {/* Row */}
        <div className='row justify-content-between'>
          {/* Left Column */}
          <div className='col-md-6 col-sm-12'>
            
            <Menu menu={ this.state.menu } addToOrder={ this.addToOrder } menuStyle='border justify-content-center store-front-menu mt-3 p-3' />
          </div>
          {/* End Left Column */}
          {/* Right Column */}
          <div className='col-md-6 col-sm-12'>
              <Order customerOrder={this.state.customerOrder} orderStyle='border mt-3 order' />
          </div>
          {/* End Right Column */}
        </div>
        {/* End Row */}
        <div className='row'>
          <div className='col-12'>
            <Reviews />
          </div>
          <div className='col-12'>
            <StoreMap storeMapStyle='border d-flex flex-column align-items-center justify-content-center store-map mt-3' location={this.state.location}/>
          </div>
        </div>
      </div>
    )
  }
}

export default StoreFront;