import React, { Component } from 'react';

class Bookmark extends Component {


 render() {
   return (
     <div className={this.props.BookmarkStyle}>
      <i className="fa fa-book" aria-hidden="true"></i> {'\u00A0'}  Bookmark 
     </div>
   );
 }
}

export default Bookmark;