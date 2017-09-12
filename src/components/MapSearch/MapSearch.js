/* eslint-disable no-undef */
import React, { Component } from 'react';
import axios from 'axios';
import StoreList from './StoreList';


export default class MapSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            readyToRender: false,
            storeData: []
        };

        this.initMap = this.initMap.bind(this);
        this.loadJS = this.loadJS.bind(this);
        this.getStoreData = this.getStoreData.bind(this);
        this.buildDataLayer = this.buildDataLayer.bind(this);
        this.bindStoreData = this.bindStoreData.bind(this);
        this.readyToRenderList = this.readyToRenderList.bind(this);
        
    }
    
    // Loads the google maps script to the component
    loadJS(src) {
        let ref = window.document.getElementsByTagName('script')[0];
        let script = window.document.createElement('script');
        script.src = src;
        script.async = true;
        ref.parentNode.insertBefore(script, ref);
    }

    getStoreData(searchCity) {
        return new Promise((resolve, reject) => {
            let locationData = undefined;
            axios.get(`https://neighborhood-bake-sale.herokuapp.com/api/store-marker/${searchCity}`)
                .then((res) => {
                  locationData = this.buildDataLayer(res);
                  this.bindStoreData(res.data);                  
                    // console.log(`This location data was just built from the db: ${JSON.stringify(locationData)}`);
                    resolve(locationData);
                    
                })            
        });
    }

    buildDataLayer(res) {
        let storeArray = [];
        res.data.forEach( store => {
            let storeLocation = {
                "type": "Feature",
                "properties": {
                    "storeId": store.sellerId
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
        return storeArray;        
    }

    bindStoreData(data) {
        this.setState({storeData: data}, function() {
            this.readyToRenderList();
        });
        
        // console.log(`!!!!!!!!!!!!!!!!!!!!!!!location data: ${JSON.stringify(this.state.storeData)}`);
    }

    readyToRenderList() {
        
        this.setState({readyToRender: true});
        console.log(`set readyToRender to ${this.state.readyToRender}`)
    }

    //async
    componentDidMount() {
        window.initMap = this.initMap;
        this.loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyBEF9CrZfS_ucE-Tj08YB4SH56v9Ni6sso&callback=initMap');        
    }

    async initMap() {
        console.log(`this.props.latLng: ${JSON.stringify(this.props.latLng)}`);
        console.log(`this.props.searchCity: ${this.props.searchCity}`);
        const map = new google.maps.Map(document.getElementById('map'), {
            center: this.props.latLng,
            zoom: 13
        });

        let locationData = await this.getStoreData(this.props.searchCity);
        let testGeo = {
            "type": "FeatureCollection",
            "features": locationData
        }; 
        console.log(testGeo)
        

        // bind data to the markers on the map
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

    //    if ( this.state.storeData.length > 1 ) {
    //     <div>
    //     <div className="row">
    //         <div className="col-md-4 col-md-offset-4">
    //         <StoreList data={this.state.storeData} />
    //         </div>
    //     <div id="map" style={{height: '500px', width: '100%'}}></div>
    //     </div>
    // </div>
     //   }
        return (
            <div>
                    {this.state.storeData ? <StoreList data={this.state.storeData} /> : <div>Loading...</div>}
                <div id="map" style={{height: '500px', width: '100%'}}></div>
            </div>
        );
    }
    
}

// style={styles.listStyle}