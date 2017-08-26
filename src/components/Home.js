import React, { Component } from 'react';
import Search from './Homepage/Search';


class Home extends Component {
  render () {
    return (
      <div className='container border container-store'>
        <img
            className='img-fluid rounded'
            src='http://images.huffingtonpost.com/2015-03-27-1427496203-1352796-bigstockWoodenspoonandingredientso76325474.jpg'
            alt='Home Image'/>
        <h1>
        Foodies
        </h1>
      <Search />
      </div>
    );
  }
}

export default Home;