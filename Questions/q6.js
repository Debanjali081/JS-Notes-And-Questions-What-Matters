// Q-6 Write a function that reverse a number 

function reversedNum(num) {
    return Number(num.toString().split("").reverse().join(""))
}
console.log(reversedNum(4002));

// 2nd Trick 

function reversedNum2(num) {
    var rev = 0;
    while (num > 0) {
        var rem = num % 10;
        rev = rev * 10 + rem;
        num = Math.floor(num / 10)

    }
    return rev
}

console.log(reversedNum2(1234));



