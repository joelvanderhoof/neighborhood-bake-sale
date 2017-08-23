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

  availability(){
    if(this.props.availability === "Sold Out!"){
      return (
        <h1 style={{color: 'red'}}>{this.props.availability}</h1>
      );
    } else{
      return (
        <h1 style={{color: 'green'}}>{this.props.availability}</h1>
      );
    }
  }

  render() {
    if (this.props.edit) {
      return (
        <div className="col-lg-10 offset-lg-1">
          <div className="form-group">
            <div className="row">
              <input className="form-control col-lg-4" type="text" onChange={ (e) => this.handleChange(e, "name") } value={ this.props.item } placeholder="name" />
              <input className="form-control col-lg-4" type="text" onChange={ (e) => this.handleChange(e, "price") } value={ this.props.price } placeholder="price" />
              <select className="form-control col-lg-4" onChange={ (e) => this.handleChange(e, "availability") } value={ this.props.availability }>
                <option>In Stock!</option>
                <option>Sold Out!</option>
              </select>
            </div>
            <div className="row">
              <textarea className="form-control" type="text" onChange={ (e) => this.handleChange(e, "description") } value={ this.props.description } placeholder="description" />
            </div>
            <div className="row">
              <input className="form-control" type="text" onChange={ (e) => this.handleChange(e, "img") } value={ this.props.img } placeholder="img url" />
            </div>
            <div className="row">
              <button className="btn btn-danger col-lg-12" onClick={ () => this.props.removeFromStateArray("menu", this.props.index) }>Delete Menu Item</button>
            </div>
          </div>
        </div>
        );
    }
    return (
      <div className="row">
        <div className="col-lg-4">
          <img className="img-fluid border" src={ this.props.img } />
        </div>
        <div className="col-lg-8">
          <div className="row">
            <h3 className="col-lg-8">{ this.props.item }</h3>
            <p className="col-lg-4">
              { "$" + parseFloat(this.props.price / 100).toFixed(2) }
            </p>
          </div>
          <div className="row">
            <p className="col-lg-12">{ this.props.description }</p>
          </div>
          { this.availability() }
        </div>
      </div>
      );
  }
}

export default StoreTitle;
