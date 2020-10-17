/**
 * Implement an algorithm to determine if a string has all unique characters. What if you
cannot use additional data structures?
*/

function isUnique(string){
    let str = string.split('')
    let unique = true;
    for(let i = 0; i < str.length; i++){
        for(j = str.length - 1;  j >= 0 && j !== i; j--){
            if(str[i] === str[j]){
                unique = false;
                console.log(" str", str[i])
            }
        }
    }
    return unique;
}

console.log(isUnique("mutebi Ronald Roninho"))
