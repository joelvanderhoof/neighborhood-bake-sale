import React, {Component} from 'react';
import CustomerReviews from './Customer/CustomerReviews';
import CustomerOrders from './Customer/CustomerOrders';
import Helpers from './utils/helpers';
import Auth from './utils/Auth';


/***********TEST DATA*************************************/

var testProfile = {
    id: 1,
    userName: "Glen",
    imageSrc: "",
    quote: "I love to eat.. and kill zombies"
}

var bakerys = {
    id: 1,
    comments: "The restaurant was delicious"
}

var sushis = {
    id: 2,
    comments: "Sushi was just right"
}

var testReviews = [bakerys, sushis];


var order1 = {
    id: 1,
    food: "sweet bread",
    price: "$10.00"
}

var order2 = {
    id: 2,
    food: "omakase",
    price: "$100.00"
}

var testOrders =  [order1, order2];

/*********************************************************/

class CustomerAdmin extends Component {
    constructor(props){
        super(props);
        this.state = {
            profilename: "",
            quote: testProfile.quote,
            orders: testOrders,
            reviews: testReviews
        };
        this.getProfile = this.getProfile.bind(this);
        this.renderReviews = this.renderReviews.bind(this);
        this.renderOrders = this.renderOrders.bind(this);
    }

    getProfile() {
        let userID = Auth.getUserId();
        let token = Auth.getToken();
        console.log("The userID is: ", userID);
        console.log("The token is: ", token);
        Helpers.getUser(userID, token).then((response) => {
          let userInfo = response.data[0];
          console.log("Response from api for userID: ", response);
          console.log(userInfo);    
          this.setState({
            profilename: userID 
          });
        }); 
    }

    componentDidMount() {
        console.log('Component Did Mount');
        this.getProfile();
    }

    renderMessages() {
        //get messages function. this is a future implementation
    }

    renderReviews() {
        //get reviews function
        const reviewsList = this.state.reviews;
        console.log(reviewsList);
        return reviewsList.map(item => (
            <CustomerReviews key={item.id}>
                {item.comments}
            </CustomerReviews>
        ));
    }

    renderOrders() {
        //get orders function
        const ordersList = this.state.orders;
        console.log(ordersList);
        return ordersList.map(item => (
            <CustomerOrders key={item.id}>
                {item.food}
            </CustomerOrders>
        ));
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="card" style={{width: '20rem'}}>
                            <img className="card-img-top" src="" alt="Card cap"/>
                            <div className="card-body">
                                <h4 className="card-title">{this.state.profilename}</h4>
                                <p className="card-text">{this.state.quote}</p>
                                <button type="submit" className="btn btn-primary">Edit</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="list-messages" role="tabpanel">future development</div>
                            <div className="tab-pane fade" id="list-reviews" role="tabpanel">{this.renderReviews()}</div>
                            <div className="tab-pane fade" id="list-orders" role="tabpanel">{this.renderOrders()}</div>
                            <div className="tab-pane fade" id="list-settings" role="tabpanel">future development</div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div className="list-group" style={{width: '20rem'}} id="list-tab" role="tablist">
                            <a className="list-group-item list-group-item-action active" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Messages</a>
                            <a className="list-group-item list-group-item-action" id="list-reviews-list" data-toggle="list" href="#list-reviews" role="tab" aria-controls="reviews">Reviews</a>
                            <a className="list-group-item list-group-item-action" id="list-orders-list" data-toggle="list" href="#list-orders" role="tab" aria-controls="orders">Orders</a>
                            <a className="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Settings</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CustomerAdmin;