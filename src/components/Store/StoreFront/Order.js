import React, {Component} from 'react';

class Order extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    
  }

  render() {
    return (
      <div>
        <div className={this.props.orderStyle}>
        {this.props.customerOrder}
        Order
        </div>
        <button className='btn btn-secondary float-right mt-1' onClick={this.handleClick}>Place order</button>
      </div>
    )
  }
}

export default Order;