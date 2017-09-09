/* eslint-disable no-undef */
import React, { Component } from 'react';
import axios from 'axios';

const zip = 92617

export default class MapSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            latLng: {lat: 33.6429845, lng: -117.8588866}
        };

        this.initMap = this.initMap.bind(this);
        this.loadJS = this.loadJS.bind(this);
        this.getStoreData = this.getStoreData.bind(this);
        this.buildDataLayer = this.buildDataLayer.bind(this);
        
    }
    
    // Loads the google maps script to the component
    loadJS(src) {
        let ref = window.document.getElementsByTagName('script')[0];
        let script = window.document.createElement('script');
        script.src = src;
        script.async = true;
        ref.parentNode.insertBefore(script, ref);
    }

    getStoreData(zip) {
        return new Promise((resolve, reject) => {
            let locationData = [];
            axios.get(`http://localhost:8080/api/store-marker/${zip}`)
                .then((res) => {
                  locationData = this.buildDataLayer(res);
                    console.log(`This location data was just built from the db: ${locationData}`);
                    resolve(locationData);
                })            
        })
    }
    //async
    buildDataLayer(res) {
        let storeArray = [];
        res.data.forEach(function(store) {
            let storeLocation = {
                "type": "Feature",
                "properties": {
                    "storeId": store._id
                },
                "geometry": {
                "type": "Point",
                "coordinates": [
                    store.latLng.lng,
                    store.latLng.lat
                ]}            
            };
            storeArray.push(storeLocation);
        });
        console.log(storeArray);
        return storeArray;        
    }

    //async
    componentDidMount() {
        window.initMap = this.initMap;
        this.loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyBEF9CrZfS_ucE-Tj08YB4SH56v9Ni6sso&callback=initMap');        
    }

    async initMap() {
        const map = new google.maps.Map(document.getElementById('map'), {
            center: this.state.latLng,
            zoom: 14
        });

        let locationData = await this.getStoreData(zip);

        // Why isn't this logging out?
        console.log(`Here is the locationData: ${locationData}`);
        let testGeo = {
            "type": "FeatureCollection",
            "features": locationData
        }; 
        

        // bind data to the markers on 
        for (var i = 0; i < testGeo.features.length; i++) {
            var coords = testGeo.features[i].geometry.coordinates;
            var latLng = new google.maps.LatLng(coords[1],coords[0]);
            var marker = new google.maps.Marker({
                position: latLng,
                map: map,
                storeId: testGeo.features[i].properties.storeId
            });
            marker.addListener('click', function(event) {
                console.log(this.storeId);
                window.location = '/store/'+this.storeId;
            })
         }
    }

    render() {
        return (
            <div>
                <div id="map" style={{height: '500px', width: '100%'}}></div>
            </div>
        );
    }
    
}
