import React from 'react';

const CustomerOrders = (props) => {
    // Render li tag with props.children 
    return (
        <li className="list-group-item">
            {props.children}
        </li>
    );
};

export default CustomerOrders;