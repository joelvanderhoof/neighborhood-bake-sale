import React, { Component } from 'react';

class StoreDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.handleChange = this
      .handleChange
      .bind(this);
  }

  handleChange(e) {
    this.props.updateState("description", e.target.value);
  }

  render() {
    if (this.props.edit) {
      return (
        <div>
          <h4 className="text-center">Store Description</h4>
          <div className="form-group row">
            <div className="col-lg-10 offset-lg-1">
              <input className="form-control" name="description" type="text" onChange={ this.handleChange } defaultValue={ this.props.description } id="storedescription" />
            </div>
          </div>
        </div>
        );
    }
    return (
      <div className="text-center">
        <h4>Store Description</h4>
        <p>
          { this.props.description }
        </p>
      </div>
      );
  }
}

export default StoreDescription;
