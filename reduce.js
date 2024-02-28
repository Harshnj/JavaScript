/*
The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

It iterates over each element of the array, accumulating the result of the callback function applied to each element.

The callback function passed to reduce() takes four arguments: the accumulator, the current element, the index of the current element, and the array being traversed.
*/
let arr=[1,2,5,6,4,8,9];

let arr1=arr.reduce((prev,curr)=>{
        if(prev < curr) return curr;
        else
        return prev;
})
console.log(arr1);

let arr2=arr.reduce((prev,curr)=>{
  return prev+curr;
})
console.log(arr2);