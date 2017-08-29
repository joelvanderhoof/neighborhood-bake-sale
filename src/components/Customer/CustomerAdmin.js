import React, {Component} from 'react';

class CustomerAdmin extends Component {
    constructor(props){
        super(props);
        this.state = {
            //properties here
        }
    }

    componentDidMount() {
        //set states
    }

    getMessages() {
        //get messages
    }

    getReviews() {
        //get reviews
    }

    getOrders() {
        //get orders function
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="card" style={{width: '20rem'}}>
                            <img className="card-img-top" src="https://media.wired.com/photos/5933392eaef9a462de985b45/master/w_660,c_limit/yeun.jpg" alt="Card cap"/>
                            <div className="card-body">
                                <h4 className="card-title">Glen</h4>
                                <p className="card-text">I love to eat....and when I'm not eating, I kill zombies!</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-4">
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-messages-list">future development</div>
                            <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-reviews-list">...</div>
                            <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-orders-list">...</div>
                            <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">future development</div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="list-group" id="list-tab" role="tablist">
                            <a className="list-group-item list-group-item-action active" id="list-messages-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Messages</a>
                            <a className="list-group-item list-group-item-action" id="list-reviews-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Reviews</a>
                            <a className="list-group-item list-group-item-action" id="list-orders-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Orders</a>
                            <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Settings</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CustomerAdmin;