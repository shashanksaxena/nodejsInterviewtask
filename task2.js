//Task 2: function for sorting the input array

// process function
function Flatten(arr) {
    //writing recursive/ flattening loop for reducing the array
    var outputArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i].length) {
            outputArray.push(arr[i]);
        }
        for (let j = 0; j < arr[i].length; j++) {
            if (!arr[i][j].length) {
                outputArray.push(arr[i][j]);
            }
            for (let k = 0; k < arr[i][j].length; k++) {
                if (!arr[i][j][k].length) {
                    outputArray.push(arr[i][j][k]);
                }
            }
        }

    }
    return outputArray
}

//Main Function for calling process function
function sortArray() {
    var sampleInput = [4, [2, 3], [5, [5, 6, 2]], [9, 8, [23, 5]]];
    let getResult = Flatten(sampleInput)
    return getResult;
}

//Display result
console.log("Flattend Array", sortArray())

