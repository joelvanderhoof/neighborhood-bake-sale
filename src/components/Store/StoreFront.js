import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import StoreMap from './StoreMap';
import StoreTitle from "../Seller/StoreTitle";
import StoreHours from "../Seller/StoreHours";
import StoreDescription from "../Seller/StoreDescription";

class StoreFront extends Component {
  constructor(props) {
    super(props)
    this.state = {}

  }

  componentDidMount() {
    // helpers.getStore(storeID) .then((response) =>{   this.setState({ store:
    // response.data}) })

    this.setState({
      // this is a dummy response object until the API routes are fully functional
      storeID: '1',
      sellerID: '111', // there are 2 store IDs? need to ask Joel, I'm guessing this is sellerID
      title: "John's Bistro", // missing store name, need to ask Joel
      location: 'Irvine, CA', // this is needed for the maps component
      menu: [
        {
          ref: '123' // some object id that is auto generated, this is needed for the menu component
        }
      ],
      hours: [
        "9:00AM-12:00PM", "1:00PM-6:00PM"
      ],
      description: "Neighborhood Italian Spot",
      photos: ['http://www.grappaitalianbistro.com/uploads/files/images/grappa-italian-bistro-hs' +
          '04.jpg'],
      reviews: [
        {
          ref: '321' // some object id that is auto generated, this is needed for the reviews component
        }
      ]
    });
  }

  render() {
    return (
      <div className='container-store'>

        {/* Row */}
        <div className='row'>
          <div className='col-12'>
            <StoreTitle title={this.state.title}/>
            <Link to='/review'>
              Write Review {'\u00A0'}
              <i className="fa fa-pencil" aria-hidden="true"></i>
            </Link>
          </div>
          <div className='col-12'>
            <StoreDescription description={this.state.description}/>
          </div>
        </div>
        {/* End Row */}

        {/* Row */}
        <div className='row justify-content-between'>
          <div className='col-6'>
            <img
              className='img-fluid rounded'
              src='http://www.grappaitalianbistro.com/uploads/files/images/grappa-italian-bistro-hs04.jpg'
              alt='Italian Bistro'/> {/* To be replaced with StorePhoto */}
            <StoreHours hours={["9:00AM-12:00PM", "1:00PM-6:00PM"]}/>
          </div>
          <div className='col-4'>
            <StoreMap/>
          </div>
        </div>
        {/* End Row */}

      </div>
    )
  }
}

export default StoreFront;