/**
 * Write a recursive function called reverse which accepts
 *  a string and returns a new string in reverse.
 */
//with an array
function reverse(str){
    let val = str.split('').reverse().join('');
    console.log("val ", val)
    return val;
}

//with recursion
function reversal(str){
    if(!str)return;
    if(str.length < 2) return str
    return  reversal(str.slice(1)) + str[0]
}
// let res = reversal("mutebi")
// console.log(res)


