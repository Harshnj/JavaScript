let age = window.prompt("Enter your age");
//Type Conversion=Because sometimes when we want to perform some operation of some data type and user input is of other.
//Suppose user enters some String and we want to perfrom some arthmetic operation on the user 
age=Number(age);
console.log(`Age is ${age}`)

let x="pizza";
let y="pizza";
let z="pizza";

x=Number(x);
y=String(y);
z=Boolean(z);

console.log(x,typeof x); //Nan=Not a number
console.log(y,typeof y);//String
console.log(z,typeof z);//true

let x2=0;
let y2=0;
let z2=0;

x2=Number(x2);
y2=String(y2);
z2=Boolean(z2);

console.log(x2,typeof x2);//Number
console.log(y2,typeof y2);//String
console.log(z2,typeof z2);//true

let x3="";
let y3="";
let z3="";

x3=Number(x3);
y3=String(y3);
z3=Boolean(z3);

console.log(x3,typeof x3);//0
console.log(y3,typeof y3);//empy empty String
console.log(z3,typeof z3);//false ===to check whether the user has given input or not

let x4;
let y4;
let z4

x4=Number(x4);
y4=String(y4);
z4=Boolean(z4);

console.log(x4,typeof x4);//Nan
console.log(y4,typeof y4);//undefined
console.log(z4,typeof z4);//false