import React, {Component} from 'react';

class ReviewItem extends Component {

  render() {
    return (
      <li className='container-store border'>
        <h6><strong>Rating: </strong>{this.props.rating}</h6>
        <h6><strong>Review: </strong>{this.props.review}</h6>
      </li>
    )
  }
}

export default ReviewItem;