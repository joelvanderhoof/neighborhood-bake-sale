import React, { Component } from 'react';
import MessageItems from "./MessageItems";
import Auth from "../utils/Auth";
import Helpers from "../utils/helpers";
import io from 'socket.io-client';

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {};

  }


  monitorStore() {
    let userID = Auth.getUserId();
    let socket = io.connect('http://localhost:8080');
    socket.on(userID, function(data) {
      console.log(data);
      //query menu DB

    // socket.emit('my other event', {
    //   my: 'data'
    // });
    });

  }

  listMenuItems(){
    let userID = Auth.getUserId();
    let allMessages;
    allMessages = this.props.messages.map((message) => {
      if (userID === message.sellerId && message.status !== "Declined") { //if seller and menu item isnt declined
        return <MessageItems requery={this.props.requery} entire={message} customerName={ message.buyerFirstName + " " + message.buyerLastName } status={message.status} customer={ false } sellerName={ "Bob" } order={ message.items } orderTotal={ message.orderTotal } />
      } else if(userID === message.customerId) {
        return <MessageItems requery={this.props.requery} entire={message} customerName={ message.buyerFirstName + " " + message.buyerLastName } status={message.status} customer={ true } sellerName={ "Bob" } order={ message.items } orderTotal={ message.orderTotal } />
      }
    })
    return allMessages;
  }

  updateOrderStatus() {
    //helper function - pass params to update status to declined or accepted - add picked up here or in another function
  }

  componentDidMount() {
    this.monitorStore();
  }

  render() {
    return (
      <div className="dropdown">
        <a id="dLabel" role="button" data-toggle="dropdown" data-target="#" href="/page.html">
          <i className="fa fa-cutlery" aria-hidden="true"></i> <span className="badge badge-danger">{ this.props.messages.length }</span>
        </a>
        <ul className="dropdown-menu notifications" role="menu" aria-labelledby="dLabel">
          <div className="notification-heading">
            <h4 className="menu-title">Messages</h4>
          </div>
          <li className="divider"></li>
          <div className="notifications-wrapper">
            { this.listMenuItems() }
          </div>
          <li className="divider"></li>
          <div className="notification-footer">Possible Footer?</div>
        </ul>
      </div>
      );
  }
}

export default Message;
