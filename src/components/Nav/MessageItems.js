import React, { Component } from 'react';

class MessageItems extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
        return (
            <div className="content" href="#">
              <div className="notification-item">
                <h4 className="item-title">{this.props.order}</h4>
                <p className="item-info">{this.props.customerName}</p>
                <button className="btn btn-primary">Accept</button>
                <button className="btn btn-danger">Decline</button>
              </div>
            </div>
            );
    }
}

export default MessageItems;
