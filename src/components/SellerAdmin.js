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
import io from 'socket.io-client';
import ToggleButton from 'react-toggle-button'

class SellerAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      menuItems: [],
      name: "",
      location: "",
      hours: [],
      description: "",
      storeImage: "",
      isOpen: false
    };

    this.setEdit = this.setEdit.bind(this);
    this.setSave = this.setSave.bind(this);
    this.updateState = this.updateState.bind(this);
    this.addToStateArray = this.addToStateArray.bind(this);
    this.removeFromStateArray = this.removeFromStateArray.bind(this);
    this.queryStore = this.queryStore.bind(this);

  }
  // query DB with store info
  queryStore() {
    let userID = Auth.getUserId();
    Helpers.getStore(userID).then((response) => {
      let storeInfo = response.data[0];
      this.setState({
        menuItems: storeInfo.menuItems,
        name: storeInfo.name,
        hours: storeInfo.hours,
        isOpen: storeInfo.isOpen,
        location: storeInfo.location,
        storeImage: storeInfo.storeImage,
        description: storeInfo.description
      });
    });
  }

  componentDidMount() {
    // let socket = io.connect('http://localhost:8080');
    // socket.on('news', function(data) {
    //   console.log(data);
    //   socket.emit('my other event', {
    //     my: 'data'
    //   });
    // });
    this.queryStore();
  }

  //edit function - currently not in use
  setEdit() {
    this.setState({
      edit: !this.state.edit
    });
  }

  //socket advises all customers store updated
  notifyCustomers() {
    let userID = Auth.getUserId();
    let socket = io.connect('https://neighborhood-bake-sale.herokuapp.com/');

    socket.emit("users", {
      storeID: userID,
      message: "Store Updated"
    });
  }

  //save button - updates DB and sends out socket notification
  setSave() {
    let storeData = this.state;
    let userID = Auth.getUserId();
    Helpers.saveStore(userID, storeData).then(() => {
      this.queryStore(userID);
    });
    this.notifyCustomers();
  }

  //add slot in hours or menu array
  addToStateArray(value) {
    let userID = Auth.getUserId();
    if (value === "menu") {
      let currentMenu = this.state.menuItems;
      let emptyMenuItem = {
        sellerId: userID,
        name: "Menu Name",
        image: "https://static.pexels.com/photos/563067/pexels-photo-563067.jpeg",
        description: "Menu Description",
        price: 0,
        inStock: false //current inventory
      };

      currentMenu.push(emptyMenuItem);
      this.setState({
        menuItems: currentMenu
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
      let currentMenu = this.state.menuItems;
      currentMenu.splice(index, 1);
      this.setState({
        menuItems: currentMenu
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

  //updates state - function passed down to inputs
  updateState(key, value, index, type) {
    if (value === "In Stock!") {
      value = true;
    }
    if (value === "Sold Out!") {
      value = false;
    }
    //no index - not an array
    if (index === undefined) {
      let stateObj = {};
      stateObj[key] = value;
      this.setState(stateObj);
    } else if (key === "menu") { //array menu
      let tempMenu = this.state.menuItems;
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
      <div className="container-fluid mb-3 bg-white">
        <div className="text-center row pt-3">
        <h1 className="col-lg-6">{ this.state.name } <EditButton saveFunc={ this.setSave }/></h1> 
        <div className="col-lg-6">
          <div className="row justify-content-lg-center">
            <div className="col-lg-1">
          Store: < ToggleButton value={ this.state.isOpen } onToggle={ (value) => {this.setState({ isOpen: !value,})} } inactiveLabel="Off" activeLabel="On" />
          </div>
          </div>
        </div>
        </div>
        <div className="text-center">
        </div>
        <div className="row sellerContainer bg-white">
          <div className="col-md-6 border sellerLeft pre-scrollable">
            <div className="text-center">
              <StoreDescription description={ this.state.description } edit={ false } updateState={ this.updateState } />
            </div>
            <div className="row">
              <div className="col-xl-6 col-md-12 col-sm-12">
                <StoreImage storeImage={ this.state.storeImage } edit={ false } />
                <StoreHours hours={ this.state.hours } edit={ false } updateState={ this.updateState } />
                <StoreLocation location={ this.state.location } edit={ false } updateState={ this.updateState } />
              </div>
              <div className="col-xl-6 col-md-12 col-sm-12">
                <Menu menuItems={ this.state.menuItems } edit={ false } updateState={ this.updateState } addToStateArray={ this.addToStateArray } removeFromStateArray={ this.removeFromStateArray }
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 border sellerRight pre-scrollable">
            <StoreName name={ this.state.name } edit={ true } updateState={ this.updateState } />
            <StoreImage storeImage={ this.state.storeImage } edit={ true } updateState={ this.updateState } />
            <StoreHours hours={ this.state.hours } edit={ true } updateState={ this.updateState } addToStateArray={ this.addToStateArray } removeFromStateArray={ this.removeFromStateArray }
            />
            <StoreLocation location={ this.state.location } edit={ true } updateState={ this.updateState } />
            <StoreDescription description={ this.state.description } edit={ true } updateState={ this.updateState } />
            <h4 className="text-center">Inventory <AddMenuItemButton edit={ true } addToStateArray={ this.addToStateArray } /> </h4>
            <Menu menuItems={ this.state.menuItems } edit={ true } updateState={ this.updateState } addToStateArray={ this.addToStateArray } removeFromStateArray={ this.removeFromStateArray }
            />
          </div>
        </div>
      </div>
      );
  }
}

export default SellerAdmin;
