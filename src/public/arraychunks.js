
// function chunks(array,size){
//     if(!size){
//         return [];
//     }

//     let splittedArray = [];
//     for (let i = 0; i < array.length; i += size) {
//         const chunk = array.slice(i, i + size);
//         splittedArray.push(chunk);
//     }
//     return splittedArray;
// }


// console.log(chunks([1,2,3,4,5,6,7,8,9,10],3));
// console.log(chunks([1,2,3,4,5,6,7,8,9,10],0));

function f1() { console.log(this); console.log(arguments); } 
let f11 = f1.bind({a:1}, 'abc'); f11('def');