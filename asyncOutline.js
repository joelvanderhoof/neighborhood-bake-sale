locationData = await this.buildDataLayer(res);



async initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: this.state.latLng,
        zoom: 14
    });

    let locationData = await getStoreData(zip);
    let testGeo = {
        "type": "FeatureCollection",
        "features": locationData
    }; 

   
    // bind data to the markers on map
    for (var i = 0; i < testGeo.features.length; i++) {
        var coords = testGeo.features[i].geometry.coordinates;
        var latLng = new google.maps.LatLng(coords[1],coords[0]);
        var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            storeId: testGeo.features[i].properties.storeId
        });
        }

    // map.data.addGeoJson(testGeo)
    
    marker.addListener('click', function(event) {
        console.log(this.storeId);
        window.location = '/store/'+this.storeId;
    })
 
}