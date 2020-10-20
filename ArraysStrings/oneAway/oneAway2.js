const oneAway = function(string1, string2){
    let checkOneMissing = function(first, second){
        if(first.length !== second.length - 1){
            return false
        }else{
            let mulligan = false;
            let fP = 0;
            let sP = 0;
            while(fP < first.length){
                if(first[fP] !== second[sP]){
                    if(mulligan){
                        return false;
                    }else{
                        mulligan = true;
                        sP++; //increment second length
                    }
                }else{
                    fP++;
                    sP++;
                }
            }
            return true;
        }
    }

    const checkOneDiff = function(first, second){
        if(first.length !== second.length){
            return false;
        }else{
            let mulligan = false;
            let fP = 0;
            let sP = 0;
            while(fP < first.length){
                if(first[fP] !== second[sP]){
                    if(mulligan){
                        return false; //more than one mismatch
                    }else{
                        mulligan = true; //use up mulligan
                    }
                }
                fP++;
                sP++;
            }
            return true
        }
    }
    return checkOneMissing(string1, string2) || checkOneMissing(string2, string1) || checkOneDiff(string1, string2);
}


// Test
console.log(oneAway('pale', 'ple'), true);
console.log(oneAway('pales', 'pale'), true);
console.log(oneAway('pale', 'bale'), true);
console.log(oneAway('pale', 'bake'), false);
