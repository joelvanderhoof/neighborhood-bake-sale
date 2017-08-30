import React, { Component } from 'react';

class StoreImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
    
        };
    
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(e) {
        this.props.updateState("storeimage", e.target.value);
      }

    render() {
        if (!this.props.edit) {
            return (
                <img className='img-fluid rounded mt-3' src={ this.props.storeImage } alt='Italian Bistro' />
                );
        }
        return (
            <div>
              <h4 className="text-center">Store Photo</h4>
              <div className="form-group row">
                <div className="col-lg-10 offset-lg-1">
                  <input className="form-control" name="storeimage" type="text" onChange={ this.handleChange } defaultValue={ this.props.storeImage } id="storeimage" />
                </div>
              </div>
            </div>
            );
    }
}

export default StoreImage;
