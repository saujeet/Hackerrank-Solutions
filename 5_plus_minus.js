// Problem description
// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with 6 places after the decimal.
// ----------------------------------------------------------------

function plusMinus(arr) {
    let positiveNumbers = 0;
    let negativeNumbers = 0;
    let numberOfZero = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positiveNumbers++;
        } else if (arr[i] < 0) {
            negativeNumbers++;
        } else {
            numberOfZero++;
        }
    }
    let positiveRatio = (positiveNumbers / arr.length).toFixed(6);
    let negativeRatio = (negativeNumbers / arr.length).toFixed(6);
    let zeroRatio = (numberOfZero / arr.length).toFixed(6);

    console.log(positiveRatio);
    console.log(negativeRatio);
    console.log(zeroRatio);
}

