import React, { Component } from 'react';

export default class Search extends Component {
  render () {
    return (
    <div className="input-group input-group-lg">
        <span className="input-group-addon" id="sizing-addon1">Search</span>
        <input type="text" class="form-control" placeholder="Type in location..." aria-describedby="sizing-addon1" />
    </div>
    )
  }
};