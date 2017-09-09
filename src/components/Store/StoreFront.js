import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import StoreMap from './StoreFront/StoreMap';
// import AddPhoto from './StoreFront/AddPhoto';
import Bookmark from './StoreFront/Bookmark';
import Order from './StoreFront/Order';
import StoreTitle from '../Shared/StoreTitle';
import StoreHours from '../Shared/StoreHours';
import StoreDescription from '../Shared//StoreDescription';
import Reviews from '../Shared/Reviews';
import Rating from '../Shared/Rating';
import Menu from '../Shared/Menu';
import helpers from '../utils/helpers'
import Auth from '../utils/Auth';
import io from 'socket.io-client';
let socket = io.connect('https://neighborhood-bake-sale.herokuapp.com/');


class StoreFront extends Component {
  constructor(props) {
    super(props)
    this.state = {
      customerOrder: [],
      storeId: '',
      sellerId: '',
      name: '',
      location: '',
      menu: [],
      hours: [],
      description: '',
      storeImage: '',
      reviews: [],
      isOpen: false,
      orderTotal: 0,
      bookmarked: false,
      buyerFirstName: '',
      buyerLastName: '',
      bookmarks: [],
      sellerFirstName: '',
      sellerLastName: '',
      storeName: '',
      storeLocation: '',
      storeRating: 5,
    }
    this.listenToStore = this.listenToStore.bind(this);
    this.updateStoreState = this.updateStoreState.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.bookmark = this.bookmark.bind(this);
  }

  updateStoreState(sellerId) {
    helpers.getPublicStore(sellerId)
      .then((response) => {
        let storeData = response.data[0];
        this.setState({
          storeId: storeData._id,
          sellerId: storeData.sellerId,
          name: storeData.name,
          location: storeData.location,
          menu: storeData.menuItems,
          hours: storeData.hours,
          description: storeData.description,
          storeImage: storeData.storeImage,
          isOpen: storeData.isOpen,
          sellerFirstName: storeData.firstName,
          sellerLastName: storeData.lastName,
          storeName: storeData.name,
          storeLocation: storeData.location
        });
      })
  }

  componentDidMount() {
    let sellerId = this.props.location.pathname.split('/')[2]
    const token = Auth.getToken();
    const customerId = Auth.getUserId()
    this.updateStoreState(sellerId);

    helpers.getPublicReview(sellerId)
    .then((response) => {
      let reviewData = response.data;

      let getAverageRating = (reviewData)=>{
        let averageRating = 0;
        reviewData.forEach( (review)=>{
          averageRating += review.rating
        });

        return Math.floor(averageRating/reviewData.length);
      }

      this.setState({
        reviews: reviewData,
        storeRating: getAverageRating(reviewData)
      });
    })

    if (Auth.isUserAuthenticated()) {
      helpers.getUserSecure(customerId, token)
        .then((response) => {
          let userData = response.data[0];
          let bookmarks = response.data[0].bookmarks;
          let isBookmarked = () => {
            if (bookmarks.length > 0) {
              // Cannot use forEach here because forEach returns undefined
              for (let i = 0; i < bookmarks.length; i++) {
                if (bookmarks[i].sellerId === this.state.sellerId) {
                  return true;
                }
              }
            } else {
              return false;
            }
          };
          this.setState({
            buyerFirstName: userData.firstName,
            buyerLastName: userData.lastName,
            bookmarks: userData.bookmarks,
            bookmarked: isBookmarked() // returns true or false
          })
        })
    }

    this.listenToStore(this.updateStoreState);

  }

  addToOrder(order) {
    let currentOrderTotal =this.state.orderTotal
    let newTotal = currentOrderTotal += parseInt(order.price);
    this.setState({
      customerOrder: this.state.customerOrder.concat(order),
      orderTotal: newTotal
    });
  }

