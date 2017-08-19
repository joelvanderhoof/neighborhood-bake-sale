
import React, { Component } from 'react';

class EditButton extends Component {
    constructor(props) {
      super(props);
      this.state = {
        
      };
  
    }
  
    render() {
        return (
          <button type="button" className="btn btn-info" onClick={()=>this.props.edit()}><i className="fa fa-pencil" aria-hidden="true"></i></button>
       );
    }
  }
  
  export default EditButton;
  