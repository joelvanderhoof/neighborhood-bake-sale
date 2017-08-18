
import React, { Component } from 'react';

class StoreDescription extends Component {
    constructor(props) {
      super(props);
      this.state = {
        
      };
  
    }
  
    render() {
      return (
           <p>
             {this.props.description}
           </p>
      );
    }
  }
  
  export default StoreDescription;
  