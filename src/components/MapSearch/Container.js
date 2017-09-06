import React, { Component } from 'react';
import Map, { GoogleApiWrapper } from 'google-maps-react';

export class Container extends Component {
    render() {
        return (
          <div>
              Map Container
              <Map 
                onReady={this.onReady.bind(this)}
                google={this.props.google} />
          </div>  
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBEF9CrZfS_ucE-Tj08YB4SH56v9Ni6sso'
})(Container)