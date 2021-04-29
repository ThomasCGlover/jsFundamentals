let x = 12; 

function scope() {
    let x =33;
    console.log(x);
}

scope();
console.log(x);
// gives us '33 12'

let y = 12;
function scopeTwo(){
    y = 33;
    console.log(y);

}

scopeTwo();
console.log(y);