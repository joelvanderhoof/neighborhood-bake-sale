// This component renders the map from the Google Maps Api.

import React, { Component } from 'react';
import helpers from '/../utils/helpers';

class MapSearch extends Component {
  constructor(props) {
    super(props)
  }

  saveState (currentState) {
    helpers.MapSearch(currentState);
  }

  cmponentDidMount() {
      this.map = new google.maps.Map(this.refs.map, {
          center: this.props.location,
          zoom: 10
      })
  }

  render () {
    return (
      <div className='container'>
        <div>
            <div id="map"></div>
            <script>
            var map;
            function initMap() {
                map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: -34.397, lng: 150.644},
                zoom: 8
                });
            }
            </script>
            <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
            async defer></script>
        </div>
      </div>
    )
  }
}

export default MapSearch;