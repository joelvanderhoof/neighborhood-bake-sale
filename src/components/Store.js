import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
// import StoreTitle from "./Seller/StoreTitle";
// import StoreHours from "./Seller/StoreHours";
// import StoreDescription from "./Seller/StoreDescription";
// import Menu from "./Seller/Menu";


const testObj = {
  storeID: "1",
  sellerID: "111",  // Same as Sellers.ID
  title: "John's Bistro",
  location: "Irvine, CA", // physical adress
  menu: ["Pizza", "Spaghetti", "Bread Sticks"], // Array of menu items
  hours: ["9:00AM-12:00PM", "1:00PM-6:00PM"], // Array of daily hours
  description: "Neighborhood Italian Spot",
  photo: [], // Array of image URL
  certified: false, // Store passes inspection
  review: [], // Array of reviews
}

export default class Store extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <Router>
        <div className='container border'>
          <h1>Store Front Component</h1>
          {/* <StoreTitle title={testObj.title}/>
          <StoreHours hours={testObj.hours}/>
          <StoreDescription description={testObj.description}/>
          <Menu menu={testObj.menu}/> */}
        </div>
      </Router>
    )
  }
}