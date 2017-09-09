import React from 'react';
//Create an unordered list

    //Each <li> should contain a <div> tag with a store's storeData
    
const StoreList = function({data}) {
    console.log(`this is the store data array: ${JSON.stringify(data)}`)
    //console.log('yes: ', this.props.data);
    //let num = storeData.indexof();
    return (
        <ul className="map-store-list" style={{listStyle: "none"}}>
          {data.map(item => (
            <li className="list-store text-center" style={{color:"white"}}>
              <a href={"/store/" + item.sellerId} style={{color:"white", fontSize:"14px"}}>
              <h4>{item.name + " - " + item.location}</h4>
                </a>
            </li>
          ))}
        </ul>
      );
}


export default StoreList;
