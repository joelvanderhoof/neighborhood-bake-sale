import React, {Component} from 'react';

const CustomerOrders = (props) => {

    const {buyerFirstName, buyerLastName, customerId, date, items, orderTotal, pickedUp, sellerFirstName, sellerId, sellerLastName, status, storeId} = props.item;

    // Render li tag with props.children 
    return (
        <li className="list-group-item">
            <h4>Restaurant: {sellerFirstName+ ' ' +sellerLastName}</h4>
            {items.map(data => (
                <p key={data.id}>Item: {data.item}</p>
            ))}
        </li>
    );
};


export default CustomerOrders;