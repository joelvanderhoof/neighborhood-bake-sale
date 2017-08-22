import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Rating from './WriteReview/Rating';
import ReviewForm from './WriteReview/ReviewForm';
import Reviews from './WriteReview/Reviews';

class WriteReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewText: '',
      rating: ''
    };

    this.getReview = this
      .getReview
      .bind(this);
    this.getRating = this
      .getRating
      .bind(this);
  }

  getReview(review) {
    // Placeholder, will need to do an AJAX call to submit the review
    this.setState({reviewText: review})
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
            <br/> {this.state.reviewText && <h4>Review: {this.state.reviewText}
            </h4>}
          </div>
          <div className='col-6'>
            <Reviews />          
          </div>

        </div>
        <ReviewForm getReview={this.getReview}/>
      </div>
    );
  }
}

export default WriteReview;