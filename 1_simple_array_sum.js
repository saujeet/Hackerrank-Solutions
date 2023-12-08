// Problem Description
// Given an array of integers, find the sum of its elements.
// ----------------------------------------------------------------

function simpleArraySum(ar) {
    let sum = 0;
    for (let i = 0; i < ar.length; i++) {
        sum = sum + ar[i];
    }

    /*
    let sum = ar.reduce((acc, current) => acc + current, 0);
    */

    return sum;

}