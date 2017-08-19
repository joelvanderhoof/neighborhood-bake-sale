import React, { Component } from 'react';
import Menu from "./Seller/Menu";
import StoreTitle from "./Seller/StoreTitle";
import StoreHours from "./Seller/StoreHours";
import StoreDescription from "./Seller/StoreDescription";
// import OrderQueue from "./Seller/OrderQueue";
import EditButton from "./Seller/EditButton";

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
  photo: [], // Array of image URL
  certified: false, // Store passes inspection
  review: [], // Array of reviews
}

class SellerAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      menu: testObj.menu,
      title: testObj.title,
      hours: testObj.hours,
      description: testObj.description
    };

    this.setEdit = this.setEdit.bind(this);
    this.setSave = this.setSave.bind(this);
    this.updateState = this.updateState.bind(this);
    this.addToStateArray = this.addToStateArray.bind(this);

  }

  setEdit() {
    this.setState({
      edit: !this.state.edit
    });
  }

  setSave() {
    this.setState({
      edit: !this.state.edit
    });
  }
  
  addToStateArray(value) {
    if(value === "menu"){
      let currentMenu = this.state.menu;
      currentMenu.push("");
      this.setState({menu: currentMenu});
    }
    if(value === "hours"){
      let currentHours = this.state.hours;
      currentHours.push("");
      this.setState({hours: currentHours});
    }
  }

  updateState(key, value, index) {
    //if value empty, do nothing
    if(value.length === 0) {
      return;
    }
    //no index - not an array
    if (index === undefined) {
      let stateObj = {};
      stateObj[key] = value;
      this.setState(stateObj);
    } else if (key === "menu") { //array menu
      let tempMenu = this.state.menu;
      let stateObj = {};
      tempMenu[index] = value;
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
        <h1>Seller Admin Page</h1>
        <EditButton editFunc={ this.setEdit } saveFunc={ this.setSave } edit={ this.state.edit } />
        <StoreTitle title={ this.state.title } edit={ this.state.edit } updateState={ this.updateState } />
        <StoreHours hours={ this.state.hours } edit={ this.state.edit } updateState={ this.updateState } />
        <StoreDescription description={ this.state.description } edit={ this.state.edit } updateState={ this.updateState } />
        <Menu menu={ this.state.menu } edit={ this.state.edit } updateState={ this.updateState } addToStateArray={ this.addToStateArray} />
      </div>
      );
  }
}

export default SellerAdmin;
