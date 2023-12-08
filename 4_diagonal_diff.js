// Problem Description
// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
// ----------------------------------------------------------------


function diagonalDifference(arr) {
    let leftToRight = 0;
    let rightToLeft = 0;


    for (let i = 0; i < arr.length; i++) {
        leftToRight += arr[i][i];
    }
    console.log(leftToRight);

    let j = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        // for (let j = 0; j < arr.length; j++) {
        rightToLeft += arr[j][i];
        j++;
        // }
    }
    console.log(rightToLeft);

    let difference = leftToRight - rightToLeft;
    if (difference < 0) {
        difference = difference * (-1)
    }

    console.log(difference);
    return difference;
}

const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
]

diagonalDifference(arr);
