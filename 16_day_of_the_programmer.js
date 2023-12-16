// Problem Description
// Complete the dayOfProgrammer function in the editor below. It should return a string representing the date of the 256th day of the year given.

function dayOfProgrammer(year) {
    // Write your code here
    let leapYear = "12.09.";
    let normalYear = "13.09.";
    let transisionYear = "26.09.";

    if (year === 1918) {
        return (transisionYear + year);
    }

    if ((year % 4 === 0) && (year % 100 != 0) || (year % 400 === 0)) {
        return (leapYear + year);
    } else {
        return (normalYear + year);
    }
}