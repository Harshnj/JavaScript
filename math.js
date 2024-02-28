let x=3.22;
let y=0;
let z=10;
let a=-10;

let num = Math.round(x);
console.log(num);

num = Math.ceil(x);
console.log(num);

num = Math.floor(x);
console.log(num);

num = Math.abs(a);
console.log(num);

num = Math.sign(x);
console.log(num);

num = Math.sign(y);
console.log(num);

num = Math.sign(z);
console.log(num);

num = Math.sign(a);
console.log(num);

num = Math.sign(x);
console.log(num);

num = Math.max(x,y,z,a);
console.log(num);

num = Math.min(x,y,z,a);
console.log(num);


let random;

random=Math.trunc((Math.random()*6))
console.log(random);

let randomnum;
let min=10;
let max=111;
randomnum=Math.trunc((Math.random()*(max-min))+min)
console.log(randomnum);