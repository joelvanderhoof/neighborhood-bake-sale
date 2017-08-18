import React, { Component } from 'react';
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
// import Menu from "./Seller/Menu";
import StoreTitle from "./Seller/StoreTitle";
import StoreHours from "./Seller/StoreHours";
import StoreDescription from "./Seller/StoreDescription";
// import OrderQueue from "./Seller/OrderQueue";

class SellerAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  render() {
    return (
      <div>
        <h1>Seller Admin Page</h1>
        <StoreTitle/>
        <StoreHours/>
        <StoreDescription/> {/* <Menu /> */}
      </div>
    );
  }
}

export default SellerAdmin;