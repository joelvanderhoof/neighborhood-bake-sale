// React Dependencies
import React, {Component} from 'react';
import Login from './Login/Login'

class Main extends Component  {
    constructor(props) {
        super(props);
    }

    // Render
    render() {
        return (
           <div className='container'>
               <h1>Main Component</h1>
               <Login />
            </div>
        )
    };
};

export default Main;
