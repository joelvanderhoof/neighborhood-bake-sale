import React, { Component } from 'react';

class StoreName extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.handleChange = this
      .handleChange
      .bind(this);
  }

  handleChange(e) {
    this.props.updateState("name", e.target.value);
  }

  render() {
    if (this.props.edit) {
      return (
        <div>
          <h4 className="text-center">Store Name</h4>
          <div className="row justify-content-lg-center">
            <div className="col-lg-8">
              <input className="form-control" name="name" type="text" onChange={ this.handleChange } value={ this.props.name } id="storeName" />
            </div>
          </div>
        </div>
        );
    }
    return (
      <h1 className="text-center">{ this.props.name }</h1>
      );
  }
}

export default StoreName;
