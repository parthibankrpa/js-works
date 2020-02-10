function Person(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

let john = new Person("John","Doe");
let jane = new Person("Jane","Doe");

Person.prototype.getFullName = function(){
    return this.firstName + this.lastName;
}

console.log(`John fullname =${john.getFullName()}`);
console.log(`John fullname =${jane.getFullName()}`);


String.prototype.isLengthExeeds = function(limit){
    return this.length > limit;
}

Number.prototype.isPositive = function(){
    return this >=0;
}


console.log(`String is length Exeeds = ${"parthiban".isLengthExeeds()}`);

let no = -3;

console.log(`isPositive number ${no.isPositive()}`)


console.log(`John hasownpropertyof of getFullname ${john.hasOwnProperty('getFullName')}`);