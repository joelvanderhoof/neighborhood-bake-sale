import React, { Component } from 'react';
import ReviewItem from './Reviews/ReviewItem';

class Reviews extends Component {
  mapReviews() {
    let mappedReviews = this.props.reviews.map((reviewItem, i) => {
      return <ReviewItem key={ i } rating={ reviewItem.rating } review={ reviewItem.review } customerFirstName={reviewItem.customerFirstName} customerLastName={reviewItem.customerLastName} storeName={reviewItem.storeName}/>
    });

    return mappedReviews;
  }

  render() {
    return (
      <ul className='list-unstyled p-3 mt-3 border'>
        <h3 className='mb-3' >Reviews: </h3>
        { this.props.reviews ? this.mapReviews() : <li className='p-3 mb-3 border'><h6><strong>No Reviews Found </strong></h6></li> }
      </ul>
    )
  }
}

export default Reviews;