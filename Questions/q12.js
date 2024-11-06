//  In an array of numbers and strings , only add those numbers which are not strings.

let arr = [1, 2, 'puja', 4, 'gita', 5, 'broli', 3]
let sum = 0

arr.forEach((elem) => {
    if (typeof elem === 'number') return sum = sum + elem
})

console.log(sum);
