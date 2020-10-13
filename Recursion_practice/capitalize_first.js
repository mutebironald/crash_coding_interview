// function capitalizeFirst(arr){
//     if(arr.length < 2) {
//         return [arr[0][0].toUpperCase() + arr[0].slice(1, arr[0].length)];
//     }
//     if(!arr) return null;
//     let res = capitalizeFirst(arr.slice(0,-1))
//     const string = arr.slice(arr.length - 1)[0][0].toUpperCase() + arr.slice(arr.length - 1)[0].substr(1);
//     res.push(string)
//     return res;
// }

//iterative
function capitalizeIterativeFirst(arr){
    if(arr.length < 2) {
        return [arr[0][0].toUpperCase() + arr[0].slice(1, arr[0].length)];
    }
    if(!arr) return null;
    arr = arr.map(function(key){
        return key.substr(0,1).toUpperCase() + key.substr(1)
    })
    return arr;
}


// let result = capitalizeIterativeFirst(["car", "taco", "banana"]);
// console.log(result)

function capitalizeFirst(arr) {
    if(!arr.length) return;
    if(arr.length < 2) return [arr[0][0].toUpperCase() + arr[0].substr(1)]
    let value = [arr[0][0].toUpperCase()+ arr[0].substr(1)]
    let val = capitalizeFirst(arr.slice(1))
    if(Array.isArray(val)){
        value.concat(val)
    }else{
        value.push(val)
    }
    return value;
}
let result = capitalizeFirst(["car", "taco", "banana"]);
console.log(result)
