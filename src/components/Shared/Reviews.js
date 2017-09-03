import React, {Component} from 'react';
import ReviewItem from './Reviews/ReviewItem';

class Reviews extends Component {
  constructor(props) {
    super(props);

    this.mapReviews = this.mapReviews.bind(this);
  }
  


  mapReviews () {
    let showReviews = this.props.reviews.map( (reviewItem,i) => {
      return <ReviewItem key={ i } rating={reviewItem.rating} reviewText={reviewItem.reviewText}/>
    })

    return showReviews;
  }

  render() {
    return (
      <ul className='list-unstyled mt-3'>
        <strong>Current Reviews: </strong>
        {this.props.reviews.length > 0 ? this.mapReviews() : <li className='container-store border'><h6><strong>No Reviews Found </strong></h6></li>}
      </ul>
    )
  }
}

export default Reviews;