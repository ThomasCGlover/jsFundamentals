/* 
let hi = () => {
       1
    return 'hi';
};
       2       3
let newName = hi();

console.log(newName);


1. the keyword that brings our data our of our function
2. we need a new variable to hold the value of the return
3. when called, the function becomes the value of the return

*/

// let math = (numOne, numTwo) => {
//     let total = numOne + numTwo;
//     return total;
// }

// let sum = math(1,2);
// let sum2 = math(5293, 12394);
// console.log(sum);
// console.log(sum2);

/*
    Make a tip calculator using a function
    Have it RETURN the value
    Capture that returned value in a VARIABLE
    Print that variable
*/

let tipCalc = price => {
    let twentyPercent = price * .2;
    let total = price + twentyPercent;
    return total;
    
}

let payment = tipCalc(250, .2);
console.log(payment);