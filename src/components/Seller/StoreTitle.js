
import React, { Component } from 'react';

class StoreTitle extends Component {
    constructor(props) {
      super(props);
      this.state = {
        
      };
  
    }
  
    render() {
      return (
         <div>  
           <h1>{this.props.title}</h1>
         </div>
      );
    }
  }
  
  export default StoreTitle;
  