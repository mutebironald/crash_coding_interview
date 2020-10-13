/**
 * Write a recursive function sumRange to calculate
 *  sum of all integer numbers from the given number to 1.
 */
const sumRange = (num) => num <= 0 ? 0: num + sumRange(num - 1);
// console.log(sumRange(4)) // 10
console.log(sumRange(6)) // 21 
