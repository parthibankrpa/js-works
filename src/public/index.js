
// (function(global,jQuery){
//     console.log("greet initializing");
//     var Greet = function(firstname,lastname,language){
//         return new Greet.init(firstname,lastname,language);
//     }
//     Greet.prototype = {
//         showGreet:function(){
//             return this.firstname + this.lastname;
//         }
//     };
//     Greet.init = function(firstname,lastname,language){
//         this.firstname = firstname || "";
//         this.lastname = lastname || "";
        
//     }
    
//     Greet.init.prototype = Greet.prototype;
//     global.G8$ = Greet;
// }(window,jQuery));


// var a,b,c=10;
// debugger;
// let x;

// function a(){
//     function b(){
//         console.log("b->myvar",myVar);
//     }
//     //var myVar = 2;
//     console.log("a->myvar",myVar);
//     b();
// }
// var myVar = 1;
// a()
// var arr = [function(){console.log("inside arr",this)}];
// arr[0]();
// function a(){
//     console.log(this);
// }
// var b = function(){
//     console.log(this);
//     var setName = function(name){
//         this.myname = name;
//     };
//     setName("function b")
//     console.log(this);
// }
// a();b();

// var mapEachfunction  = function(arr,fn){
//     let newArr = [];
//     for(var i=0;i<arr.length;i++){
//         newArr.push(fn(arr[i]));
//     }
//     return newArr
// }

// var multipleAllBy = function(operand){
//     return function(operant,item){
//         return operand * item;
//     }.bind(this,operand);
// }

// var integerArr = [1,2,3,4];
// var newIntArr = mapEachfunction(integerArr,multipleAllBy(2));
// console.log("newIntArr",newIntArr);

// function Brick() {
//     this.width = 10;
//     this.height = 20;
//   }

//   function BlueGlassBrick() {
//     Brick.call(this);
  
//     this.opacity = 0.5;
//     this.color = 'blue';
//   }
//   var bbrik = new BlueGlassBrick();
//   console.log(bbrik);

//   function Person(first, last, age, gender, interests) {
//     this.name = {
//       first,
//       last
//     };
//     this.age = age;
//     this.gender = gender;
//     this.interests = interests;
//   };

//   Person.prototype.greeting = function() {
//     alert('Hi! I\'m ' + this.name.first + '.');
//   };

//   function Teacher(first, last, age, gender, interests, subject) {
//     Person.call(this, first, last, age, gender, interests);
  
//     this.subject = subject;
//   }

// var o = {
//   a:2,
//   m:function(){
//     return this.a+1
//   }
// };
// console.log(o.m());

// var p = Object.create(o);

// p.a = 4;

// console.log(p.m());

// function doSomething(){}
// console.log(doSomething.prototype);
// var doSomethingNew  = function(){};

// console.log(doSomethingNew.prototype);

// var a = {a:1}
// var b  = Object.create(a);

// console.log(b,a);

// var c = Object.create(b);

// var d = Object.create(null);

// console.log("c=>",c,"d=>",d);
// console.log(d.hasOwnProperty,d.__proto__.a);



// // 'use strict';
// function restricted() {
//   // 'use strict';
//   restricted.caller;    // throws a TypeError
//   restricted.arguments; // throws a TypeError
// }
// function privilegedInvoker() {
//   return restricted("test","arguments array");
// }
// privilegedInvoker();

// debugger;
// function fun() { return this; }
// console.assert(fun() === undefined);
// console.assert(fun.call(2) === 2);
// console.assert(fun.apply(null) === null);
// console.assert(fun.call(undefined) === undefined);
// console.assert(fun.bind(true)() === true);

let person = {
	name:"bob",
    getName(){return this.name)
}