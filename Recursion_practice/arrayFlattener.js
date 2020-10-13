/**
 * Write a recursive function called
 * flatten which accepts an array of arrays and returns a new array with all values flattened.
 */

 function flatten(arA){
    if(!arA || arA.length === 0) return;
    console.log(arA.length, "???/?/")
    let newVal = [];
    for(let i = 0; i < arA.length; i++){
        if(Array.isArray(arA[i])){
            let res = flatten(arA[i])
            // console.log(res," pppp")
            //Note: the concat doesnot mutate the array and is useful in situations where 
            //references are important(like in recursion which internally uses a stack unlike the push),
            //to use the push, one will have to create a helper function with a new array to push to outside the helper
            newVal = newVal.concat(res)
        }else{
            newVal.push(arA[i])
        }
    }
    console.log(newVal,"+++++ ")
    return newVal;
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]], [4], [{"p":0}], [-1]]) // [1,2,3]

