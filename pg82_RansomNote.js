/**
 * A ransom note can be formed by cutting words out of a magazine to form a new
sentence. How would you figure out if a ransom note (represented as a string) can be formed
from a given magazine (string)?
*/

function canCreateNote(noteWords, magazineWords){
    if(!noteWords||!magazineWords) return "The note and magazine strings must be provided";

    let noteArr = noteWords.split('');
    let noteDict = {}
    for(let a of noteArr){
        if(!noteDict[a]){
            noteDict[a] = 1;
        }else{
            noteDict[a]++;
        }
    }

    let magazineArray = magazineWords.split('');
    let magazineDict = {}
    for(let item of magazineArray){
        if(!magazineDict[item]){
            magazineDict[item] = 1
        }else{
            magazineDict[item]++;
        }
    }
    let c1 = 0;
    let c2 = Object.keys(noteDict).length;
    Object.keys(magazineDict).map(function(key, value){
        if(key in noteDict){
            if(magazineDict[key] === noteDict[key]){
                c1++
            }
        }
    })
    return c1 === c2
}
let res = canCreateNote("a", "b")
console.log(res)
