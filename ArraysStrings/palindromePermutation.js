/**
 * Given a string, write a function to check if it is a permutation of a palindrome.
A palindrome is a word or phrase that is the same forwards and backwards. A permutation
is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
 */

 //Approach: 
 // -get all permutations
 //- check if all the permutations are palindromes.


//Method 1
function isPalindrome(str){
    if(!str) return "A string must be provided";
    if(str.length === 1) return true;
    if(str[0] === str[str.length -1]){
        return isPalindrome(str.slice(1, str.length -1))
    }else{
        return false;
    }
}

function permutation(str){
    if(!str) return "A string must be provided";
    if(str.length === 1) return str;
    if(str.length === 2) return [str, str[1] + str[0]];
    let val = [];
    for(let i = 0; i < str.length; i++){
        let char = str[i];
        let remainingString = str.slice(0, i) + str.slice(i + 1, str.length)
        for(let permute of permutation(remainingString)){
            val.push(char + permute)
        }
    }
    return val;
}

function palindromPermutation(str){
    if(!str) return "A string must be provided";
    str = str.toLowerCase().split(" ").join('');
    let resultArr = permutation(str);
    for(let v of resultArr){
        if(isPalindrome(v)){
            return true;
        }
    }
    return false;
}

// console.log(palindromPermutation("Tact coa"))

//Method 2
//need to understand this
function palinPerm(str){
    const sanitized = str.toLowerCase().split(" ").join('');

    //commented out is an alternate approach
    //TODO: why does oddCount matter;
    // const freq = new Map();
    // for(let i = 0; i < sanitized.length; i++){
    //     const char = sanitized.charAt(i);
    //     console.log(" char ", char)
    //     const prevFreq = freq.get(char) || 0;
    //     freq.set(char, prevFreq + 1);
    // }
    // let oddCount = 0;
    // for(let char of freq){
    //     if(char[1] % 2 !== 0){
    //         oddCount++;
    //     }
    // }
    const freq = {};
    for(let i =0; i < sanitized.length; i++){
        let val = sanitized[i]
        if(freq[val] === undefined){
            freq[val] = 1;
        }else{
            freq[val]++;
        }
    }
    let oddCount = 0;
    Object.keys(freq).map(function(key, idx){
        if(freq[key] % 2 !== 0){
            oddCount++;
        }
    })
    return oddCount < 2;
}

console.log(palinPerm('Tact Coa'), 'true');
console.log(palinPerm('Tact boa'), 'false');
