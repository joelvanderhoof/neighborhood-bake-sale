
import React, { Component } from 'react';
import MenuItem from "../Shared/Menu/MenuItem";
// import AddMenuItemButton from "./AddMenuItemButton";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  createMenuItems() {
    let menuList;
    menuList = this.props.menuItems.map((menuItem, i) => {
      return <MenuItem key={ i } index={ i } item={ menuItem.name } description={ menuItem.description } price={ menuItem.price } inStock={ menuItem.inStock }
               image={ menuItem.image } edit={ this.props.edit } updateState={ this.props.updateState } removeFromStateArray={ this.props.removeFromStateArray } />
    });
    return menuList;
  }

  render() {
    if (this.props.menuItems.length > 0) {
      return (
        <div className="col-lg-12">
          <div className="row justify-content-lg-center">
            { this.createMenuItems() }
          </div>
        </div>
        );
    }
    return (
      <div>
        <h4>No Items</h4>
      </div>
      );
  }
}

export default Menu;
