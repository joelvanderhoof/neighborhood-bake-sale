/* eslint-disable no-undef */
import React, { Component } from 'react';

class HelloMap extends Component {
    constructor(props) {
        super(props);

        
    }

    // Loads the google maps script to the component
    loadJS(src) {
        let script = window.document.createElement('script');
        let ref = window.document.getElementsByTagName('script')[0];
        script.src = src;
        script.async = true;
        ref.parentNode.insertBefore(script, ref);
    };

    componentWillMount() {
        window.initMap = this.initMap;
        this.loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyBEF9CrZfS_ucE-Tj08YB4SH56v9Ni6sso&callback=initMap');
    }

    initMap() {
        const map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8
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
