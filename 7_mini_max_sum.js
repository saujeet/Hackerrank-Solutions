// Problem Description
// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
// ----------------------------------------------------------------

function miniMaxSum(arr) {
    let sortedArray = arr.sort();
    let sum = 0;

    arr.map((n) => {
        sum += n;
    });

    let max = sum - sortedArray[0];
    let min = sum - sortedArray[sortedArray.length - 1];

    console.log(min, max);
}