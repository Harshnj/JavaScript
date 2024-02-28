// The forEach method is a higher-order function in JavaScript that is used to iterate over elements in an array and perform a specified operation for each element. It takes a callback function as its argument, and this callback is executed once for each element in the array. 
//It s Array Function
let a =[1,2,3,6,5,4];

a.forEach((element)=>{
   console.log(element);
 
});


const myString = 'Hello';
const charArray = Array.from(myString);//Array.form() is used to convert to Array



const s ="Harsh Joshi is THE G.O.A.T";
Array.from(s).forEach((char=>{
    console.log(char)
}))