// offer us a quick and easy way to do something repeatedly
/* 
A loop has 3 parts:
    -initial expressions
    -condition
    -increment expression
*/


// 1 2 3 4 5 6 7 8 9 10
for (let i = 0; 1< 10; i++) {
    console.log(i);
}

// 2 4 6 8 10 12 14 16 18 20
for (let i = 0; i <= 20; i+= 2) {
    console.log(i);
     }

// 10 9 8 7 6 5 4 3 2 1
for (let i = 10; i > 0; i --) {
    console.log(i);
}

// counts down to -24 from 0 by 2s
for (let i = 0; i > -25; i -= 2){
    console.log(i);
}

// Go through and display each letter of the name individually
let name = "Thomas";
for (let i = 0; i < name.length; i++){
    console.log(name[i])
}

// Add up all numbers from 1-50
let sum = 0;
for (let i = 0; i < 51; i++) {
    i += sum;
}
console.log(sum);

