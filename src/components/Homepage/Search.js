import React, { Component } from 'react';


export default class Search extends Component {
  render () {
    return (
    <div className="search-container">
      <input 
        onChange={this.props.handleChange}
        value={this.props.value}
        style={{
        width: "50%",
        marginLeft: "25%",
        marginRight: 5,
        marginTop: 40}}
        className="img-fluid rounded pl-2" 
        type="text" 
        id="search-bar" 
        placeholder="Enter Address"
      />

      <img 
        onClick={this.props.handleSubmit}
        className="search-icon" 
        src="http://findicons.com/files/icons/1254/flurry_system/256/search.png" 
        width="35" 
        height="35"
        alt="search-button"
      />
    </div>
    )
  }
};
