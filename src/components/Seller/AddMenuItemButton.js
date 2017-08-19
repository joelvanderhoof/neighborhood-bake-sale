import React, { Component } from 'react';

class AddMenuItemButton extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
        if (this.props.edit) {
            return (
                <button type="button" className="btn btn-info" onClick={()=>this.props.addToStateArray("menu")}>
                  +
                </button>
                );
        }
        return (
            <div></div>
        );
    }
}

export default AddMenuItemButton;
