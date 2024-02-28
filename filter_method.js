// The filter method in JavaScript is a built-in array method that is used to create a new array containing elements that satisfy a specified condition
const numbers = [1, 2, 3, 4, 5, 6];

// Filter out even numbers and store in oddNumbers
const oddNumbers = numbers.filter(function (number) {
  return number % 2 !== 0;
});

console.log(oddNumbers); // Output: [1, 3, 5]
