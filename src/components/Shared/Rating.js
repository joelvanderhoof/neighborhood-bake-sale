import React, {Component} from 'react';

class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 5
    }
    this.handleClick = this.handleClick.bind(this);      
  }

  handleClick (event) {
    this.setState({
      rating: parseInt(event.target.id,10)
    });
    this.props.getRating(parseInt(event.target.id,10));
  }

  render() {
    if(this.props.rating) {
      return (
        <fieldset className={this.props.ratingStyle}>
          <h4 className='d-inline-block'>Reviews: {this.props.numReviews}</h4>
          <div className='float-left store-front-star'>
            <input type="radio" id="5" name="rating" disabled='true' checked={this.props.rating === 5} value='5' onClick={this.handleClick} /><label htmlFor="5" title="Rocks!" ></label>
            <input type="radio" id="4" name="rating" disabled='true' checked={this.props.rating === 4} value='4' onClick={this.handleClick} /><label htmlFor="4" title="Pretty good" ></label>
            <input type="radio" id="3" name="rating" disabled='true' checked={this.props.rating === 3} value='3' onClick={this.handleClick} /><label htmlFor="3" title="Meh" ></label>
            <input type="radio" id="2" name="rating" disabled='true' checked={this.props.rating === 2} value='2' onClick={this.handleClick} /><label htmlFor="2" title="Kinda bad" ></label>
            <input type="radio" id="1" name="rating" disabled='true' checked={this.props.rating === 1} value='1' onClick={this.handleClick} /><label htmlFor="1" title="Sucks big time" ></label>
          </div>
        </fieldset>
      )
    } else {
    return (
      <fieldset className="rating">
        {this.state.rating !== 0 ? (<legend>Your Rating is: { this.state.rating } stars!</legend>) : (<legend>Select Your rating: </legend>)}
        <div className='float-left'>
          <input type="radio" id="5" name="rating" value={this.state.rating} checked={this.state.rating === 5} onClick={this.handleClick} /><label htmlFor="5" title="Rocks!" ></label>
          <input type="radio" id="4" name="rating" value={this.state.rating} checked={this.state.rating === 4} onClick={this.handleClick} /><label htmlFor="4" title="Pretty good" ></label>
          <input type="radio" id="3" name="rating" value={this.state.rating} checked={this.state.rating === 3} onClick={this.handleClick} /><label htmlFor="3" title="Meh" ></label>
          <input type="radio" id="2" name="rating" value={this.state.rating} checked={this.state.rating === 2} onClick={this.handleClick} /><label htmlFor="2" title="Kinda bad" ></label>
          <input type="radio" id="1" name="rating" value={this.state.rating} checked={this.state.rating === 1} onClick={this.handleClick} /><label htmlFor="1" title="Sucks big time" ></label>
        </div>
      </fieldset>
    )
  }
  }
}

export default Rating;