  
/**
 * write a function called collectStrings which accepts an object
 * and returns an array of all the values in the object that have a typeof string.
*/
const obj = {
    stuff: "foo",
    data: {
      val: {
        thing: {
          info: "bar",
          moreInfo: {
            evenMoreInfo: {
              weMadeIt: "baz"
            }
          }
        }
      }
    }
};

function collectStrings(obj){
    if(!obj) return;
    let arr = [];
    Object.keys(obj).map(function(key){
        if(typeof obj[key] === "object" && !Array.isArray(obj[key])){
            arr = arr.concat(collectStrings(obj[key]))
            
        }else if(typeof obj[key] === "string" && !Array.isArray(obj[key])){
            console.log(obj[key])
            arr.push(obj[key])
        }
    })
    return arr;
}

let res = collectStrings(obj)
console.log(res)
