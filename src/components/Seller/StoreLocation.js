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
          <div className="row justify-content-lg-center">
            <div className="col-lg-8">
              <input className="form-control" name="location" type="text" onChange={ this.handleChange } value={ this.props.location } id="storeLocation" />
            </div>
          </div>
        </div>
        );
    }
    return (
      <div className="text-center border">
        <h4 style={{"borderBottom": "4px navy solid"}}>Location</h4>
        <p className="text-center">{ this.props.location }</p>
      </div>
      );
  }
}

export default StoreLocation;
