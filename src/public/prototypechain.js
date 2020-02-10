let personn1 ={
    personn1:"personn1"
}
let person0 = {
    default:'person0'
}
let person1  = {
    firstname:'parthiban',
    lastname:'k',
    getFullName:function(){
        return this.firstname + this.lastname;
    },
    otherprops:{
        height:165,
        weight:75
    }
}

let person2 = {
     firstname:'babu',
    lastname:'k'
}
person0.__proto__ = personn1;
person2.__proto__ = person0;



console.log(`person2 fullname : ${person1.getFullName()}`);
console.log(`person2.firstname : ${person2.firstname}`);
console.log(`person2.lastname ${person2.lastname}`);

console.log(`person2.__proto__.firstname ${JSON.stringify(person2.__proto__)}`);