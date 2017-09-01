import React, { Component } from 'react';
import MessageItems from "./MessageItems";

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
        let allMessages;

        allMessages = this.props.messages.map((message) => {
            return <MessageItems customerName={message.customerName} storeName={message.storeName} order={message.order}/>
        })
        return (
            <div className="dropdown">
              <a id="dLabel" role="button" data-toggle="dropdown" data-target="#" href="/page.html">
                <i className="fa fa-envelope-o" aria-hidden="true"></i> <span className="badge badge-danger">{this.props.messages.length}</span>
              </a>
              <ul className="dropdown-menu notifications" role="menu" aria-labelledby="dLabel">
                <div className="notification-heading">
                  <h4 className="menu-title">Messages</h4>
                </div>
                <li className="divider"></li>
                <div className="notifications-wrapper">
                  {allMessages}
                </div>
                <li className="divider"></li>
                <div className="notification-footer">Possible Footer?</div>
              </ul>
            </div>
            );
    }
}

export default Message;
