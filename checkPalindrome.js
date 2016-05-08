function checkPalindrome(str) {
    var check = str.split("").reverse().join(""); 
    if (check == str) {
        return true
    } else {
        return false
    }
}