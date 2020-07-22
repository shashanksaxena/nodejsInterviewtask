//Task 1: polyfill function for Array.filter

function polyFill(arr, value) {
    //perform action based on Filter condition:
    //Assumption:  here condition is int greater than 30
    var outputArray = [];
    console.log("value is", value);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > value) {
            outputArray.push(arr[i]);
        }
    }
    return outputArray
}

function func() {
    var sampleInput = [11, 98, 31, 23, 944];
    let getResult = polyFill(sampleInput, 30)
    return getResult
}

console.log("Polyfill Function to find values greater than 30 ", func());
