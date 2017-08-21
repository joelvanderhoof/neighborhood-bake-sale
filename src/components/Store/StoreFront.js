import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StoreMap from './StoreMap';
import StoreTitle from "../Seller/StoreTitle";
import StoreHours from "../Seller/StoreHours";
import StoreDescription from "../Seller/StoreDescription";

class StoreFront extends Component {
  constructor(props) {
    super(props)
    this.state = {}

  }
  render(){
    return (
      <div className='container'>
        <h1>Store Front Component</h1>
        <StoreTitle title={ "John's Bistro" } />
        <StoreHours hours={ ["9:00AM-12:00PM", "1:00PM-6:00PM"] }/>
        <StoreDescription description={ "Neighborhood Italian Spot" }/>
        <StoreMap />
        <br />
        <Link className='btn btn-info' to='/review'>
          Write Review
        </Link>
      </div>
    )
  }
}

export default StoreFront;