import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Rating from '../Shared/Rating';
import ReviewForm from './WriteReview/ReviewForm';
import Reviews from '../Shared/Reviews';
import helpers from '../utils/helpers';
import Auth from '../utils/Auth';

class WriteReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: '',
      reviews: [],
      customerFirstName: '',
      customerLastName: '',
      storeName: '',
    };

    this.postReview = this.postReview.bind(this);
    this.getRating = this.getRating.bind(this);
  }

  componentDidMount() {
    const customerId = Auth.getUserId();
    const token = Auth.getToken();
    let sellerId = this.props.location.pathname.split('/')[2];

    helpers.getPublicReview(sellerId)
      .then((response) => {
        let reviewData = response.data;
        this.setState({
          reviews: reviewData
        });
      })
    
    helpers.getUserSecure(customerId, token)
    .then((response) => {
      let userData = response.data[0];
      this.setState({
        customerFirstName: userData.firstName,
        customerLastName: userData.lastName,
      })
    });
    
    helpers.getPublicStore(sellerId)
      .then((response)=>{
        let storeData = response.data[0];
        this.setState({
          storeName: storeData.name,
        });
      })

  }

  postReview(review) {
    const customerId = Auth.getUserId();
    const token = Auth.getToken();
    const sellerId = this.props.location.pathname.split('/')[2];

    let postReview = {
      review: review,
      rating: this.state.rating,
      customerFirstName: this.state.customerFirstName,
      customerLastName: this.state.customerLastName,
      customerId: customerId,
      storeName: this.state.storeName,
      sellerId: sellerId,
    }
    helpers.postReview(sellerId,postReview,token);
  }

  getRating(rating) {
    this.setState({rating: rating})
  }

  render() {
    const back = `/store/${this.props.location.pathname.split('/')[2]}`
    return (
      <div className='container bg-white'>
        <Link className='btn' to={back}>
          <i className="fa fa-angle-double-left" aria-hidden="true"></i>
          {'\u00A0'}Back
        </Link>
        <hr/>
        <h4 className='text-center'>
          <strong>Your review</strong>
        </h4>
        <hr/>
        <div className='container-store border d-flex align-items-around'>
          <div className='col-6'>
            <div className='col-12'>
              <Rating getRating={this.getRating}/>
              <hr />
            </div>
            <div className='col-12'>
              <ReviewForm postReview={this.postReview}/>
            </div>
          </div>
          <div className='col-6'>
            <Reviews reviews={this.state.reviews} />          
          </div>
        </div>
      </div>
    );
  }
}

export default WriteReview;