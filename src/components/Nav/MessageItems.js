import React, { Component } from 'react';

class MessageItems extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    orderList(){
        let orderList;
        orderList =  this.props.order.map((order)=>{
            return <li>{order.item} - { "$" + parseFloat(order.price / 100).toFixed(2) }</li>;
          });
          return orderList;
    }

    render() {
        return (
            <div className="content" href="#">
              <div className="notification-item">
                <h4 className="item-title">Order from {this.props.customerName}</h4>
                <p className="item-info"><ul>{this.orderList()}</ul></p>
                <h4>Total: { "$" + parseFloat(this.props.orderTotal / 100).toFixed(2) }</h4>
                <button className="btn btn-primary">Accept</button>
                <button className="btn btn-danger">Decline</button>
              </div>
            </div>
            );
    }
}

export default MessageItems;
