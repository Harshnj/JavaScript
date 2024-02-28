///Rest paramter allows function to handle varibale paramtaer by bundling them into a array

const a="pizza";
const b="pizza1";
const c="pizza2";
const d="pizza3";

function f1(... food){
    console.log(food);

}

f1(a,b,c,d);