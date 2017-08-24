import React, {Component} from 'react';

class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: '0'
    }
    this.handleClick = this.handleClick.bind(this);      
  }

  handleClick (event) {
    this.props.getRating(event.target.value);
    this.setState({
      rating: event.target.value
    });
  }

  render() {
    return (
      <fieldset className="rating">
        {this.state.rating !== '0' ? (<legend>Your Rating is: { this.state.rating } stars!</legend>) : (<legend>Please Rate: </legend>)}
        <div className='float-left'>
          <input type="radio" id="star5" name="rating" value="5" onClick={this.handleClick} /><label htmlFor="star5" title="Rocks!" >5 stars</label>
          <input type="radio" id="star4" name="rating" value="4" onClick={this.handleClick} /><label htmlFor="star4" title="Pretty good" >4 stars</label>
          <input type="radio" id="star3" name="rating" value="3" onClick={this.handleClick} /><label htmlFor="star3" title="Meh" >3 stars</label>
          <input type="radio" id="star2" name="rating" value="2" onClick={this.handleClick} /><label htmlFor="star2" title="Kinda bad" >2 stars</label>
          <input type="radio" id="star1" name="rating" value="1" onClick={this.handleClick} /><label htmlFor="star1" title="Sucks big time" >1 star</label>
        </div>
      </fieldset>
    )
  }
}

export default Rating;