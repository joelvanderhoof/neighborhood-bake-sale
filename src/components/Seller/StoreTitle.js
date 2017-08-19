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
    this.props.updateState("title",e.target.value);
  }

  render() {
    if (this.props.edit) {
      return (
        <div className="form-group row">
          <div className="col-10">
            <input
              className="form-control"
              name="title"
              type="text"
              onChange={this.handleChange}
              defaultValue={this.props.title}
              id="storeTitle"/>
          </div>
        </div>
      );
    }
    return (
      <div className="row">
        <h1 className="col-10">Title: {this.props.title}</h1>
      </div>
    );
  }
}

export default StoreTitle;
