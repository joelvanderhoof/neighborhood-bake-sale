import React, { Component } from 'react';

class AddHourItemButton extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
        if (this.props.edit) {
            return (
                <button type="button" className="btn btn-info" onClick={()=>this.props.addToStateArray("hours")}>
                  +
                </button>
                );
        }
        return (
            <div></div>
        );
    }
}

export default AddHourItemButton;
