// function hi(userName){
//     console.log("Hi,  ${userName}.");
// }

// hi('Thomas')


/*
- Write a function that takes two parameters:
        - one parameter is for a first name,
        - the other parameter is for a last name;
        - have them come together in a variable inside the function.
        - console.log 'Hello, my name is <your name>'
        - call (or invoke) your function
*/

function hello(first, last){
    let fullName = first + ' ' + last;
    console.log("Hello, my name is " + fullName + '.')

}

hello('thomas', 'glover')