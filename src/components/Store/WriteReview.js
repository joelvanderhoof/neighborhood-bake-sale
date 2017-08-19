import React, {Component} from 'react';
import Rating from './WriteReview/Rating';

class WriteReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewText: ''
    };
    this.postReview = this.postReview.bind(this);
    this.getRating = this.getRating.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  postReview(review) {
    // Placeholder, will need to do an AJAX call to submit the review
    console.log('review to be posted: ', review);
  }

  getRating(rating) {
    console.log(rating);
  }

  handleChange(event) {
    console.log(event);
    this.setState({
      [event.currentTarget.name]: event.target.value
    });
  };

  handleSubmit(event) {
    console.log('params',this.params);
    console.log('props',this.props);
    event.preventDefault();
    let params = this.state;
    
    this.postReview(params);
    this.setState({reviewText: ''})
  }

  handleClick() {
    console.log('clicked');
  }
  reviewInput() {}

  render() {
    return (
      <div>
        <h4>
          <strong>Your review</strong>
        </h4>
        <Rating getRating={ this.getRating } />
        <hr />
        <div id='review-container'>
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
            <button type='button' className='btn btn-sm pull-right'>Attach Photo <i className="fa fa-camera" aria-hidden="true" onClick={this.handleClick}></i></button>
            <button type='submit' className='btn btn-sm'>Submit Review <i className="fa fa-pencil" aria-hidden="true" onClick={this.handleClick}></i></button>
          </form>
        </div>
      </div>
    );
  }
}

export default WriteReview;