  placeOrder() {
    const token = Auth.getToken();
    const storeId = this.state.storeId;
    const orders = {
      customerId: Auth.getUserId(), // Buyer/Customer's userId
      sellerId: this.state.sellerId, // Seller's userId
      storeId: this.state.storeId,
      items: this.state.customerOrder, // Array of Menu item Objects with name and price
      orderTotal: this.state.orderTotal,
      buyerFirstName: this.state.buyerFirstName,
      buyerLastName: this.state.buyerLastName,
      sellerFirstName: this.state.sellerFirstName,
      sellerLastName: this.state.sellerLastName
    };
    helpers.placeOrder(storeId, orders, token).then((response) => {
      socket.emit("users", {
        customerID: this.state.sellerId,
        message: "Orders Updated"
      });
      socket.emit("users", {
        customerID: Auth.getUserId(),
        message: "Orders Updated"
      });
    });

    this.setState({
      customerOrder: [],
      orderTotal: 0
    })
  }

  bookmark(status) {
    this.setState({
      bookmarked: status
    })

    const token = Auth.getToken();
    let data = {
      userId: Auth.getUserId(),
      userFirstName: this.state.buyerFirstName,
      userLastName: this.state.buyerLastName,
      storeId: this.state.storeId,
      sellerId: this.state.sellerId,
      storeName: this.state.storeName,
      storeLocation: this.state.storeLocation,
    }

    let deleteData = {
      userId: Auth.getUserId(),
      storeId: this.state.storeId,
      sellerId: this.state.sellerId,
    }

    if (status) {
      helpers.bookmarkStore(data, token);
    } else if (!status) {
      helpers.removeBookmark(deleteData, token)
    // helpers delete bookmark function
    }

  }

  //socket advises all customers store updated
  listenToStore(cb) {
    // let userID = Auth.getUserId();
    let socket = io.connect('https://neighborhood-bake-sale.herokuapp.com/');
    let sellerID = this.props.location.pathname.split('/')[2];
    socket.on(sellerID, function(data) {
      console.log(data);
      if (data.message === "Store Updated") {
        cb(sellerID);
      }
    });
  }

  render() {
    return (
      <div>
        <div className='text-center'>
            <StoreTitle title={ this.state.name } storeTitleStyle='h1 d-block mt-3' />
            <StoreDescription description={ this.state.description } storeDescriptionStyle='h6 d-block' />
        </div>
        <hr />
        <div className='row justify-content-between'>
          <div className='col-lg-6 col-sm-12'>
            <img className='img-fluid rounded mt-3 mb-3 p-3' src={ this.state.storeImage } alt='Store' />
          </div>
          <div className='col-lg-6 col-sm-12'>
            <div className='row mb-3'>
              <Rating ratingStyle='rating col-12 mb-3' rating={ this.state.storeRating } numReviews={ this.state.reviews.length } />
              <div className='store-front-link border'>
                <Link className='btn col-6' to={ `/review/${this.state.sellerId}` }><span style={ { color: 'gold', textShadow: '1px 1px goldenrod, 2px 2px #B57340, .1em .1em .2em rgba(0,0,0,.5)' } }>★</span>
                { '\u00A0' } Write Review</Link>
                {/* <AddPhoto AddPhotoStyle='btn red col-md-4 col-sm-12' /> */}
                <Bookmark BookmarkStyle='btn red col-6' bookmarked={ this.state.bookmarked } bookmark={ this.bookmark } />
              </div>
            </div>
            <div className='row'>
              <StoreHours hours={ this.state.hours } storeHoursStyle='border col-12 mb-3' />
            </div>
          </div>
        </div>
        <hr />
        <div className='row justify-content-between'>
          <div className='col-md-6 col-sm-12'>
            <Menu menu={ this.state.menu } addToOrder={ this.addToOrder } menuStyle='border justify-content-center store-front-menu mt-3 p-3' />
          </div>
          <div className='col-md-6 col-sm-12'>
            <Order customerOrder={ this.state.customerOrder } placeOrder={ this.placeOrder } orderTotal={ this.state.orderTotal } orderStyle='border mt-3 order' />
          </div>
        </div>
        <hr />
        <div className='row'>
          <div className='col-12'>
            <Reviews reviews={ this.state.reviews } />
          </div>
          <div className='col-12'>
            {/* <StoreMap storeMapStyle='border d-flex flex-column align-items-center justify-content-center store-map mt-3' location={ this.state.location } /> */}
          </div>
        </div>
      </div>
    )
  }
}

export default StoreFront;