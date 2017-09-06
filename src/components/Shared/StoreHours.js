import React, { Component } from 'react';
import StoreHoursItems from "./StoreHours/StoreHoursItems";

class StoreHours extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  listHours() {
    let day = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    return this.props.hours.map((time, i) => {
      return <StoreHoursItems day={day[i]} key={ i } index={ i } time={ time } />
    });
  }

  render() {
    return (
      <div className={this.props.storeHoursStyle}>
        <h4 className="text-center" style={{"borderBottom": "4px red solid"}}>Hours of Operation</h4>
        { this.listHours() }
      </div>
      );
  }
}

export default StoreHours;