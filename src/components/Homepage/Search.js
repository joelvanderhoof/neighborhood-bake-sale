import React, { Component } from 'react';


export default class Search extends Component {
  render () {
    return (
    // <div className="input-group input-group-lg">
    //     <span className="input-group-addon" id="Search">Search</span>
    //     <input type="text" placeholder="Type in location..." />
    // </div>
    <div className="search-container">
    <input style={{
            width: "50%",
            marginLeft: "25%",
            marginRight: 5,
            marginTop: 40}}
            className="img-fluid rounded pl-2" 
            type="text" 
            id="search-bar" 
            placeholder="Search Location..."/>
    <a href="#"><img className="search-icon" src="http://findicons.com/files/icons/1254/flurry_system/256/search.png" width="35" height="35"/></a>
    </div>
    )
  }
};