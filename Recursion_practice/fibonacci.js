// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
/**
 *  fibonnacci sequence is a series of whole numbers 1,1,2,3,5,8,13,21,34,55,89... which starts with 1 and 1,
 * and where every number thereafter is equal to the sum of the two previous numbers
*
*/
//find fib(nth number) 
//where n is the position of element.

function fib(n){
    if(n < 0) return "Not handling negatives"
    if(n === 0) return 0;
    if(n < 3) return 1;
    return fib(n -1) + fib(n -2);
}

console.log(fib(3))
