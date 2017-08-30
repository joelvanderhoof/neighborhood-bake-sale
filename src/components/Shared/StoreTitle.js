import React, { Component } from 'react';

class StoreTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.updateState("title", e.target.value);
  }

  render() {
    if (this.props.edit) {
      return (
        <div>
          <h4>Store Name</h4>
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <input className="form-control" name="title" type="text" onChange={ this.handleChange } defaultValue={ this.props.title } id="storeTitle" />
            </div>
          </div>
        </div>
        );
    }
    return (
      <div className={ this.props.storeTitleStyle }>
        { this.props.title }
      </div>
      );
  }
}

export default StoreTitle;
