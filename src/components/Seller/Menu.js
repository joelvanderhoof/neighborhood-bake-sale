
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MenuItems from "./MenuItems";



class Menu extends Component {
    constructor(props) {
      super(props);
      this.state = {
        
      };
  
    }
  
    render() {
      return (
         <div>  
         <MenuItems />
         </div>
      );
    }
  }
  
  export default Menu;
  