import React from 'react';

const CustomerReviews = (props) => {
    // Render li tag with props.children 
    return (
        <li className="list-group-item">
            {props.children}
        </li>
    );
};

export default CustomerReviews;