import React, { Component } from 'react';

class StoreTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.handleChange = this
      .handleChange
      .bind(this);
  }

  handleChange(event, type) {
    console.log(event.target.value);
    console.log(type);
    this.props.updateState("menu", event.target.value, this.props.index, type);
  }

  render() {
    if (this.props.edit) {
      return (
        <div className="col-lg-10 offset-lg-1">
          <div className="form-group">
            <div className="row">
              <input className="form-control col-lg-4" name="title" type="text" onChange={ (e) => this.handleChange(e, "name") } value={ this.props.item } placeholder="name" />
              <input className="form-control col-lg-4" name="title" type="text" onChange={ (e) => this.handleChange(e, "price") } value={ this.props.price } placeholder="price" />
                <select className="form-control col-lg-4" id="exampleSelect1" onChange={ (e) => this.handleChange(e, "availability") } value={ this.props.availability }>
                  <option>In Stock!</option>
                  <option>Sold Out!</option>
                </select>
 
            </div>
            <div className="row">
              <input className="form-control" name="title" type="text" onChange={ (e) => this.handleChange(e, "description") } value={ this.props.description } placeholder="description" />
            </div>
            <button className="btn btn-danger" onClick={ () => this.props.removeFromStateArray("menu", this.props.index) }>Delete</button>
          </div>
        </div>
        );
    }
    return (
      <div>
        { "Item: " + this.props.item }
        { "** Description: " + this.props.description }
        { "** Price: " + this.props.price }
        { "** Availability: " + this.props.availability }
      </div>
      );
  }
}

export default StoreTitle;
