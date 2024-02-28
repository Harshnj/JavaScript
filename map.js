// The map() method creates a new array by applying a function to each element of the original array.

// It doesn't mutate the original array; instead, it returns a new array with the results of applying the provided function to each element.

// The callback function passed to map() takes three arguments: the current element, the index of the current element, and the array being traversed.
let arr=[1,2,5,6,4,8,9];

let arr1=arr.map((val)=>{
       return val*val; 
})
console.log(arr1);