// Q-2 Write a javascript function that checks wheather a passed string is palindrome or not 

function isPalindrome(str) {
    let revStr = str.split("").reverse().join("")
    if (str == revStr) {
        console.log(`${str} is a palindrome string`);

    }
    else {
        console.log(`${str} is not a palindrome string`);

    }
}

isPalindrome("pop")

// 2nd Format 

function isPalindrome2(str) {
    let revStr = str.split("").reverse().join("")
    return str == revStr
}
console.log(isPalindrome2("pop"));
