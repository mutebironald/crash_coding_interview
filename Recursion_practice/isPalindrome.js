/**
 * 
 * Write a recursive function called isPalindrome which returns true if the string passed to it is a
 *  palindrome (reads the same forward and backward). Otherwise it returns false.
 */
function reverse(str){
    if(!str) return;
    if(str.length < 2) return str;
    return reverse(str.slice(1)) + str[0]
}

//while using a reverse helper function
function isPalindromeReverse(str){
    if(!str)return;
    if(str.length < 2) return true;
    let val = reverse(str)
    return val === str
}

//pure recursion
function isPalindrome(str){
    if(!str) return;
    if(str.length < 2)return true;
    if(str[0] === str[str.length - 1]){
        console.log(str.slice(1, str.length - 1)," the st++++", str.substr(1, str.length - 1))
        return isPalindrome(str.slice(1, str.length - 1))
    }else{
        return false;
    }
}
let v = isPalindrome("nan")
console.log( v)

// console.log(isPalindrome('awesome')) // false
// isPalindrome('foobar') // false
// console.log(isPalindrome('tacocat')) // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false
