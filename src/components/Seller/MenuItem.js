import React, {Component} from 'react';

class StoreTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };

    this.handleChange = this
      .handleChange
      .bind(this);
  }

  handleChange(e) {
    this.props.updateState("menu",e.target.value, this.props.index);
  }

  render() {
    if (this.props.edit) {
      return (
        <div className="form-group row">
          <div className="col-4">
            <input
              className="form-control"
              name="title"
              type="text"
              onChange={this.handleChange}
              defaultValue={this.props.item}
              id="storeTitle"/>
          </div>
        </div>
      );
    }
    return (
      <li>
        {this.props.item}
      </li>
    );
  }
}

export default StoreTitle;
