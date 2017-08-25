import React, { Component } from 'react';

class Bookmark extends Component {


 render() {
   return (
     <button div className={this.props.BookmarkStyle}>
       Bookmark {'\u00A0'} <i className="fa fa-book" aria-hidden="true"></i>
     </button>
   );
 }
}

export default Bookmark;