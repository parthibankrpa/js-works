function reverse(arr){
    for(i=0;i<arr.length/2;i++){
        let other = arr.length - i -1;//10-0-1 9
        let temp = arr[i];//0
        arr[i] = arr[other];
        arr[other] = temp;
    }
    return arr;
}

let temparry = [1,2,3,4,5,6,7,8,9,10];
console.log(reverse(temparry));