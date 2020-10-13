/**
 * Write a recursive function factorial
 * to calculate factorial of the given number
*/

const factorial = (num) => {
    if(num < 0) return;
    if(num === 1) return 1;
    return num * factorial(num -1);
}
// console.log(factorial(4))    // 24
console.log(factorial(5))    // 120
