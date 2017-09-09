import React from 'react';

const CustomerReviews = (props) => {

    const {customerFirstName, customerId, customerLastName, date, imageURL, rating, review, sellerFirstName, sellerLastName, storeId, storeName} = props.item;
    // Render li tag with props.children 
    return (
        <li className="list-group-item">
            <h4>Restaurant: {storeName}</h4>
            <p>Comment: {review}</p>
        </li>
    );
};

export default CustomerReviews;