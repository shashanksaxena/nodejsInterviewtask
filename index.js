//Task 1: polyfill function for Array.filter

function polyFill(value) {
    //perform action based on Filter condition
    console.log("value is", value);
    return value
}

function func() {
    var sampleInput = [11, 98, 31, 23, 944];
    let getResult = polyFill(sampleInput)
    return getResult
}

console.log(func());
