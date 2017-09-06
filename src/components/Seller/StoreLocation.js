import React, { Component } from 'react';

class StoreLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.handleChange = this
      .handleChange
      .bind(this);
  }

  handleChange(e) {
    this.props.updateState("location", e.target.value);
  }

  render() {
    if (this.props.edit) {
      return (
        <div>
          <h4 className="text-center">Store Location</h4>
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <input className="form-control" name="location" type="text" onChange={ this.handleChange } value={ this.props.location } id="storeLocation" />
            </div>
          </div>
        </div>
        );
    }
    return (
      <p>Location: { this.props.location }</p>
      );
  }
}

export default StoreLocation;
