
import React, { Component } from 'react';
import MenuItem from "./MenuItem";

class Menu extends Component {
    constructor(props) {
      super(props);
      this.state = {
        
      };
  
    }

    createMenuItems() {
      let menuList;
      menuList = this.props.menu.map((menuItem, i)=>{
        return <MenuItem key={i} item={menuItem}/>
      });
      return menuList;
    }
  
    render() {
      if(this.props.menu.length > 1){
        return (
          <ul>  
            {this.createMenuItems()}
          </ul>
       );
      } 
      return (
        <h4>No Items</h4>
      );
    }
  }
  
  export default Menu;
  