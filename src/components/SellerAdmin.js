import React, { Component } from 'react';
import Menu from "./Seller/Menu";
import StoreHours from "./Seller/StoreHours";
import StoreDescription from "./Shared/StoreDescription";
import EditButton from "./Seller/EditButton";
import StoreImage from "./Seller/StoreImage";
import StoreName from "./Seller/StoreName";
import StoreLocation from "./Seller/StoreLocation";
import AddMenuItemButton from "./Seller/AddMenuItemButton";
import Auth from "./utils/Auth";
import Helpers from "./utils/helpers";
import axios from "axios";
import io from 'socket.io-client';
import ToggleButton from 'react-toggle-button'

let testObj = {
  sellerId: "1", //Same as Sellers.ID
  name: "John's Bistro",
  location: "Irvine, CA", // physical adress
  orders: [], // Array of orders
  hours: [
    "9:00AM-12:00PM", "1:00PM-6:00PM", "1:00PM-6:00PM", "1:00PM-6:00PM", "1:00PM-6:00PM", "1:00PM-6:00PM", "1:00PM-6:00PM"
  ], // Array of objects for each day
  description: "Neighborhood Italian Spot",
  storeImage: "http://www.grappaitalianbistro.com/uploads/files/images/grappa-italian-bistro-hs04.jpg",
  photos: [], // Array of image URL
  certified: false, // Store passes inspection
  review: [], // Array of reviews IDs
}

let pizza = {
  sellerId: String, //Same as Sellers.ID
  name: "Large Pepperoni Pizza",
  description: "Gluten Free, Cheese from the rare hipster Cow, Pepperoni made from an Oak Tree",
  price: 1150,
  image: "http://cdn.schwans.com/media/images/products/56720-1-1540.jpg",
  availability: "In Stock!" //current inventory
};

let sandwich = {
  name: "Cardboard",
  description: "Made with no Peanuts",
  price: 200,
  image: "https://static.pexels.com/photos/236834/pexels-photo-236834.jpeg",
  availability: "Sold Out!" //current inventory
};

let drink = {
  name: "Fat Free Burger",
  description: "0 Calories",
  price: 100,
  image: "https://static.pexels.com/photos/8996/pexels-photo.jpg",
  availability: "Sold Out!" //current inventory
};

let testMenu = [pizza, sandwich, drink];

class SellerAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      menu: [],
      name: "",
      location: "",
      hours: [],
      description: "",
      storeimage: "",
      isOpen: false
    };

    this.setEdit = this.setEdit.bind(this);
    this.setSave = this.setSave.bind(this);
    this.updateState = this.updateState.bind(this);
    this.addToStateArray = this.addToStateArray.bind(this);
    this.removeFromStateArray = this.removeFromStateArray.bind(this);
    this.queryStore = this.queryStore.bind(this);

  }

  queryStore() {
    let userID = Auth.getUserId();
    Helpers.getStore(userID).then((response) => {
      let storeInfo = response.data[0];
      console.log(response);
      console.log(storeInfo);
      this.setState({
        menu: storeInfo.menuItems,
        name: storeInfo.name,
        hours: storeInfo.hours,
        isOpen: storeInfo.isOpen,
        location: storeInfo.location,
        storeimage: storeInfo.storeImage,
        description: storeInfo.description
      });
    });
  }

  componentDidMount() {
    var socket = io.connect('http://localhost:8080');
    socket.on('news', function(data) {
      console.log(data);
      socket.emit('my other event', {
        my: 'data'
      });
    });

    this.queryStore();

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
    return axios.get("api/useLater").then((data) => {
      console.log(data);
    });
  }

  //add slot in hours or menu array
  addToStateArray(value) {
    if (value === "menu") {
      let currentMenu = this.state.menu;
      let emptyMenuItem = {
        name: "Menu Name",
        description: "Menu Description",
        price: 0,
        image: "https://static.pexels.com/photos/563067/pexels-photo-563067.jpeg",
        availability: "Sold Out!" //current inventory
      };

      currentMenu.push(emptyMenuItem);
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
        <h1 className="text-center">{ this.state.name }'s Admin Page <EditButton editFunc={ this.setEdit } saveFunc={ this.setSave } edit={ true } /></h1>
        Store:
        <ToggleButton value={ this.state.isOpen } onToggle={ (value) => {this.setState({ isOpen: !value,})} } inactiveLabel="Off" activeLabel="On" />
        <div className="text-center">
        </div>
        <div className="row sellerContainer">
          <div className="col-md-6 border sellerLeft pre-scrollable">
            <div className="text-center">
              <StoreDescription description={ this.state.description } edit={ false } updateState={ this.updateState } />
            </div>
            <div className="row">
              <div className="col-xl-6 col-md-12 col-sm-12">
                <StoreImage storeImage={ this.state.storeimage } edit={ false } />
                <StoreHours hours={ this.state.hours } edit={ false } updateState={ this.updateState } />
                <StoreLocation location={ this.state.location } edit={ false } updateState={ this.updateState } />
              </div>
              <div className="col-xl-6 col-md-12 col-sm-12">
                <Menu menu={ this.state.menu } edit={ false } updateState={ this.updateState } addToStateArray={ this.addToStateArray } removeFromStateArray={ this.removeFromStateArray }
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 border sellerRight pre-scrollable">
            <StoreName name={ this.state.name } edit={ true } updateState={ this.updateState } />
            <StoreImage storeImage={ this.state.storeimage } edit={ true } updateState={ this.updateState } />
            <StoreHours hours={ this.state.hours } edit={ true } updateState={ this.updateState } addToStateArray={ this.addToStateArray } removeFromStateArray={ this.removeFromStateArray }
            />
            <StoreLocation location={ this.state.location } edit={ true } updateState={ this.updateState } />
            <StoreDescription description={ this.state.description } edit={ true } updateState={ this.updateState } />
            <h4 className="text-center">Inventory <AddMenuItemButton edit={ true } addToStateArray={ this.addToStateArray } /> </h4>
            <Menu menu={ this.state.menu } edit={ true } updateState={ this.updateState } addToStateArray={ this.addToStateArray } removeFromStateArray={ this.removeFromStateArray }
            />
          </div>
        </div>
      </div>
      );
  }
}

export default SellerAdmin;
