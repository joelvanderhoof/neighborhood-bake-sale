import React, {Component} from 'react';

class ReviewItem extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <li className='container-store border'>
        <h4>Rating: {this.props.rating}</h4>
        <h4>Review: {this.props.reviewText}</h4>
      </li>
    )
  }
}

export default ReviewItem;