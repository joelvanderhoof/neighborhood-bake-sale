// This component renders the map from the Google Maps Api.

import React, { Component } from 'react';
import helpers from './../utils/helpers';

export default class MapSearch extends Component {
  constructor(props) {
    super(props)
  }

  saveState (currentState) {
    helpers.MapSearch(currentState);
  }

  // cmponentDidMount() {
  //     this.map = new google.maps.Map(this.refs.map, {
  //         center: this.props.location,
  //         zoom: 10
  //     })
  // }

  // initMap() {
  //   const map = new google.maps.Map(document.getElementById('map'), {
  //     center: {lat: -34.397, lng: 150.644},
  //     zoom: 8
  //     });
  // }

  render () {
    return (
      <div className='container'>
        <div>
            <div id="map"></div>
            {/* <script> {this.state.initMap()} </script> */}

        </div>
      </div>
    )
  }
}
