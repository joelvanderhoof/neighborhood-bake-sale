import React, { Component } from 'react';
import Search from './Homepage/Search';
import Image from './Homepage/Image';
import MapSearch from './MapSearch';

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
      <div className="img-fluid rounded" çalt="Home"> 

        <h1 className="text-center" 
            style={{color:"white",
            fontFamily: "Lobster Two, cursive",
            fontSize: 200}}>Foodies</h1>
        {/* Name of the App- still being decided "Foodies" */}
      {/* <MapSearch /> */}
      <Image />
      <Search />
      </div>
    );
  }
}

export default Home;