/*
For In Loops
    -great for iterating over values in a n object
    -enumerable just means countable
*/

let student = {
    name: "Jake from state farm",
    awesome: true,
    degree: "insurance sales",
    age: 98
};

for(item in student){
    console.log(item);
    console.log(student[item]);
};