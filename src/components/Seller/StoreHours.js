import React, { Component } from 'react';
import StoreHoursItems from "./StoreHoursItems";
import AddHourItemButton from "./AddHourItemButton";

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
      <div>
        <h4 className="text-center">Hours of Operation <AddHourItemButton edit={ this.props.edit } addToStateArray={ this.props.addToStateArray }/> </h4>
        { this.listHours() }
      </div>
      );
  }
}

export default StoreHours;
