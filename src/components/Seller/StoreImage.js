import React, { Component } from 'react';

class StoreImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
    
        };
    
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(e) {
        this.props.updateState("storeImage", e.target.value);
      }

    render() {
        if (!this.props.edit) {
            return (
                <img className='img-fluid rounded' src={ this.props.storeImage } alt='Store Image' />
                );
        }
        return (
            <div>
              <h4 className="text-center">Store Image</h4>
              <div className="form-group row justify-content-lg-center">
                <div className="col-lg-10">
                  <input className="form-control" name="storeimage" type="text" onChange={ this.handleChange } value={ this.props.storeImage } id="storeimage" />
                </div>
              </div>
            </div>
            );
    }
}

export default StoreImage;
