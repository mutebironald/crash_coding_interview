/**
 * Write a method to replace all spaces in a string with '%20'. You may assume that the string
has sufficient space at the end to hold the additional characters, and that you are given the "true"
length of the string. (Note: If implementing in Java, please use a character array so that you can
perform this operation in place.)
*/
//method 1 though it doesnt use a supplied length
function urlifyWithoutLen(str){
    let strArr = str.trim().split('');
    for(let v in strArr){
        if(strArr[v] === " "){
            strArr[v] = "%20";
        }
    }
    return strArr.join("")
}

//method 2
function urlify(str, len){
    let s = "";
    let totalSpaces = str.length - len;
    let frontSpaces = 0;
    let flag = false;
    for(let i = 0; i < str.length; i++){
        if(flag === false){
            if(str[i] === " ") frontSpaces++;
            else flag = true;
        }
        if(flag === true && i < str.length - (totalSpaces - frontSpaces) ){
            if(str[i] === " ") s+= "%20";
            else s+=str[i];
        }
    }
    return s;
}
console.log(urlify('Mr John Smith    ', 13))



// function findLastCharacter(strArr){
//     for(let i = strArr.length - 1; i >= 0; i--){
//         if(strArr[i] !== " "){
//             return i;
//         }
//     }
//     return -1;
// }

// function replaceSpaces(strArr, trueLength){
//     let spaceCount = 0;
//     let index = 0;
//     // let i = 0;
//     for(let i = 0; i < trueLength; i++){
//         if(strArr[i] == " "){
//             spaceCount++;
//         }
//     }
//     index = trueLength + spaceCount * 2;
//     if(trueLength < strArr.length) strArr[trueLength] = "\0";
//     for(let i = trueLength - 1; i >=0; i--){
//         if(strArr[i] == " "){
//             strArr[index -1] = '0';
//             strArr[index - 2] = '2';
//             strArr[index - 3] = '%';
//             index = index - 3;
//         }else{
//             strArr[index - 1] = strArr[i];
//             index--;
//         }
//     }
//     console.log(spaceCount, " +++", index)
// }

// function urLify(str, len){
//     let strArr = str.split("");
//     let trueLength = findLastCharacter(strArr) + 1;
//     // console.log("PPPPP", trueLength)
//     let result = replaceSpaces(strArr, trueLength)
//     console.log(" ++++", result)
//     return result;
// }

// console.log(urLify(" new mormal ",12))
