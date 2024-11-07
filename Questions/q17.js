// Q-17 Write a javascript function to get the last element of an array . Passing a parameter 'n' will return the last 'n' elements of the array.

function retrieveLast(n) {
    let arr = [1, 2, 3, 4, 5, 6, 7]
    if (n == null) {
        return arr[length - 1]
    }
    return arr.slice(-n)
}
console.log(retrieveLast(3));


// 2nd Method 

function retrieveLast2(n) {
    let arr = [1, 2, 3, 4, 5, 6, 7]
    if (n <= arr.length) {
        for (let i = 0; i < n; i++) {
            console.log(arr[arr.length - 1 - i]);

        }
    }
}

console.log(retrieveLast2(5));
