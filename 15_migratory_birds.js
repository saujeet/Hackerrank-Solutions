// Problem Describtion
// Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.
// ----------------------------------------------------------------

function migratoryBirds(arr) {
    // Write your code here
    let type = [0, 0, 0, 0, 0];
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            type[0]++;
        }
        else if (arr[i] === 2) {
            type[1]++;
        }
        else if (arr[i] === 3) {
            type[2]++;
        }
        else if (arr[i] === 4) {
            type[3]++;
        }
        else if (arr[i] === 5) {
            type[4]++;
        }
    }

    let maxType = Math.max(...type);

    for (let i = 0; i < type.length; i++) {
        if (type[i] === maxType) {
            result.push(i);
        }
    }
    return (result[0] + 1);
}