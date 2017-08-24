import React, { Component } from 'react';
import Map from '../Shared/Map';

class StoreMap extends Component {

  render() {
    return (
      <div className={ this.props.storeMapStyle }>
        <div className='row'>
          <Map mapStyle='border d-flex align-items-center justify-content-center map' />
        </div>
        <div className='row'>
          <h6 style={ {padding: '15px'} }>{ this.props.location }</h6>
        </div>
      </div>
      );
  }
}

export default StoreMap;