// Problem Deccription
// Print the border of the given square matrix
// ----------------------------------------------------------------

const arr = [[4, 9, 6, 2], [11, 12, 16, 13], [23, 19, 18, 17], [31, 30, 33, 36]];

function borderElements(arr) {
    let elements = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i == 0) {
                elements.push(arr[i][j])
            } else if (i != 0 && j == arr.length - 1) {
                elements.push(arr[i][j])
            }
        }
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = arr.length - 2; j >= 0; j--) {
            if (i == arr.length - 1) {
                elements.push(arr[i][j])
            } else if (i != 0 && i != arr.length - 1 && j == 0) {
                elements.push(arr[i][j])
            }
        }
    }
    console.log(elements)
}

borderElements(arr)