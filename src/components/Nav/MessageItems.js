import React, { Component } from 'react';
import Helpers from "../utils/helpers";
import io from 'socket.io-client';
let socket = io.connect('https://neighborhood-bake-sale.herokuapp.com/');

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
            this.props.requery();  
                socket.emit("users", {
                  customerID: this.props.customerID,
                  message: "Orders Updated"
                });
        });
    }

    markDeclined() {
        let currentOrder = this.props.entire;
        currentOrder.status = "Declined";
        Helpers.updateOrderStatus(currentOrder._id, currentOrder).then((response) => {
            this.props.requery();
            socket.emit("users", {
              customerID: this.props.customerID,
              message: "Orders Updated"
            });
        });
    }

    markPickedUp() {
      let currentOrder = this.props.entire;
      currentOrder.pickedUp = true;
      Helpers.updateOrderStatus(currentOrder._id, currentOrder).then((response) => {
          this.props.requery();
          socket.emit("users", {
            customerID: this.props.customerID,
            message: "Orders Updated"
          });
      });
  }

  markPickedUpCustomer() {
    let currentOrder = this.props.entire;
    currentOrder.pickedUp = true;
    Helpers.updateOrderStatusCustomer(currentOrder._id, currentOrder).then((response) => {
        this.props.requery();
        socket.emit("users", {
          customerID: this.props.sellerId,
          message: "Orders Updated"
        });
    });
}

    render() {
        if (this.props.customer && this.props.status === "Pending") { //customer
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
        if (this.props.customer && this.props.status === "Accepted") { //customer
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
                  <button className="btn btn-success" onClick={()=>{this.markPickedUpCustomer()}}>Food Picked Up</button>
                </div>
              </div>
              );
      }
      if (this.props.customer && this.props.status === "Declined") { //customer
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
                <button className="btn btn-danger" onClick={()=>{this.markPickedUpCustomer()}}>Clear</button>
              </div>
            </div>
            );
    }
        if (this.props.status === "Pending") { //seller
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
                    <button className="btn btn-primary" onClick={()=>{this.markAccepted()}}>Accept</button>
                    <button className="btn btn-danger" onClick={()=>{this.markDeclined()}}>Decline</button>
                  </div>
                </div>
                );
        }
        if (this.props.status === "Declined") { //seller
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
                  <h4>Status: { this.props.status }</h4>
                  <button className="btn btn-danger" onClick={()=>{this.markPickedUp()}}>Clear</button>
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
                <button className="btn btn-success" onClick={()=>{this.markPickedUp()}}>Customer Picked Up</button>
              </div>
            </div>
            );
    }
}

export default MessageItems;
