// Q-10 Write a javascript function to get the number of occurences of each letter in  specified string

function occurnceStr(str) {
    let occurences = {};

    str.split("").forEach(elem => {
        if (!occurences.hasOwnProperty(elem)) {
            occurences[elem] = 1;
        } else {
            occurences[elem]++;
        }
    });
    
    return occurences;
}
console.log(occurnceStr("debaa"));

