/**
 * Write a recursive function called someRecursive which accepts an array and a callback.
 * The function returns true if a single value
 *  in the array returns true when passed to the callback. Otherwise it returns false.
 */
//iterative based approach
function someRecursiveIterative(arr, callback){
    if(!arr || !callback) return;
    for(let i =0; i < arr.length; i++){
        if(callback(arr[i])){
            // console.log(true)
            return true
        }
    }
    // console.log(false)
    return false;
}

const isOdd = (val) =>  val % 2 !== 0

//you can use either this approach or the one below
//either
// function someRecursive(arr, callback){
//     return arr.length === 0 ? false : callback(arr[0]) || someRecursive(arr.slice(1), callback)
// }

//or
function someRecursive(arr,callback){
    if(!arr || !callback)return;
    if(arr.length === 0) return false;
    if(callback(arr[0])){
        return true;
    }
    return someRecursive(arr.slice(1), callback)
}

// console.log(someRecursive([1,2,3,4], isOdd)) // true
// console.log(someRecursive([4,6,8,9], isOdd)) // true
// console.log(someRecursive([4,6,8], isOdd)) // false


