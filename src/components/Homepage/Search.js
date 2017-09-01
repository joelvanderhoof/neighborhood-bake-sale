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
            className="img-fluid rounded" 
            type="text" 
            id="search-bar" 
            placeholder="Search Location..."/>
    
    <a href="#" onClick={{}}><img className="search-icon" src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Search-button.png" width="27" height="27"/></a>
    </div>
    )
  }
};
