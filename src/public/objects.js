
let user = {
    name: "John"
  };
  
  let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
  
  console.log( JSON.stringify(descriptor, null, 2 ) );
  /* property descriptor:
  {
    "value": "John",
    "writable": true,
    "enumerable": true,
    "configurable": true
  }
  */


const object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false
});

object1.property1 = 77;
// throws an error in strict mode

console.log(object1.property1);
// expected output: 42



let user2 = {
    name: "John",
    toString() {
      return this.name;
    }
  };
  
  Object.defineProperty(user2, "toString", {
    enumerable: false
  });
  
  // Now our toString disappears:
  for (let key in user2) console.log(key); // 
  
console.log(user2.__proto__);
// Sealing an object globally
// Property descriptors work at the level of individual properties.

// There are also methods that limit access to the whole object:
 let obj = {
     "a":1
 };

Object.preventExtensions(obj)
// Forbids the addition of new properties to the object.
Object.seal(obj);
// Forbids adding/removing of properties. Sets configurable: false for all existing properties.
// Object.freeze(obj)
// Forbids adding/removing/changing of properties. Sets configurable: false, writable: false for all existing properties.
// And also there are tests for them:

// Object.isExtensible(obj)
// Returns false if adding properties is forbidden, otherwise true.
// Object.isSealed(obj)
// Returns true if adding/removing properties is forbidden, and all existing properties have configurable: false.
// Object.isFrozen(obj)
// Returns true if adding/removing/changing properties is forbidden, and all current properties are configurable: false, writable: false.
// These methods are rarely used in practice.