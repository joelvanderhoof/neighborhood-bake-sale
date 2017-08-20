import React, { Component } from 'react';
import StoreHoursItems from "./StoreHoursItems";

class StoreHours extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  listHours() {
    let timeList;
    timeList = this.props.hours.map((time, i) => {
      return <StoreHoursItems key={ i } index={ i } time={ time } edit={ this.props.edit } updateState={ this.props.updateState } />
    });
    return timeList;
  }

  render() {
    return (
      <div>
        <h4>Hours of Operation</h4>
        { this.listHours() }
      </div>
      );
  }
}

export default StoreHours;
