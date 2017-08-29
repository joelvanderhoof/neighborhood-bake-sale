import React, { Component } from 'react';
import Search from './Homepage/Search';

class Home extends Component {
  render () {
    return (
      <div 
        style={{backgroundImage:"url('https://s-media-cache-ak0.pinimg.com/originals/36/62/29/366229e72efbb7aadf3c8361864d6c5a.jpg')",
                width: "100%",
                height: "600px",
                backgroundPosition: "center", 
                backgroundSize: "cover"}}> 
        {/* <img className='img-fluid rounded'
            src='https://s-media-cache-ak0.pinimg.com/originals/36/62/29/366229e72efbb7aadf3c8361864d6c5a.jpg'
            alt='Home Image'/>    */}
        <h1 className="text-center">Foodies</h1>
        {/* Name of the App- still being decided "Foodies" */}
      <Search />
      </div>
    );
  }
}

export default Home;