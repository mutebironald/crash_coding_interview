/**
 * Given a smaller string s and a bigger string b, design an algorithm to find all permutations
of the shorter string within the longer one. Print the location of each permutation.
 */

// s: abbc
// b: cbabadcbbabbcbabaabccbabc
function stringPermutation(str){
    if (!str || typeof str !== "string"){
        return "Please enter a string";
    } else if (str.length === 1 ){
        return str
    }else if(str.length === 2){
        return [str, str[1] + str[0]]
    }
    
    let arr = [];
    for(let i = 0; i < str.length; i++){
        let char = str[i];
        if (str.indexOf(char) != i) continue;
        let remainingString = str.slice(0,i) + str.slice(i+1, str.length)
        for(let permutation of stringPermutation(remainingString)){
            let result = char + permutation;
            arr.push(result);
        }
    }
    return arr;
}

// let res = stringPermutation("abbc")
// console.log(res)

//Using the sliding window pattern 
function slidingCheckForPerm(str, str2){
    if(!str||!str2) return "Please provide both strings";
    let result = stringPermutation(str);
    let count = 0;
    let ar = []
    
    for(let i = 0; i < str2.length; i++){
        let string = '';
        for(let j = 0; j < str.length; j++){
            string += str2[i+j]
        }
        for(let val of result){
            if(val === string){
                ar.push(val)
                count++;
            }
        }
    }
    return ar;
}

// let rest = slidingCheckForPerm("abbc","cbabadcbbabbcbabaabccbabc")
// console.log(rest)


//this method will first check if the letter under consideration(within second string) exists in the 
//first string
function iteratingCheckPermut(string, string2){
    if(!string||!string2) return "You must provide both strings";

    let result = stringPermutation(string);
    let count = 0;
    let ar = [];
    let characters = string.split('')
    characters = [...new Set(characters)]
    let position = []

    for(let i = 0; i < string2.length; i++){
        let letter = string2[i];
        let str = '';
        if(characters.includes(letter)){
            for(let j = 0; j < string.length; j++){
                str += string2[i+j]
            }
            for(let v of result){
                if(v == str){  
                    count++;
                    ar.push(v)
                    position.push(i);
                }
            }
        }
    }
    location = [... new Set(position)]
    return location;
}

let res = iteratingCheckPermut("abbc","cbabadcbbabbcbabaabccbabc")
console.log(res)
