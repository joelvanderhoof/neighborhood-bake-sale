import React, { Component } from 'react';

class EditButton extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
        return (
            <button type="button" className="btn btn-info" onClick={ () => this.props.saveFunc() }>
              Save
            </button>
            );
    }
}

export default EditButton;
