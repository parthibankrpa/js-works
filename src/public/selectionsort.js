let arr = [5,3,1,7,4,9,21,15,-1,0,-2]

function selectionSort(arr){
 for(i=0;i<arr.length-2;i++)   {
    // let minel = arr[i];
    let index = i;
    for(j=i+1;j<arr.length;j++){        
        if(arr[index]>arr[j]){
            index = j;
        }        
    }
    // console.log(arr);
    let temp = arr[index];
    arr[index] = arr[i];
    arr[i] =temp;
    console.log(arr);
 }
}

// console.log(arr);
selectionSort(arr);

console.log(arr);