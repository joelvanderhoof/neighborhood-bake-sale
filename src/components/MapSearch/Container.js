import React, { Component } from 'react';
import Map, { GoogleApiWrapper } from 'google-maps-react';
import { searchNearby } from './../utils/googleApiHelpers';

export class Container extends Component {
    constructor(props) {
        super(props);

        this.state = {
            initialCenter: {
                lat: 33.645009,
                lng: -117.8351679
            },
            places: [],
            pagination: null
        };
    }
    onReady(mapProps, map) {
        const {google} = this.props;
        const opts = {
            location: this.state.initialCenter,
            radius: '500',
            types: ['cafe']
        }
        searchNearby(google, map, opts)
            .then((results, pagination) => {
                this.setState({
                    places: results,
                    pagination
                })
            }).catch((status, result) => {
                // handle error here
            })
    }
    render() {
        return (
            <div className="search-map">
              Map Container
                {/* <Map 
                    google={this.props.google}
                    onReady={this.onReady.bind(this)}>
                    
                    {this.state.places.map((place) => {
                        return (<div key={place.id}>{place.name}</div>)
                    })}

                    </Map> */}

                    <Map
                        google={this.props.google}
                        initialCenter={{
                            lat: 33.645009,
                            lng: -117.8351679
                        }}
                        zoom={15}
                        onClick={this.onMapClicked}
                        />
            </div>  
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBEF9CrZfS_ucE-Tj08YB4SH56v9Ni6sso'
})(Container)