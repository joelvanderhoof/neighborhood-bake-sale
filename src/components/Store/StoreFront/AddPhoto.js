import React, { Component } from 'react';

class AddPhoto extends Component {

 render() {
   return (
     <div className={this.props.AddPhotoStyle}>
       <i className="fa fa-camera" aria-hidden="true"></i> {'\u00A0'} Add Photo  
     </div>
   );
 }
}

export default AddPhoto;