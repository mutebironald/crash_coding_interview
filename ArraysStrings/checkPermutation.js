/**
 * Given two strings, write a method to decide if one is a permutation of the
other.
 */
function permutateString(str){
    if(str.length < 2) return str;
    let arr = []
    for(let k = 0; k < str.length; k++){
        let char = str[k]
        if(str.indexOf(char) !== k) continue;
        let remainingString = str.slice(0, k) + str.slice(k+1, str.length)
        for(let permutation of permutateString(remainingString)){
            let res = char + permutation
            arr.push(res)
        }
    }
    return arr;
}

function checkPermutation(str1, str2){
    if(!str1 || !str2) return "All strings must be provided";
    let result1 = permutateString(str1)
    console.log(" result1", result1)
    for(let val of result1){
        if(val === str2){
            return true;
        }
    }
    return false;
}

console.log(checkPermutation( "onba", "bona"))


