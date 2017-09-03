import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Rating from '../Shared/Rating';
import ReviewForm from './WriteReview/ReviewForm';
import Reviews from '../Shared/Reviews';
import helpers from '../utils/helpers';

class WriteReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      review: '',
      rating: '',
      reviews: []
    };

    this.getReview = this.getReview.bind(this);
    this.getRating = this.getRating.bind(this);
  }

  componentDidMount() {
    // randy@test.com  sellerId is 59ab34d106e8a23b58e70560// password123 -> storeId is 59ab34d106e8a23b58e70561
    let sellerId = this.props.location.pathname.split('/')[2]
    helpers.getPublicReview(sellerId)
      .then((response) => {
        let reviewData = response.data[0];
        this.setState({
          reviews: reviewData
        });
      })
  }

  getReview(review) {
    // Placeholder, will need to do an AJAX call to submit the review
    this.setState({review: review})
  }

  getRating(rating) {
    this.setState({rating: rating})
  }

  render() {
    return (
      <div className='container'>
        <Link className='btn' to='/store'>
          <i className="fa fa-angle-double-left" aria-hidden="true"></i>
          {'\u00A0'}Back
        </Link>
        <hr/>
        <h4 className='text-center'>
          <strong>Your review</strong>
        </h4>
        <Rating getRating={this.getRating}/>
        <hr/>

        <div className='container-store border d-flex align-items-around'>

          <div className='col-6'>
            {this.state.rating && <h4>Rating: {this.state.rating}
            </h4>}
            <br/> {this.state.review && <h4>Review: {this.state.review}
            </h4>}
          </div>
          <div className='col-6'>
            <Reviews reviews={this.state.reviews} />          
          </div>

        </div>
        <ReviewForm getReview={this.getReview}/>
      </div>
    );
  }
}

export default WriteReview;