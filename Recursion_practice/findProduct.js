/**
 * Write a function called productOfArray which takes in an array
 *  of numbers and returns the product of them all.
*/
const productOfArray = (arr) => arr.length === 0 ? 1 : arr[0] * productOfArray(arr.slice(1))


// console.log(productOfArray([1,2,3])) // 6
console.log(productOfArray([5,6]))   // 30
