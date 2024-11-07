// Q-16 Write a javascript function to get the first element of an array . Passing a parameter 'n' will return the first 'n' elements.

function nElements(n) {
    let arr = [1, 2, 3, 'debu', 'gugu', 5]
    if (n === null) {
        return arr[0]
    }
    return arr.slice(0, n)

}

console.log(nElements(4));

// 2nd method 

function retrieve(n) {
    let arr = [1, 2, 3, 4, 5, 6]
    if (n <= arr.length) {
        for (let i = 0; i < n; i++) {
            console.log(arr[i]);

        }
    }
    else {
        console.log(`${n} array  size exceed`);

    }
}

retrieve(5)

