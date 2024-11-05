// Q-5 Duplicate an array elements within the same array.

function duplicate(arr) {
    let arr2 = [...arr]
    arr = [...arr, ...arr2]
    console.log(arr);

}

duplicate([1, 2, 3])

// 2nd method 

function duplicate2(arr) {
    return arr.concat(arr)
}

console.log(duplicate2([1, 2, 3, 4]));
