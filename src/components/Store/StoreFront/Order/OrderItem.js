import React, {Component} from 'react';

class OrderItem extends Component {
  render() {
    return (
      <div className={this.props.orderItemStyle}>
          <span>{this.props.item} </span>
          <span className='float-right'>{ "$" + parseFloat(this.props.price / 100).toFixed(2) } </span>   
      </div>
    )
  }
}

export default OrderItem;