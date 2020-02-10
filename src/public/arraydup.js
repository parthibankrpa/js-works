function removeDep(arr) {
    let nonDupArr = [];
    for (let i = 0; i < arr.length; i++) {
        nonDupArr[arr[i]] = true;
    }
    return Object.keys(nonDupArr).map((x) => parseInt(x));
}
console.log(removeDep([1, 2, 1, 3, 2, 4, 3, 4]));

function removeDup(arr1, arr2) {
    let obj = {};
    arr1.forEach(element => {
        obj[element] = true;
    });
    arr2.forEach(element => {
        obj[element] = true;
    });
    return Object.keys(obj);
}

let a = [1, 2, 2, 3, 4, 5];
let b = [0, 2, 2, 3, 4, 5];
let c = [-1, 2, 2, 3, 4, 5];

console.log(removeDup(removeDup(a, b), c));
