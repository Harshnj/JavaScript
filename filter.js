/* 
The filter() method creates a new array with all elements that pass the test implemented by the provided function.

It doesn't mutate the original array; instead, it returns a new array containing only the elements for which the callback function returns true.

The callback function passed to filter() takes three arguments: the current element, the index of the current element, and the array being traversed.
*/
let arr = [1, 2, 5, 6, 4, 8, 9];

let arr1 = arr.filter((val) => {
  if (val > 3) {
    return true; // Include the element if it's greater than 3
  } else {
    return false; // Exclude the element if it's less than or equal to 3
  }
});
console.log(arr1); // Output: [5, 6, 4, 8, 9]
