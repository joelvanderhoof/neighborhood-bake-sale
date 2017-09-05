import React, { Component } from 'react';

class Bookmark extends Component {

 render() {
   return (
     <div className={this.props.BookmarkStyle} onClick={()=>{this.props.bookmark(!this.props.bookmarked)}}>
      {this.props.bookmarked ? <span><i className="fa fa-check" style={{color:'green'}}aria-hidden="true"></i> {'\u00A0'}  Bookmarked </span> : <span><i className="fa fa-book" aria-hidden="true"></i> {'\u00A0'}  Bookmark </span>}
     </div>
   );
 }
}

export default Bookmark;