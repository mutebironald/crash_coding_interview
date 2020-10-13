/**
 * Write a recursive function countDown to countdown
 *  from the given number. Once done, print “All Done!” text.
 */
function countDown(num){
    if(num < 0) return;
    if(num === 0){
        return console.log("All Done!");
    }
    console.log(num)
    countDown(num - 1)
}
countDown(5)
