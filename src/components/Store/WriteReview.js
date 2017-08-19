import React, {Component} from 'react';
import Rating from './WriteReview/Rating';

class WriteReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewText: ''
    };
    this.handleChange = this
      .handleChange
      .bind(this);
    this.handleSubmit = this
      .handleSubmit
      .bind(this);
  }

  handleChange(event) {
    console.log(event);
    this.setState({
      [event.currentTarget.name]: event.target.value
    });
  };

  handleSubmit(event) {
    let params = this.state;
    this
      .props
      .postReview(params);
    this.setState({reviewText: ''})
    event.preventDefault();
  }

  reviewInput() {}

  render() {
    return (
      <div>
        <h4>
          <strong>Your review</strong>
        </h4>
        <Rating/>
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
            <button type='submit' className='btn btn-sm'> Submit <i className="fa fa-pencil" aria-hidden="true"></i></button>
          </form>

        </div>
      </div>
    );
  }
}

export default WriteReview;
