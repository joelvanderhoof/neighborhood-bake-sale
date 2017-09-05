import React from 'react';

const CustomerBookmarks = (props) => {
    // Render li tag with props.children 
    return (
        <li className="list-group-item">
            {props.children}
        </li>
    );
};

export default CustomerBookmarks;