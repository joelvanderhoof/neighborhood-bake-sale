import React, { Component } from 'react';

class EditButton extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
        if (this.props.edit) {
            return (
                <button type="button" className="btn btn-info" onClick={ () => this.props.saveFunc() }>
                  Save
                </button>
                );
        }
        return (
            <button type="button" className="btn btn-danger" onClick={ () => this.props.editFunc() }>
              Edit
            </button>
            );
    }
}

export default EditButton;
