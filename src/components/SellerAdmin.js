import React, { Component } from 'react';
import Menu from "./Seller/Menu";
// import StoreTitle from "./Seller/StoreTitle";
import StoreHours from "./Seller/StoreHours";
import StoreDescription from "./Shared/StoreDescription";
// import OrderQueue from "./Seller/OrderQueue";
import EditButton from "./Seller/EditButton";
import StoreImage from "./Seller/StoreImage";
// import StoreFront from "./Store/StoreFront.js";

let testObj = {
  storeID: "1",
  sellerID: "111", // Same as Sellers.ID
  title: "John's Bistro",
  location: "Irvine, CA", // physical adress
  menu: [
    "Pizza", "Spaghetti", "Bread Sticks"
  ], // Array of menu items
  hours: [
    "9:00AM-12:00PM", "1:00PM-6:00PM"
  ], // Array of daily hours
  description: "Neighborhood Italian Spot",
  storeImage: "http://www.grappaitalianbistro.com/uploads/files/images/grappa-italian-bistro-hs04.jpg",
  photo: [], // Array of image URL
  certified: false, // Store passes inspection
  review: [], // Array of reviews
}

let pizza = {
  name: "Large Pepperoni Pizza",
  description: "Gluten Free, Cheese from the rare hipster Cow, Pepperoni made from an Oak Tree",
  price: 1150,
  img: "http://cdn.schwans.com/media/images/products/56720-1-1540.jpg",
  availability: "In Stock!" //current inventory
};

let sandwich = {
  name: "Cardboard",
  description: "Made with no Peanuts",
  price: 200,
  img: "https://static.pexels.com/photos/236834/pexels-photo-236834.jpeg",
  availability: "Sold Out!" //current inventory
};

let drink = {
  name: "Fat Free Burger",
  description: "0 Calories",
  price: 100,
  img: "https://static.pexels.com/photos/8996/pexels-photo.jpg",
  availability: "Sold Out!" //current inventory
};

let testMenu = [pizza, sandwich, drink];

class SellerAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      menu: testMenu, //testObj.menu,
      title: testObj.title,
      hours: testObj.hours,
      description: testObj.description,
      storeimage: testObj.storeImage
    };

    this.setEdit = this.setEdit.bind(this);
    this.setSave = this.setSave.bind(this);
    this.updateState = this.updateState.bind(this);
    this.addToStateArray = this.addToStateArray.bind(this);
    this.removeFromStateArray = this.removeFromStateArray.bind(this);

  }

  setEdit() {
    this.setState({
      edit: !this.state.edit
    });
  }

  setSave() {
    // this.setState({
    //   edit: !this.state.edit
    // });

    console.log(this.state);
  }

  //add slot in hours or menu array
  addToStateArray(value) {
    if (value === "menu") {
      let currentMenu = this.state.menu;
      currentMenu.push("");
      this.setState({
        menu: currentMenu
      });
    }
    if (value === "hours") {
      let currentHours = this.state.hours;
      currentHours.push("");
      this.setState({
        hours: currentHours
      });
    }
  }

  //removes from hour or menu array
  removeFromStateArray(value, index) {
    if (value === "menu") {
      let currentMenu = this.state.menu;
      currentMenu.splice(index, 1);
      this.setState({
        menu: currentMenu
      });
    }
    if (value === "hours") {
      let currentHours = this.state.hours;
      currentHours.splice(index, 1);
      this.setState({
        hours: currentHours
      });
    }
  }

  updateState(key, value, index, type) {
    //no index - not an array
    if (index === undefined) {
      let stateObj = {};
      stateObj[key] = value;
      this.setState(stateObj);
    } else if (key === "menu") { //array menu
      let tempMenu = this.state.menu;
      let stateObj = {};
      tempMenu[index][type] = value;
      stateObj[key] = tempMenu;
      this.setState(stateObj);
    } else if (key === "hours") { //array hours
      let tempHours = this.state.hours;
      let stateObj = {};
      tempHours[index] = value;
      stateObj[key] = tempHours;
      this.setState(stateObj);
    }
  }
  render() {
    return (
      <div>
        <h1 className="text-center">{ this.state.title }'s Admin Page <EditButton editFunc={ this.setEdit } saveFunc={ this.setSave } edit={ true } /></h1>
        { /*  <StoreTitle title={ this.state.title } edit={ false } updateState={ this.updateState } /> */ }
        <div className="text-center">
        </div>
        <div className="row">
          <div className="col-md-6 border">
            <div className="row">
              <div className="col-6">
                <StoreDescription description={ this.state.description } edit={ false } updateState={ this.updateState } />
                <StoreImage storeImage={ this.state.storeimage } edit={ false } />
                <StoreHours hours={ this.state.hours } edit={ false } updateState={ this.updateState } />
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12">
                <Menu menu={ this.state.menu } edit={ false } updateState={ this.updateState } addToStateArray={ this.addToStateArray } removeFromStateArray={ this.removeFromStateArray }
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 border">
            { /*   <StoreTitle title={ this.state.title } edit={ true } updateState={ this.updateState } /> */ }
            <StoreHours hours={ this.state.hours } edit={ true } updateState={ this.updateState } addToStateArray={ this.addToStateArray } removeFromStateArray={ this.removeFromStateArray }
            />
            <StoreImage storeImage={ this.state.storeimage } edit={ true } updateState={ this.updateState } />
            <StoreDescription description={ this.state.description } edit={ true } updateState={ this.updateState } />
            <Menu menu={ this.state.menu } edit={ true } updateState={ this.updateState } addToStateArray={ this.addToStateArray } removeFromStateArray={ this.removeFromStateArray }
            />
          </div>
        </div>
      </div>
      );
  }
}

export default SellerAdmin;
