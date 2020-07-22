//Task 4: Sort the giver array of objects by distance from your given location using javascript.

//Main Function for calling sorting function
function sortArray() {
    var myLoc = {
        name: "Shashank Saxena",
        latitude: "28.535517",
        longitude: "77.391029",
    };
    let getResult = SortFunc(myLoc)
    return getResult;
}


// sorting function
function SortFunc(arr) {
    //writing sorting loop reducing the array
    var inputLocation = [
        {
            name: "Abhishek",
            latitude: "26.449923",
            longitude: "80.331871",
        },
        {
            name: "Akhtar",
            latitude: "27.167641",
            longitude: "27.167641",
        },
        {
            name: "Raj",
            latitude: "28.632429",
            longitude: "77.218788",
        },
        {
            name: "Ravi",
            latitude: "25.435801",
            longitude: "81.846313",
        },
    ]
    //Get Distance
    var outputArray = [];
    for (let i = 0; i < inputLocation.length; i++) {
        let getDistance = getDist(inputLocation[i], arr)
        inputLocation[i]['distance'] = getDistance;
        outputArray.push(inputLocation[i]);

    }
    //Sorting Starts here
    outputArray.sort(function (a, b) {
        var keyA = a.distance,
            keyB = b.distance;
        // Compare the 2 dates
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
    });
    return outputArray
}



// finding distance function
function getDist(arr1, mylocation) {
    //console.log(arr1,mylocation)
    var lat1 = mylocation.latitude;
    var lon1 = mylocation.longitude;

    var lat2 = arr1.latitude;
    var lon2 = arr1.longitude;
    console.log(lat1, lon1, lat2, lon2)
    if ((lat1 == lat2) && (lon1 == lon2)) {
        return 0;
    }
    else {
        var radlat1 = Math.PI * lat1 / 180;
        var radlat2 = Math.PI * lat2 / 180;
        var theta = lon1 - lon2;
        var radtheta = Math.PI * theta / 180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        dist = dist * 1.609344
        return dist;
    }
}


//Display result
console.log("Distance from Shashank in Ascending Order", sortArray())

