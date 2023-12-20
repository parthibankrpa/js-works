function rotateLeft(d, arr) {
    debugger;
    for(let i=1; i<=d;i++){
        let shiftedElement = arr.pop();
        arr.unshift(shiftedElement);
        console.log(arr);
        debugger;
    }
    return arr;
}
console.log(rotateLeft(5,[1,2,3,4,5]));