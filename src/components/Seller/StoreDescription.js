import React, {Component} from 'react';

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
    this.props.updateState("description",e.target.value);
  }

  render() {
    if (this.props.edit) {
      return (
        <div className="form-group row">
          <div className="col-10">
            <input
              className="form-control"
              name="description"
              type="text"
              onChange={this.handleChange}
              defaultValue={this.props.description}
              id="storedescription"/>
          </div>
        </div>
      );
    }
    return (
      <div className="row">
        <p> Description: {this.props.description}</p>
      </div>
    );
  }
}

export default StoreDescription;
