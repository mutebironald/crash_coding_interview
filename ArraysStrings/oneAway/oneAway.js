/**
 * There are three types of edits that can be performed on strings: insert a character,
remove a character, or replace a character. Given two strings, write a function to check if they are
one edit (or zero edits) away.
*/

//Approach: - build up the two string hashmaps,
// count number of differing occurencies
//if greater than 1 return false, less or equal to one return true
function buildDict(str){
    let dict = {};
    for(let i = 0; i < str.length; i++){
        let val = str[i];
        if(dict[val]){
            dict[val]++;
        }else{
            dict[val] = 1;
        }
    }
    return dict;
}

function oneAway(str1, str2){
    let dict1 = buildDict(str1);
    let dict2 = buildDict(str2);
    let count = 0;
    let dict1Length = Object.keys(dict1).length;
    let dict2Length = Object.keys(dict2).length;
    if(dict1Length > dict2Length){
        Object.keys(dict1).map(function(key, idx){
            if(dict2[key] !== dict1[key] || !dict2[key]){
                count++;
            }
        })
    }else{
        Object.keys(dict2).map(function(key, idx){
            if(dict1[key] !== dict2[key] || !dict1[key]){
                count++;
            }
        })
    }
    return count < 2
    
}


console.log(oneAway('pale', 'ple'), true);
console.log(oneAway('pales', 'pale'), true);
console.log(oneAway('pale', 'bale'), true);
console.log(oneAway('pale', 'bake'), false);
