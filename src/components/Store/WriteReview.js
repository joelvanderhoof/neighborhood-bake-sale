import React, {Component} from 'react';
import Rating from './WriteReview/Rating';

class WriteReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewText: '',
      rating: '',
    };
    this.postReview = this.postReview.bind(this);
    this.getRating = this.getRating.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  postReview(review) {
    // Placeholder, will need to do an AJAX call to submit the review
    console.log('review to be posted: ', review);
  }

  getRating(rating) {
    this.setState({
      rating: rating
    })
  }

  handleChange(event) {
    this.setState({
      [event.currentTarget.name]: event.target.value
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    let review = this.state;
    
    this.postReview(review);
    this.setState({reviewText: ''})
  }

  handleClick(event) {
    event.preventDefault();
    // Place holder for file stack
    // alert('File Stack goes here');
    console.log('clicked')
  }
  reviewInput() {}

  render() {
    return (
      <div>
        <h4>
          <strong>Your review</strong>
        </h4>
        <hr />
        <Rating getRating={ this.getRating } />
        <hr />
        <div id='review-container' className='border'>
          <div className='container'>
          {this.state.reviewText}
          </div>
        </div>

          <form onSubmit={this.handleSubmit}>
            <div className='form-group'>
              <textarea
                className='form-control'
                type='text'
                id='review-text'
                name='reviewText'
                value={this.state.reviewText}
                placeholder='Write your review here...'
                onChange={this.handleChange}
                required />
            </div>
            <button type='button' className='btn btn-sm pull-right' onClick={ this.handleClick } >Attach Photo <i className="fa fa-camera" aria-hidden="true" ></i></button>
            <button type='submit' className='btn btn-sm'>Submit Review <i className="fa fa-pencil" aria-hidden="true"></i></button>
          </form>
      </div>
    );
  }
}

export default WriteReview;
