// function getLuckyFloorNumber(n){
//     let luckyList = [];
//     for(let i=1;luckyList.length<n;i++){
//         if(!(i.toString().match(/4/g)) && !(i.toString().match(/13/g)))
//             luckyList.push(i)
//     }
//     return luckyList[luckyList.length-1];
// }

// function packNumbers(arr){
   
// }

// function kangaroo(x1, v1, x2, v2) {
//     var x1p = x1 + v1;
//     var x2p = x2 + v2;
//     console.log("x1 =",x1);
//     console.log("v1 =",v1);
//     console.log("x2 =",x2);
//     console.log("v2 =",v2);

//     console.log("x1p =",x1p,"x2p = ",x2p)

//     console.log();
//     //(x2-x1)%(v1-v2)
//     if ((x1 < x2) && (v1 > v2) &&  ((v1 - x2) < v2))  return "YES"
//     else if ((x1 > x2) && (v2 > v1)  && ((v2 - x1) < v1)) return "YES"
//     else return "NO"

// }

// function getTotalX(){
    
// }

    
    // function b(){
    //     function a(){
    //         console.log(myVar);
    //     }
    //     var myVar = 2;
    //     console.log(myVar);
    //         a();
    // }
    // var myVar;
    // console.log(myVar);
    // b();
    

    // function waitThreeSeconds(){
    //     var ms = 3000 + new Date().getTime();
    //     while(new Date() < ms){

    //     }
    //     console.log("finished function")
    // }
    // function clickHandler(){
    //     console.log("client event");
    // }
    // document.addEventListener("click",clickHandler);

    // whiteThreeSeconds()

    /*
    primitive types
        undefined
        null
        Boolean true/false
        Number   its floating point number , its always decimal attached to it
        String  sequence of characters 
        Symbol its used in es6

    */

    /**
     * operators are special type of function
     * associativity
     *  left to right 
     *  right to left
     *  left
     * 
     * for js operation equeality comparison
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
     */


//COERCION  in the time of execution one type of primitive can convert to another type

//3>2>1  = true
//3<2<1  = true ??
//Number("3") = 3
//Number(undefined) = NaN
//Number(false) = 0
//Number(True) = 1
//Number(null) = 0
//null == 0 false
//null<1 true
//""==0 true
//""==false true
 
// var a = "asdfasdf";
// if(a){
//     console.log("a == ", a )
// }
/**
 * first class functions - assign to them variables, create them on fly, pass them around
 * Javascript functions are objects
 * functions statements and function expressions
 * Expression is a unit of code that results values
 * function statement do work
 * 
 */

//  function Rectangle (a,b){
     
//         this.length =a;
//         this.width = b;
//         this.perimeter = 2 (a+b)
//         this.area = a * b;
//  }
 
// var a = 4;
// var b  = 5;
// const rec = new Rectangle(a, b);
// console.log(rec.length);
//     console.log(rec.width);
//     console.log(rec.perimeter);
//     console.log(rec.area);

// var person = {
//     firstname : "John",
//     lastname : "Doe",
//     getFullName:function(){
//         var fullName = this.firstname + '  '+ this.lastname;
//         return fullName;

//     }
// }
// var person1 = {
//     firstname : "John1",
//     lastname : "Doe1"
// }

// var logName = function(lang1,lang2){
//     console.log('Logged :'+this.getFullName());
//     console.log('Arguments :'+lang1+" "+lang2);
//     console.log("-------this-----------",this);
// }.bind(person);

// // var logPersonName = logName()
// logName("en","es");
// logName.call(person,"en","es");
// logName.apply(person,["en","es"]);
//console.log(logPersonName());

//function borrowing
// console.log(person.getFullName.apply(person1));

//function currying, creating a copy of a function but with some preset parameters


// function multiply(a,b){
//     return a*b;
// }

// var multiplyByTwo = multiply.bind(this,2);
// var multiplyCopy = multiply.bind(this);
// console.log(multiplyByTwo(4));
// console.log(multiplyCopy(5,5));


// function mapFunction(arr,fn){
//     var newArr = [];
//     for(var i=0;i<arr.length;i++){
//         newArr.push(
//             fn(arr[i])
//         );
//     }
//     return newArr;
// }

//  var arr1 = [1,2,3];
//  var mapForEach = function(arr,fn){
//      var newArr = [];
//      arr.forEach(function(value){
//          newArr.push(fn(value));
//      });
//      return newArr;
//  }
// console.log(arr1);
// var arr2 = mapForEach(arr1,function(item){
//     console.log(item*item);
//     return Number(item) * Number(item);
// });
// console.log(arr2);

// var checkPassLimit = function(limit,item){
//     return item > limit;
// }

// var arr4 = mapForEach(arr1,checkPassLimit.bind(this,2));
// console.log(arr4);

// var checkPastLimitSimplified = function(limiter){
//     return function(limiter,item){
//         return limiter > item;
//     }.bind(this,limiter)
// }
 

// var arr5 = mapForEach(arr1,checkPastLimitSimplified(18));


// console.log(arr5);

//INHERITANNCE

// one object gets access to the properties and methods of another objects
/*
var person = {
    firstname:"default",
    lastname:"default",
    getFullName:function(){
        return this.firstname + " " + this.lastname;
    }
};

var john  = {
    firstname:"john",
    lastname:"doe"
}

john.__proto__ = person;
console.log(john.firstname);
console.log(john.lastname);
console.log(john.getFullName());
*/


//REFLECTION

// AN object can look at itself, listing and changing its properties and methods

// function person(firstname,lastname){
//     this.firstname = firstname;
//     this.lastname = lastname;
//   //  console.log(this);
// }
// person();
// var john = new person("john","doe");
// // we call a function that specific to contstuct an object thats called function contstructor
// // 'this' variable points to an empty object and that object being retured from the function automatically
// // this behaior will be broken when you add a `return` statement to a function
// console.log(john.__proto__);
// var arr = 5678;
// //console.log(typeof(arr));
//  //arr.__proto__ = new String();
//  console.log(typeof(arr));
//  //console.log(arr.reverse());
//  person.prototype.getFullName = function(){
//      return this.firstname +" "+this.lastname;
//  }
//  console.log(john.getFullName());

//  //POLYFILL code that adds a feature which engine may lack
//  //SYNTACTIC SUGAR A different way to type somethinge that doesnt change under the hood how it works
 


let i = 0,  n = 10000000000;
console.log(i,n);
let timeBefore  = new Date().getTime();
console.log(timeBefore);

let sum = 0;
for(i;i<n;i++){
    sum +=i;
}
function sumPair(a,b){
 return a+b;
}
let timeAfter = new Date().getTime();
console.log("sum =",sum);
console.log("time difference = ", timeAfter-timeBefore);


