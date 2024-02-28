let str="Harsh Joshi";
let str2=str.slice(-1); 
let str3=str.slice(0,3);// is included and 3 is exclusive;
let str4=str.slice(0);//From 0 to end of the String
// console.log(str.slice(-1,0));
// console.log(str.slice(-3,-2));
for(let i=1;i<=str.length;i++){
      str2 +=str.slice(-i,-(i-1));
}
console.log(str2);