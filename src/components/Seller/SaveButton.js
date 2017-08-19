import React, { Component } from 'react';

class SaveButton extends Component {
    constructor(props) {
      super(props);
      this.state = {
        
      };
  
    }
  
    render() {
        return (
          <button type="button" className="btn btn-success" onClick={()=>this.props.save()}>Save</button>
       );
    }
  }
  
  export default SaveButton;
  