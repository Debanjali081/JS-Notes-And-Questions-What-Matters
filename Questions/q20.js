// Q-20 Write a javascript program to compute the union of two arrays .

function union(arr1, arr2) {
    return [...new Set(arr1.concat(arr2))].sort()  //used 'Set' to avoid repeated number
}
console.log(union([1, 2, 3, 4], [4, 6, 7, 5]));
