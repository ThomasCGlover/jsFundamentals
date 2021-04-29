/*

  1         2
let hi = () => {
    console.log('hi');
}

    1. We need to set the fat arrow function to a variable.
    2. We use the 'fat arrow' to signify its a function.

    -arrow functions introduced in ES6.
        -a more concise way to write function expressions *not declarations
        -arrow function DOES NOT get hoisted
    -2 types of arrow functions:
        -Concise body
        -Block body

*/

// CONCISE BODY
let hi = () => console.log('hi');
// concise body arrow functions return by default.
//       parameter
let apples = x => console.log(`There are ${x} apples.`);
apples(10);



// BLOCK BODY
let hi = () => {
    console.log('hi')
}
// block body arrow functions must have a return in the body of the function (between the {})
let bananas = (x,y) => {
    console.log(`There are ${x} bananas`)
}

