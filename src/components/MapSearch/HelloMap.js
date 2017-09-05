/* eslint-disable no-undef */
import React, { Component } from 'react';

class HelloMap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            latLng: {lat: 34.0500534, lng: -118.2475034}
        };

        this.initMap = this.initMap.bind(this);
        this.loadJS = this.loadJS.bind(this);
        
    }
    
    // Loads the google maps script to the component
    loadJS(src) {
        let ref = window.document.getElementsByTagName('script')[0];
        let script = window.document.createElement('script');
        script.src = src;
        script.async = true;
        ref.parentNode.insertBefore(script, ref);
    };

    componentDidMount() {
        window.initMap = this.initMap;
        this.loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyBEF9CrZfS_ucE-Tj08YB4SH56v9Ni6sso&callback=initMap');
    }

    initMap() {
        const map = new google.maps.Map(document.getElementById('map'), {
            center: this.state.latLng,
            zoom: 15
        });
    }

    render() {
        return (
            <div>
                <div id="map" style={{height: '500px', width: '500px'}}></div>
            </div>
        );
    }
    
}



export default HelloMap;
