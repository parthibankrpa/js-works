let a  = {
    b:this,
    c:function(){
        console.log(this);
    },
    d:this
}

console.log(a.b);
console.log(a.d);

let sum = 0;
function sumNumbers(param){
    // let args;
    console.log(typeof(param));
    if(typeof(param) !== 'number'){
        return sum;
    }
    sum+=param;
    return sumNumbers
}
console.log(sumNumbers(1)(2)(3)('#'));

// let x = 0;
// function add(param) {
//     if (param == "#") {
//         return x;
//     }
//     x += param;
//     return add;
// }


