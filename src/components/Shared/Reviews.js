import React, {Component} from 'react';
import ReviewItem from './Reviews/ReviewItem';

// Dummy review data
// let reviews = [
//   {
//     rating: '5',
//     reviewText: 'This place is amazing!'
//   },
//   {
//     rating: '4',
//     reviewText: 'The Pizza was so crispy!'
//   },
//   {
//     rating: '1',
//     reviewText: 'I got food poisoning :('
//   }
// ]

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
        {this.mapReviews()}
      </ul>
    )
  }
}

export default Reviews;