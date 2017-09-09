import React, {Component} from 'react';

class ReviewForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      reviewText: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.currentTarget.name]: event.target.value
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    let review = this.state.reviewText;
    this.props.postReview(review);
    this.setState({reviewText: ''})
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <textarea
            className='form-control'
            rows='5'
            type='text'
            id='review-text'
            name='reviewText'
            value={this.state.reviewText}
            placeholder='Your review helps others learn about great local businesses.'
            onChange={this.handleChange}
            required />
        </div>
        <button type='button' className='btn btn-sm ' onClick={ this.handleClick } >Attach Photo {'\u00A0'} <i className="fa fa-camera" aria-hidden="true" ></i></button>
        <button type='submit' className='btn btn-sm pull-right'>Submit Review {'\u00A0'} <i className="fa fa-eye" aria-hidden="true"></i></button>
    </form>
    )
  }
}

export default ReviewForm;