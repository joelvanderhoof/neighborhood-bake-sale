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
      <div>
        <h1>Store Front Component</h1>
        <StoreTitle title={this.props.title} />
       {/* <StoreHours hours={this.props.hours}/> */}
        {/* <StoreDescription description={this.props.store.description}/> */}
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