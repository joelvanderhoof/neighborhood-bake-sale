import React, { Component } from 'react';
import Helpers from "../utils/helpers";

class MessageItems extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    orderList() {
        let orderList;
        orderList = this.props.order.map((order) => {
            return <li>
                     { order.item } -
                     { "$" + parseFloat(order.price / 100).toFixed(2) }
                   </li>;
        });
        return orderList;
    }


    markAccepted() {
        let currentOrder = this.props.entire;
        currentOrder.status = "Accepted";
        Helpers.updateOrderStatus(currentOrder._id, currentOrder).then((response) => {
            //call passed down function to requery
        });
    }

    markDeclined() {
        let currentOrder = this.props.entire;
        currentOrder.status = "Declined";
        Helpers.updateOrderStatus(currentOrder._id, currentOrder).then((response) => {
            //call passed down function to requery
        });
    }

    render() {
        if (this.props.customer) { //if customer
            return (
                <div className="content" href="#">
                  <div className="notification-item">
                    <h4 className="item-title">Ordered from { this.props.sellerName }</h4>
                    <p className="item-info">
                      <ul>
                        { this.orderList() }
                      </ul>
                    </p>
                    <h4>Total: { "$" + parseFloat(this.props.orderTotal / 100).toFixed(2) }</h4>
                    <h4>Status: { this.props.status }</h4>
                  </div>
                </div>
                );
        }
        if (this.props.status == "Pending") {
            return (
                <div className="content" href="#">
                  <div className="notification-item">
                    <h4 className="item-title">Order from { this.props.customerName }</h4>
                    <p className="item-info">
                      <ul>
                        { this.orderList() }
                      </ul>
                    </p>
                    <h4>Total: { "$" + parseFloat(this.props.orderTotal / 100).toFixed(2) }</h4>
                    <button className="btn btn-primary">Accept</button>
                    <button className="btn btn-danger">Decline</button>
                  </div>
                </div>
                );
        }
        return ( //seller view - accepted
            <div className="content" href="#">
              <div className="notification-item">
                <h4 className="item-title">Order from { this.props.customerName }</h4>
                <p className="item-info">
                  <ul>
                    { this.orderList() }
                  </ul>
                </p>
                <h4>Total: { "$" + parseFloat(this.props.orderTotal / 100).toFixed(2) }</h4>
                <button className="btn btn-success">Customer Picked Up</button>
              </div>
            </div>
            );
    }
}

export default MessageItems;
