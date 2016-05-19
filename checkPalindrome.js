function checkPalindrome(str) {
    var check = str.split("").reverse().join(""); 
    if (check == str) {
        return true
    } else {
        return false
    }
}

checkPalindrome("racecar"); //____ Returns true because "racecar" in reverse is "racecar"
