import React, { Component } from 'react';

class StoreHoursItems extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.handleChange = this
      .handleChange
      .bind(this);
  }

  handleChange(e) {
    this.props.updateState("hours", e.target.value, this.props.index);
  }

  render() {
    if (this.props.edit) {
      return (
        <div className="form-group row">
          <div className="col-lg-4 offset-lg-4">
            <input className="form-control" name="title" type="text" onChange={ this.handleChange } defaultValue={ this.props.time } id="StoreHoursItems" />
          </div>
        </div>
        );
    }
    return (
      <li className="text-center">
        { this.props.time }
      </li>
      );
  }
}

export default StoreHoursItems;
