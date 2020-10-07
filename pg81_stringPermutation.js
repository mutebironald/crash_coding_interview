/**
 * Given a smaller string s and a bigger string b, design an algorithm to find all permutations
of the shorter string within the longer one. Print the location of each permutation.
 */

// s: abbc
// b: cbabadcbbabbcbabaabccbabc
function stringPermutation(str){
    if (!str || typeof str !== "string"){
        console.log("Please enter a string")
        return "Please enter a string";
    } else if (str.length < 2 ){
        return str
    }
    
    let arr = [];
    for(let i = 0; i < str.length; i++){
        let char = str[i];
        //only use this for second looping appoach
        // if (str.indexOf(char) != i)continue
        let remainingString = str.slice(0,i) + str.slice(i+1, str.length)

        for(let j = 0; j < remainingString.length; j++){
           let result = char + stringPermutation(remainingString)[j]
           arr.push(result)
        }

        // SECOND LOOPING APPROACH for the remaining string
        // for(let permutation of stringPermutation(remainingString)){
        //     arr.push(char + permutation)
        // }
    }
    // console.log(arr)
    return arr
}

let res = stringPermutation("abbc")
console.log(res)

