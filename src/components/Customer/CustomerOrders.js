import React from 'react';

const CustomerOrders = (props) => {

    const {buyerFirstName, buyerLastName, customerId, date, items, orderTotal, pickedUp, sellerFirstName, sellerId, sellerLastName, status, storeId} = props.item;
    items.map(data => {
        console.log('Items: ', data.item);
        console.log('Price:', data.price);
    });
    // Render li tag with props.children 
    return (
        <li className="list-group-item">
            <h4>Seller: {sellerFirstName + sellerLastName}</h4>
            <p>{}</p>
        </li>
    );
};

export default CustomerOrders;