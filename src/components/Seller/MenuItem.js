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
        <div className="form-group row">
          <div className="col-4">
            <input className="form-control" name="title" type="text" onChange={ (e) => this.handleChange(e, "name") } value={ this.props.item } placeholder="name"/>
            <input className="form-control" name="title" type="text" onChange={ (e) => this.handleChange(e, "description") } value={ this.props.description } placeholder="description" />
            <input className="form-control" name="title" type="text" onChange={ (e) => this.handleChange(e, "price") } value={ this.props.price } placeholder="price" />
            <input className="form-control" name="title" type="text" onChange={ (e) => this.handleChange(e, "quantity") } value={ this.props.quantity } placeholder="quantity" />
          </div>
          <button className="btn btn-danger" onClick={ () => this.props.removeFromStateArray("menu", this.props.index) }>Delete</button>
        </div>
        );
    }
    return (
      <li>
        { "Item: " + this.props.item }
        { "** Description: " + this.props.description }
        { "** Price: " + this.props.price }
        { "** Quantity: " + this.props.quantity }
      </li>
      );
  }
}

export default StoreTitle;
