let ages = [75,65,45,37,12,23,08,5,2,100];

let people = [{ name:'a',age:75}
,{name:'b',age:65}
,{name:'d',age:45}
,{name:'c',age:37}
,{name:'e',age:12}
,{name:'g',age:23}
,{name:'f',age:08}
,{name:'h',age:5}
,{name:'j',age:2}
,{name:'i',age:100}]

let sortedAges = ages.sort((a,b)=> {console.log(`a=${a} b=${b}`);return b-a;});

let totalAge = ages.reduce((total,age)=> total+age,0);

let totalPeopleAge = people.reduce((total,person) => total);

let tosort = "stringS";

let stringsort  = [...tosort].sort((a,b)=> a.localeCompare(b)).join('');

console.log(`totalPeopleAge = ${JSON.stringify(totalPeopleAge)}`);

console.log(`totalAge = ${totalAge}`);

console.log(`sortedAges = ${sortedAges}`);

console.log(`sorted string  = ${stringsort}`);