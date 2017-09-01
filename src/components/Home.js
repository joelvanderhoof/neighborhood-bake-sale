import React, { Component } from 'react';
import Search from './Homepage/Search';
import Image from './Homepage/Image';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      secretData: ''
    };
  }

  componentDidMount() {
}

  render () {
    return (
      <div className="img-fluid rounded"
        style={{backgroundImage:"url('https://s-media-cache-ak0.pinimg.com/originals/36/62/29/366229e72efbb7aadf3c8361864d6c5a.jpg')",
                width: "100%",
                height: "600px",
                backgroundPosition: "center", 
                backgroundSize: "cover"}} alt="Home Image"> 

        <h1 className="text-center" 
            style={{color:"white",
            fontFamily: "Lobster Two, cursive",
            fontSize: 200}}>Foodies</h1>
        {/* Name of the App- still being decided "Foodies" */}
      <Search />
      <Image />
      </div>
    );
  }
}

export default Home;