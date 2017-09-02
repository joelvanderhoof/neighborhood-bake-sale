# neighborhood-bake-sale

Commands:
```
$ npm start
```
Use npm start to run the server, it will auto refresh react as well

```
$ npm run build
```
When we are ready to deploy, use npm run build to create a build folder. The actual backend server will still need to be ran with nodemon server.js

# For reference only, please update this later
Stripe js (node)
https://github.com/stripe/stripe-node

Google Maps (node)
https://github.com/googlemaps/google-maps-services-js

#Example request objects for API


New User Object:

```javascript
{ 
    "firstName": "John",
    "lastName": "Smith",
    "password": "1234567890",
    "email": "new.email2@email.com",
    "isSeller": true
}
```

/user .put() example.  Put each user object to be updated in an object in a **users** array on the request object.  **Follow this pattern for all .put requests.**

```javascript
{ users: [
        { 
            "firstName": "John",
            "lastName": "Smith",
            "password": "1234567890",
            "email": "new.email2@email.com",
            "isSeller": true
        }
    ] 
}
```


New Store Object:

```javascript
{ 
    "sellerID": "5999d619126eaa49efa998e2",
    "location": "123 Main Street, Here, CA 92831",
    "hours": "[ {day: Monday, hours: 9-5}, {day: Tuesday, hours: 9-5}, {day: Wednesday, hours: 9-5}, {day: Thursday, hours: 9-5}, {day: Friday, hours: 9-5}, ]",
    "description": "This is a short description about my store.  It is a store that sells things.",
    "photos": "http://www.hamburgerhamlet.com/wp-content/uploads/2014/11/the-hamburger-hamlet-sherman-oaks-40.jpg", 
    "certified": true
}
```


New Menu Object:

```javascript
{
    "StoreID": "599a328e98fd725b30e66b1a",
    "name": "Pizza",
    "image": "https://eatpizzafresca.com/images/pepperoni_pizza.jpg?crc=4023861219",
    "description": "Super Mega Ultra Pizza",
    "price": "1600",
    "inventory": "100",
    "active": "true"
}
```



New Review Object:

```javascript
{
    customerID: "5999d66b4c8d304a2ca72f9e",
    "StoreID": "599a328e98fd725b30e66b1a",
    review: This place has the best pizza, 
    rating: 5, 
    imageURL: http://s.storage.akamai.coub.com/get/b26/p/coub/simple/cw_timeline_pic/b527c0180dc/eb64b4e1c8b66e0d456c6/big_1464492066_image.jpg
}
```
test