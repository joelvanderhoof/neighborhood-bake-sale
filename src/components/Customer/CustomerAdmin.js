import React, {Component} from 'react';

class CustomerAdmin extends Component {
    constructor(props){
        super(props);
        this.state = {
            //properties here
        }
    }

    componentDidMount() {
        //set states
    }

    render() {
        return (
            <div className="container">
                <h1>CUSTOMER ADMIN</h1>
                <div className="card" style={{width: '20rem'}}>
                    <img className="card-img-top" src="https://cdn3.iconfinder.com/data/icons/people-avatars-11/595/PEOPLE_AVATAR-03-512.png" alt="Card image cap"/>
                    <div className="card-body">
                        <h4 className="card-title">USER NAME</h4>
                        <p className="card-text">RANDOM TEXT</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default CustomerAdmin;