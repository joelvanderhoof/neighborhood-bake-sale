
import React, { Component } from 'react';
import MenuItem from "./MenuItem";
import AddMenuItemButton from "./AddMenuItemButton";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  createMenuItems() {
    let menuList;
    menuList = this.props.menu.map((menuItem, i) => {
      return <MenuItem key={ i } index={ i } item={ menuItem.name } description={ menuItem.description } price={ menuItem.price } quantity={ menuItem.quantity } edit={ this.props.edit } updateState={ this.props.updateState } removeFromStateArray={this.props.removeFromStateArray} />
    });
    return menuList;
  }

  render() {
    if (this.props.menu.length > 1) {
      return (
        <div>
          <div className="row">
            <h4>Menu</h4>
            <AddMenuItemButton edit={ this.props.edit } addToStateArray={this.props.addToStateArray} />
          </div>
          <ul>
            { this.createMenuItems() }
          </ul>
        </div>
        );
    }
    return (
      <h4>No Items</h4>
      );
  }
}

export default Menu;
