var person = {
    firstname:'parthiban',
    lastname:'k',
    getFullName:function(){
        return this.firstname + this.lastname;
    }
}

var logName = function(){
    // console.log(`Fullname : ${this.getFullName()}`);
    console.log(this.getFullName());
};


var logFullName = logName.bind(person);
// logName.call(person);
// logFullName();

//this called function borrowing 


var person2 = {
    firstname : 'person 2 firstname',
    lastname:'person2 lastname'
}

console.log(person.getFullName.call(person2));

// function currying : creating a copy of a function but with some preset parameters

function multiply(x,y){
    return x*y;
}

let multiplyByTwo = multiply.bind(this,2);

let multiplyByThree = multiplyByTwo.bind(this,20);


console.log(multiplyByThree(10));