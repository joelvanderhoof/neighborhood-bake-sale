import React, { Component } from 'react';
import MapSearchForm from './MapSearch/MapSearchForm';
import GoogleMaps from './MapSearch/GoogleMaps';
import helpers from './utils/helpers';

class MapSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.saveState = this.saveState.bind(this);
  }

  saveState (currentState) {
    helpers.MapSearch(currentState);
  }

  render () {
    return (
      <div className='container'>
        <div className='col-6'>
          <MapSearchForm />
          <GoogleMaps />
        </div>
      </div>
    )
  }
}

export default MapSearch;