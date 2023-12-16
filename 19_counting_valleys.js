// Problem Description
// An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly steps steps, for every step it was noted if it was an uphill, U, or a downhill, D step. Hikes always start and end at sea level, and each step up or down represents a 1 unit change in altitude.
// ----------------------------------------------------------------

function countingValleys(steps, path) {
    // Write your code here

    let seaLevel = 0;
    let position = 0;
    let valley = 0;
    let record = [...path];


    for (let i = 0; i < steps - 1; i++) {
        if (record[i] === "U") {
            position++;
        } else if ((record[i] === "D") && (position !== seaLevel)) {
            position--;
        } else if ((record[i] === "D") && (position === seaLevel)) {
            position--;
            valley++;
        }
    }
    return valley;
}