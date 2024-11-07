// Q-19 Write a javascript program to shuffle an array.

function shuffleArr(arr) {
    let totalShuffleArea = arr.length;
    while (totalShuffleArea > 0) {
        totalShuffleArea--;
        let indexToBeExchanged = Math.floor(Math.random() * totalShuffleArea)
        let temp = arr[totalShuffleArea]
        arr[totalShuffleArea] = arr[indexToBeExchanged]
        arr[indexToBeExchanged] = temp;
    }
    return arr
}

console.log(shuffleArr([1, 3, 6, 9, 7]));
