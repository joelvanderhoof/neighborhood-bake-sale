import React from 'react';

const CustomerBookmarks = (props) => {
    
        const {sellerId, storeId, storeLocation, storeName, userFirstName, userId, userLastName} = props.item;
        // Render li tag with props.children 
        return (
            <li className="list-group-item">
                <h4>Restaurant: {storeName}</h4>
                <p>Location: {storeLocation}</p>
            </li>
        );
    };

export default CustomerBookmarks;