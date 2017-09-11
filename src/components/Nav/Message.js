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


  monitorStore(cb) {
    let userID = Auth.getUserId();
    let socket = io.connect('https://neighborhood-bake-sale.herokuapp.com/');
    socket.on(userID, function(data) {
      if (data.message === "Orders Updated") {
        cb();
      }
    });

  }

  listMenuItems() {
    let userID = Auth.getUserId();
    let allMessages;
    allMessages = this.props.messages.map((message) => {
      if (userID === message.sellerId) { //if seller and menu item isnt declined
        return <MessageItems customerID={ message.customerId } sellerId={ message.sellerId } requery={ this.props.requery } entire={ message } customerName={ message.buyerFirstName + " " + message.buyerLastName }
                 status={ message.status } customer={ false } sellerName={ message.sellerFirstName + " " + message.sellerLastName } order={ message.items } orderTotal={ message.orderTotal } />
      } else if (userID === message.customerId) {
        return <MessageItems customerID={ message.customerId } sellerId={ message.sellerId } requery={ this.props.requery } entire={ message } customerName={ message.buyerFirstName + " " + message.buyerLastName }
                 status={ message.status } customer={ true } sellerName={ message.sellerFirstName + " " + message.sellerLastName } order={ message.items } orderTotal={ message.orderTotal } />
      }
    })
    return allMessages;
  }

  componentDidMount() {
    this.monitorStore(this.props.requery);
  }
 
  render() {
    return (
      <div className="dropdown">
        <a id="dLabel" role="button" data-toggle="dropdown" data-target="#" href="#">
          <i className="fa fa-cutlery mr-2" aria-hidden="true"></i> <span className="badge badge-danger">{ this.props.messages.length }</span>
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
        </ul>
      </div>
      );
  }
}

export default Message;
