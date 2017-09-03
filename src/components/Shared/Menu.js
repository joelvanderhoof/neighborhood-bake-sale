import React, { Component } from 'react';
import MenuItem from "./Menu/MenuItem";
import AddMenuItemButton from "../Seller/AddMenuItemButton";

class Menu extends Component {
  createMenuItems() {
    let menuList;
    menuList = this.props.menu.map((menuItem, i) => {
      return <MenuItem key={ i } index={ i } addToOrder={ this.props.addToOrder } item={ menuItem.name } description={ menuItem.description } price={ menuItem.price } inStock={ menuItem.inStock } image={ menuItem.image } edit={ this.props.edit } updateState={ this.props.updateState } removeFromStateArray={ this.props.removeFromStateArray } />
    });
    return menuList;
  }

  render() {
    if (this.props.menu) {
      return (
        <div className={ this.props.menuStyle }>
          <h4 className="col-4">Inventory <AddMenuItemButton edit={ this.props.edit } addToStateArray={ this.props.addToStateArray } /></h4>
          <div>
            { this.createMenuItems() }
          </div>
        </div>
        );
    } else {
      return (
        <div>
          <h4>No Items</h4>
          <AddMenuItemButton edit={ this.props.edit } addToStateArray={ this.props.addToStateArray } />
        </div>
        );
    }
  }
}

export default Menu;