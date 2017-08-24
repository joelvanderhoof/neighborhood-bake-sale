import React, {Component} from 'react';
import ReviewItem from './ReviewItem';

// Dummy review data
let reviews = [
  {
    rating: '5',
    reviewText: 'This place is amazing!'
  },
  {
    rating: '4',
    reviewText: 'The Pizza was so crispy!'
  },
  {
    rating: '1',
    reviewText: 'I got food poisoning :('
  }
]

class Reviews extends Component {
  constructor(props) {
    super(props);

    this.mapReviews = this.mapReviews.bind(this);
  }
  


  mapReviews () {
    let showReviews = reviews.map( (reviewItem,i) => {
      return <ReviewItem key={ i } rating={reviewItem.rating} reviewText={reviewItem.reviewText}/>
    })

    return showReviews;
  }

  render() {
    return (
      <ul className='list-unstyled'>
        <h1>Current Reviews: </h1>
        {this.mapReviews()}
      </ul>
    )
  }
}

export default Reviews;