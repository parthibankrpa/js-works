//functional programming

function mapFnForEach(arr, fn) {
    let tempArray = [];
    for (let i = 0; i < arr.length; i++) {
        tempArray.push(fn(arr[i]))
    }
    return tempArray;
}

let intArray = [1, 2, 3, 4];

let checkForLimit = function (limit) {
    return function (limit, item) {
        return limit < item;
    }.bind(this, limit);
}

let doubleArray = mapFnForEach(intArray, item => item > 2);

let limitArray = mapFnForEach(intArray, checkForLimit(1))

console.log(limitArray);