import React, {Component} from 'react';
import CustomerReviews from './Customer/CustomerReviews';
import CustomerOrders from './Customer/CustomerOrders';
import CustomerBookmarks from './Customer/CustomerBookmarks';
import Helpers from './utils/helpers';
import Auth from './utils/Auth';


class CustomerAdmin extends Component {
    constructor(props){
        super(props);
        this.state = {
            profilename: "",
            profilephoto: "",
            orders: [],
            reviews: [],
            bookmarks: []
        };
        this.getProfile = this.getProfile.bind(this);
        this.renderReviews = this.renderReviews.bind(this);
        this.renderOrders = this.renderOrders.bind(this);
        this.renderBookmarks = this.renderBookmarks.bind(this);
    }

    getProfile() {
        let userID = Auth.getUserId();
        let token = Auth.getToken();
        console.log("The userID is: ", userID);
        console.log("The token is: ", token);
        Helpers.getUser(userID).then((response) => {
          let firstName = response.data[0].firstName;
          let lastName = response.data[0].lastName;
          let userPhoto = response.data[0].photo;
          let userOrders = response.data[0].orders;
          let userReviews = response.data[0].reviews;
          let userBookmarks = response.data[0].bookmarks;
          console.log("Response from api for getUser: ", response); 
          this.setState({
            profilename: firstName + " " +lastName,
            profilephoto: userPhoto,
            orders: userOrders,
            reviews: userReviews,
            bookmarks: userBookmarks,
            profilephoto: userPhoto
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
        console.log('Review list', reviewsList);
        return reviewsList.map(item => (
            <CustomerReviews key={item.id} item={item}/>
        ));
    }

    renderOrders() {
        //get orders function
        const ordersList = this.state.orders;
        console.log('Order list', ordersList);
        return ordersList.map(item => (
            <CustomerOrders key={item.id} item={item} />
        ));
    }

    renderBookmarks() {
        //get orders function
        const bookmarks = this.state.bookmarks;
        console.log('Bookmarks', bookmarks);
        return bookmarks.map(item => (
            <CustomerBookmarks key={item.id} item={item}/>
        ));
    }


    render() {
        return (
            <div className="container-fluid bg-white">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="card" style={{width: '20rem'}}>
                            <img className="card-img-top" src="https://www.shareicon.net/download/2015/09/20/104334_avatar.svg" alt="Card cap"/>
                            <div className="card-body">
                                <h4 className="card-title">{this.state.profilename}</h4>
                            </div>
                        </div>
                        <div className="list-group" style={{width: '20rem'}} id="list-tab" role="tablist">
                            {/* <a className="list-group-item list-group-item-action active" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Messages</a> */}
                            <a className="list-group-item list-group-item-action" id="list-reviews-list" data-toggle="list" href="#list-reviews" role="tab" aria-controls="reviews">Reviews</a>
                            <a className="list-group-item list-group-item-action" id="list-orders-list" data-toggle="list" href="#list-orders" role="tab" aria-controls="orders">Orders</a>
                            <a className="list-group-item list-group-item-action" id="list-bookmarks-list" data-toggle="list" href="#list-bookmarks" role="tab" aria-controls="bookmarks">Bookmarks</a>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-12">
                        <div className="tab-content" id="nav-tabContent">
                            {/* <div className="tab-pane fade show active" id="list-messages" role="tabpanel">future development</div> */}
                            <div className="tab-pane fade" id="list-reviews" role="tabpanel">{this.renderReviews()}</div>
                            <div className="tab-pane fade" id="list-orders" role="tabpanel">{this.renderOrders()}</div>
                            <div className="tab-pane fade" id="list-bookmarks" role="tabpanel">{this.renderBookmarks()}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CustomerAdmin;