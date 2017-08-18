import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import StoreTitle from "./Seller/StoreTitle";
import StoreHours from "./Seller/StoreHours";
import StoreDescription from "./Seller/StoreDescription";

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
          <StoreTitle />
          <StoreHours />
          <StoreDescription />
        </div>
      </Router>
    )
  }
}