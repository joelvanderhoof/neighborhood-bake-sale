
import React, { Component } from 'react';
import Menu from "./Seller/Menu";
import StoreTitle from "./Seller/StoreTitle";
import StoreHours from "./Seller/StoreHours";
import StoreDescription from "./Seller/StoreDescription";
// import OrderQueue from "./Seller/OrderQueue";

let testObj = {
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


class SellerAdmin extends Component {
    constructor(props) {
      super(props);
      this.state = {

      };
  
    }
  
    render() {
      return (
         <div>
           <h1>Seller Admin Page</h1>
          <StoreTitle title={testObj.title}/>
          <StoreHours hours={testObj.hours}/>
          <StoreDescription description={testObj.description}/>
          <Menu menu={testObj.menu}/>
         </div>
      );
    }
  }
  
  export default SellerAdmin;
  