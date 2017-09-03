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
            <label className="col-md-1 offset-md-1 col-form-label">{this.props.day}</label>
            <div className="col-md-8 offset-md-1">
              <input className="form-control" name="title" type="text" onChange={ this.handleChange } defaultValue={ this.props.time } id="StoreHoursItems" />
            </div>
          {/* <button className="btn btn-danger" onClick={ () => this.props.removeFromStateArray("hours", this.props.index) }>X</button> */}
        </div>
        );
    }
    return (
      <p className="col-md-8 offset-md-3">
        { this.props.day } - {this.props.time}
      </p>
      );
  }
}

export default StoreHoursItems;