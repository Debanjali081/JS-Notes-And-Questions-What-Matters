// loop an array and adds all numbers of it 

let arr = [1, 2, 3, 4, 5]
let sumarr = arr.reduce((a, b) => {
    return a + b
})

console.log(sumarr);


// 2nd method 
function sumArr(arr1) {
    let sum = 0
    for (let i = 0; i < arr1.length; i++) {
        sum = sum + arr1[i]
    }
    return sum
}
let arr1 = [1, 2, 3, 4, 5]
console.log(sumArr(arr1));


// 3rd method
let arr2 = [1, 2, 3, 4, 5]
let sum = 0
for (let i = 0; i < arr2.length; i++) {
    sum = sum + arr1[i]
}
console.log(sum);

// 4th method 

let arr3 = [1, 2, 3, 4, 5]
let sum2 = 0
arr3.forEach((num) => {
    sum2 = sum2 + num
})
console.log(sum2);
