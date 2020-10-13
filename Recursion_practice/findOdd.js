/**
 * Write a recursive function to return all odd values
 * form the given array of integers without polluting global scope.
*/

const findOddValues = (arr) => {
    let newArr = [];
    const helper = (arr) => {
        if(arr.length === 0) return;
        if(arr[0] % 2 !== 0){
            newArr.push(arr[0])
        }
        helper(arr.slice(1))
    }
    helper(arr)
    return newArr;
}
// console.log(findOddValues([1,2,3,4,5,6,7,8,9,10]))   // [1,3,5,7,9]
// console.log(findOddValues([]))   // []
// console.log(findOddValues([2,4,6]))  // []
console.log(findOddValues([1,3,5,7]))    // [1,3,5,7]
