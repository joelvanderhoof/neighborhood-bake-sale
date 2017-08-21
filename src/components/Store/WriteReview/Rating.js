import React, {Component} from 'react';

class Rating extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);      
  }

  handleClick (event) {
    this.props.getRating(event.currentTarget.id);
  }

  render() {
    return (
      <div className="rating">
        <span id='5' onClick={this.handleClick}>☆</span>
        <span id='4' onClick={this.handleClick}>☆</span>
        <span id='3' onClick={this.handleClick}>☆</span>
        <span id='2' onClick={this.handleClick}>☆</span>
        <span id='1' onClick={this.handleClick}>☆</span>
      </div>
    )
  }
}

export default Rating;