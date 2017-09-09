import React, { Component } from 'react';
import ReviewItem from './Reviews/ReviewItem';
import helpers from '../utils/helpers';

class Reviews extends Component {
  mapReviews() {
    let mappedReviews = this.props.reviews.map((reviewItem, i) => {
      return <ReviewItem key={ i } rating={ reviewItem.rating } review={ reviewItem.review } customerFirstName={reviewItem.customerFirstName} customerLastName={reviewItem.customerLastName} storeName={reviewItem.storeName}/>
    });

    return mappedReviews;
  }

  render() {
    return (
      <ul className='list-unstyled mt-3'>
        <strong>Current Reviews: </strong>
        { this.props.reviews ? this.mapReviews() : <li className='container-store border'><h6><strong>No Reviews Found </strong></h6></li> }
      </ul>
    )
  }
}

export default Reviews;