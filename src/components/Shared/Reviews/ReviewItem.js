import React, {Component} from 'react';

class ReviewItem extends Component {

  render() {
    return (
      <li className='p-3 mb-3 border'>
        <h6><strong>Review for: </strong>{this.props.storeName}</h6>
        <h6><strong>Reviewed by: </strong>{this.props.customerFirstName} {this.props.customerLastName}</h6>
        <h6><strong>Rating: </strong>{this.props.rating}</h6> 
        <h6><strong>Review: </strong>{this.props.review}</h6>
      </li>
    )
  }
}

export default ReviewItem;