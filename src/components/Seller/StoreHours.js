import React, { Component } from 'react';
import StoreHoursItems from "./StoreHoursItems";
// import AddHourItemButton from "./AddHourItemButton";

class StoreHours extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  listHours() {
    let day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let timeList;
    timeList = this.props.hours.map((time, i) => {
      return <StoreHoursItems day={day[i]} key={ i } index={ i } time={ time } edit={ this.props.edit } updateState={ this.props.updateState } removeFromStateArray={ this.props.removeFromStateArray }
             />
    });
    return timeList;
  }

  render() {
    return (
      <div className="border">
        <h4 className="text-center" style={{"borderBottom": "4px red solid"}}>Hours of Operation</h4>
        <div className="form-group row justify-content-lg-center">
        { this.listHours() }
        </div>
      </div>
      );
  }
}

export default StoreHours;
