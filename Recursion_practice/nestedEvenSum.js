var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
}

var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
};
  

function nestedEvenSum(obj){
    if(!obj) return;
    let sum = 0;
    Object.keys(obj).map(function(key){
        if(typeof obj[key] === "object"){
            let val = nestedEvenSum(obj[key])
            sum += val
        }else if(typeof obj[key] === "number"){
            if(obj[key] % 2 === 0){
                sum += obj[key]
            }
        }
    })
    console.log("sum ", sum)
    return sum;
}
nestedEvenSum(obj1)
