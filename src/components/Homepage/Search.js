import React, { Component } from 'react';


export default class Search extends Component {

  render () {
    return (
    // <div className="input-group input-group-lg">
    //     <span className="input-group-addon" id="Search">Search</span>
    //     <input type="text" placeholder="Type in location..." />
    // </div>
    <div className="search-container">
      <form onSubmit={this.props.handleSubmit}>
        <input 
          id="search-bar"
          className="img-fluid rounded" 
          type="text" 
          value={this.props.value}
          onChange={this.props.handleChange}
          style={{
            width: "50%",
            marginLeft: "25%",
            marginRight: 5,
            marginTop: 40}} 
            placeholder="Search Location..."
        />
        <input type="submit" value="Submit" />
        <a href="/map"><img className="search-icon" src="http://laoblogger.com/images/clipart-search-icon-10.jpg" alt="search" width="50" height="50"/></a>
      </form>
    </div>
    )
  }
};