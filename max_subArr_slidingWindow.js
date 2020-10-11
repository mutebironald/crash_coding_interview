// return maximum of a sub array 
function maxSubArr(arr, num){
    if(num > arr.length){return;}
    let subSum = 0;
    let maxSum = 0;
    for(let i = 0; i < num; i++){
        maxSum += arr[i];
    }
    subSum = maxSum

    for(let k = num; k < arr.length; k++){
        subSum = subSum + arr[k] - arr[k - num]
        maxSum = Math.max(maxSum, subSum)
    }
    console.log(" max sum", maxSum)
    return maxSum;
    
}
maxSubArr([12,23,4,1,2,100], 2)

//without optimization
function nonOptmalMaxsubArr(arr, num){
    let temp;
    let sum = -Infinity
    for(let i = 0; i < arr.length; i++){
        temp = 0;
        for(let k = 0; k < num; k++){
            temp += arr[i+ k]
        }
        if(temp > sum){
            sum = temp
        }
    }
    console.log(" the max sum subArray ", sum)
    return sum;
}

nonOptmalMaxsubArr([12,23,4,1,2,100], 2)

