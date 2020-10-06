//Print all positive integer solutions to the equation a3 + b3 = c3 + d3 where a, b, c, and d are integers between 1 and 1000.

// function equationPrinter(start, end){
//     for(let a =start; a < end; a++){
//         for(let b = start; b < end; b++){
//             for(let c = start; c < end; c++){
//                 for(let d = start; d < end; d++){
//                     console.log(" find ", a * a * a + b * b * b == c * c * c + d * d * d)
//                     if(a * a * a + b * b * b == c * c * c + d * d * d){
//                         console.log("values",a , b, c,d)
//                         return [a , b, c,d]
//                     }
//                 }
//             }
//         }
//     }
// }

// equationPrinter(2, 1000)

//APPROACH 2
/**
 * This approach optimizes by breaking down the nested loops into two. putting the reults together with their respective values in a dictionary/hash table
 *  then comparing the results of 
 * the two loops . if equal , equation is fulfiled and respective values are printed
 */

let n = 1000;
let cd = [];
let dict1 = {};
for(let c= 1; c < n; c++){
    for( let d = 1; d < n; d++){
        let result = c * c * c + d * d * d
        cd.push(result);
        dict1[result] = [c, d]
    }
}
 let ab = [];
 let dict2 = {};
 for(let a = 1; a < n; a++){
     for(let b = 1; b < n; b++){
        let value = a * a * a + b * b * b;
        dict2[value] = [a , b]
     }
}

Object.keys(dict1).map(function(key, index){
    Object.keys(dict2).map(function(key2, index2){
        if(key === key2){
            console.log([...dict1[key],...dict2[key2]])
        }
    })
})
