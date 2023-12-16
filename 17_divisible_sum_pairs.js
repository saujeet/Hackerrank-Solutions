// Problem Description
// Given an array of integers and a positive integer k, determine the number of (i, j) pairs where i < j and ar[i] + ar[j] is divisible by k.

function divisibleSumPairs(n, k, ar) {
    // Write your code here
    let length = n;
    let pair = 0;

    for (let i = 0; i < ar.length; i++) {
        for (let j = i + 1; j < ar.length; j++) {
            let sum = ar[i] + ar[j];
            if ((i < j) && (sum % k === 0)) {
                pair++;
            }
            sum = 0;
        }
    }
    return pair;
}
