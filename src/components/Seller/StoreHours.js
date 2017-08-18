
import React, { Component } from 'react';

class StoreHours extends Component {
    constructor(props) {
      super(props);
      this.state = {
        
      };
  
    }
    
    listHours() {
      let timeList;
      timeList = this.props.hours.map((time, i)=>{
        return <li key={i}>{time}</li>
      });
      return timeList;
    }

    render() {
      return (
         <div>
           <h4>Hours of Operation</h4>  
           {this.listHours()}
         </div>
      );
    }
  }
  
  export default StoreHours;
  