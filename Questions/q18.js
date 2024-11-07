// Q-18  Write a javascript program to find the most frequent item of an array .


function frequency(arr) {
    let freq = {};
    arr.forEach(element => {
        if (freq.hasOwnProperty(element)) freq[element]++
        else freq[element] = 1

    });
    return freq
}

let arr = [1, 3, 3, 4, 5, 5, 9]
console.log(frequency(arr));
