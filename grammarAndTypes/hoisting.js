/*

-First Pass: stores our variables declarations (essentially says, "hey I know a variable of x is defined, so let me store that in my memory so I know it's there"), but does not assign them their values.
    -Anything that needs to be hoisted, is hoisted.

-Second Pass: Assigns the values to our variables and executes any hoisted source code. 

*/ 

// Doesn't run bc myName was not initialized 
console.log(myName);
let myName = "Thomas";

// Executes bc the function was hoisted during the first push
b()
function b(){
    console.log("I have been hoisted")
}
