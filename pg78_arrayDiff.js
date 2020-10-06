// Given an array of distinct integer values, count the number of pairs of integers that
// have difference k. For example, given the array { 1, 7, 5, 9, 2, 12, 3} and the difference
// k = 2,there are four pairs with difference2: (1, 3), (3, 5), (5, 7), (7, 9).

// loop through the array starting at the zero index
    //then loop through starting from index + 1
        //get the diff, 
        //if equal to k, 
            //store the two numbers
        //else, move on to the next index
function arrayDiff(arr, diff){
    let finArr = []
    for(let i = 0; i < arr.length; i++){
        for(let k = 0; k < arr.length; k++){
            let difference = Math.abs(arr[i] - arr[k])
            if(difference == diff){
                finArr.push([arr[i], arr[k]])
            }
        }
    }
    // console.log(finArr);
    return finArr;
}

arrayDiff([1, 7, 5, 9, 2, 12, 3], 2)

//using a binary search to reduce complexity to O(N log N)

function binarySearch(arr , val){
    if(!arr || !val) return false;
    let mid = Math.floor(arr.length / 2)
    if(arr[mid] === val){
        console.log(" the value exists")
        return true;
    }else if(arr[mid] > val && arr.length > 1){
        return binarySearch(arr.slice(0, mid), val)
    }else if(arr[mid] < val && arr.length > 1){
        return binarySearch(arr.slice(mid, arr.length), val)
    }
    else{
        return false;
    }
}
// binarySearch([1,2,3,5,7,9,12], 11)

function sorter(arr){
    return arr.sort(function(a,b){
        return a -b
    })
}

function whileDiff(arr, diff){
    let count = 0;
    let times = 0;
    let value;
    let finArr = []
    arr = sorter(arr);
    for(let i = 0; i < arr.length; i++){
        times++;
        value = arr[i] + diff
        console.log(arr[i],"array", value, "the bloody array ", arr)
        if(binarySearch(arr, (arr[i] + diff))){
            console.log(arr,"here", arr[i])
            finArr.push([arr[i], value ])
            count++;
        }
    }
    console.log(times,"count", count, "fin", finArr);
    return count;
}

// whileDiff([1,2,3,5,7,9,12], 2)

//with a hash table wc reduces complexity to O(N)
// helps with quickly finding items in an unsorted array
let ar  = [1, 7, 5, 9, 2, 12, 3, 1]

function createHashTable(arr){
    let dict = {}
    console.log("array", arr)
    for(let i = 0; i < arr.length; i++){
        if(dict[arr[i]] != undefined){
            console.log(" present")
            dict[arr[i]]++
        }else{
            dict[arr[i]] = 1;
        }
    }
    console.log(dict, "dict")
    return dict;
}

createHashTable(ar)

function lookUpDiff(arr, diff){
    let empArr = []
    let dict = createHashTable(arr);
    for(let i =0; i < arr.length; i++){
        let val = arr[i] + diff
        console.log( " herew", dict[val])
        if(dict[val]){
            empArr.push([arr[i], val])
        }
    }
    console.log(" empArr ", empArr)
    return empArr;
}

lookUpDiff([1,2,3,5,7,9,12], 2)
