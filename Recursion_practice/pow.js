/**
 * Write a function called power which accepts a base and an exponent.
 * The function should return the power of the base ot the exponent.
 * This function should mimic the functionality of Math.pow().
 *  Do not worry about negative bases and exponents.
*/

const power = (base, exponent) => (exponent === 0) ? 1 : base * power(base, exponent - 1)


// console.log(power(2, 0)) // 1
// power(2, 5) // 32
// power(3, 9) // 19683
