import React, { Component } from 'react';

class AddPhoto extends Component {

 render() {
   return (
     <button className={this.props.AddPhotoStyle}>
       Add Photo {'\u00A0'} <i className="fa fa-camera" aria-hidden="true"></i>
     </button>
   );
 }
}

export default AddPhoto;