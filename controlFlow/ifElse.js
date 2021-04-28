
/*
Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log '<name>'
    If the name does not match, console.log 'Hello, what is your name?'
Silver:
    If It is your name, console log 'Hello, my name is <name>'
Gold:
    If it is not your name, console log 'Hello, is your name <name here> ?'
*/

// BRONZE
let myName = "thomas";
if (myName == "thomas"){
     console.log("Hello, my name is " + myName);
}
else {
    console.log("Hello, what is your name?");

}

// SILVER + GOLD
if (myName == 'thomas') {
    console.log("Hello, my name is " + myName + ".")
} else {
    console.log("Hello, is your name " + myName + "?")
}

// ELSE IF STATEMENTS
let newName = 'thomas';
if (newName == 'Waldo') {
    console.log('Hello' + newName);
} else if (newName === 'thomas'){
    console.log('Hello ' + newName);
} else {
    console.log('I dont know ' + newName + '.')
}

/*
    Look up the format for an Else If statement
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/

let age = 17;
if (age >= 25) {
    console.log("You can rent a car!");
}
else if (age >= 21){
    consolg.log("You can drink!");
}
else if (age >= 18) {
    console.log("You can vote!")
}
else {
    console.log("Sorry, you're too young to do anything.")
}
