import React, {Component} from 'react';
import OrderItem from './Order/OrderItem'

class Order extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.handleClick = this.handleClick.bind(this);
  }

  mapOrder () {
    if ( this.props.customerOrder ) {
      let showOrders = this.props.customerOrder.map( (orderItem,i) => {
        return <OrderItem key={ i } index={ i } item={ orderItem.item } price={ orderItem.price } orderItemStyle='h6 border p-3 m-1' />
      })
      return showOrders;
    }
  }

  handleClick () {
    this.props.placeOrder()
  }

  render() {
    return (
      <div>
        <div className={this.props.orderStyle}>
        {this.mapOrder()}
        </div>
        <button className='btn btn-secondary float-left mt-1' onClick={this.handleClick}>Place order</button>
        {this.props.orderTotal > 0 ? <span className='float-right'>Total: ${parseFloat(this.props.orderTotal/100).toFixed(2)}</span> : <span className='float-right'>Total: $0.00</span>}
      </div>
    )
  }
}

export default Order;