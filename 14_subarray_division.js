// Problem Description
/*
Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.
Lily decides to share a contiguous segment of the bar selected such that:
1. The length of the segment matches Ron's birth month, and,
2. The sum of the integers on the squares is equal to his birth day.
Determine how many ways she can divide the chocolate.
*/
// ----------------------------------------------------------------


function birthday(s, d, m) {
    // Write your code here
    let array = s;
    let day = d;
    let month = m;
    let n = m;
    let result = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = n; j <= array.length; j++) {
            if ((j - i) === month) {
                let temp = array.slice(i, j);
                let sum = temp.reduce((acc, currVal) => acc + currVal);
                if (sum === day) {
                    result++;
                }
                sum = 0;
                n++;
            }
        }
    }
    return result;
}