
import React, { Component } from 'react';

class MenuItem extends Component {
    constructor(props) {
      super(props);
      this.state = {
        
      };
  
    }
  
    render() {
        return (
          <li>  
            {this.props.item}
          </li>
       );
    }
  }
  
  export default MenuItem;
  