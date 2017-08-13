// React Dependencies
import React, {Component} from 'react';

class Login extends Component  {
    constructor(props) {
        super(props);
    }

    // Render
    render() {
        return (
           <div id='logIn'>
               <button className='btn btn-sm btn-primary' id='btn-login'>Log In</button>
                <button className='btn btn-sm btn-info' id='btn-register'>Register</button>
            </div>
        )
    };
};

export default Login;
