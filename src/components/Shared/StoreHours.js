import React, { Component } from 'react';
import StoreHoursItems from "./StoreHours/StoreHoursItems";
import AddHourItemButton from "../Seller/AddHourItemButton";

class StoreHours extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  listHours() {
    let timeList;
    timeList = this.props.hours.map((time, i) => {
      return <StoreHoursItems key={ i } index={ i } time={ time } edit={ this.props.edit } updateState={ this.props.updateState } removeFromStateArray={ this.props.removeFromStateArray }
             />
    });
    return timeList;
  }

  render() {
    return (
      <div className={ this.props.storeHoursStyle }>
        <h4>Hours of Operation <AddHourItemButton edit={ this.props.edit } addToStateArray={ this.props.addToStateArray }/> </h4>
        { this.listHours() }
      </div>
      );
  }
}

export default StoreHours;
