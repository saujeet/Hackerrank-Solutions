//
// An integer d is a divisor of an integer n if the remainder of n % d = 0. Given an integer, for each digit that makes up the integer determine whether it is a divisor. Count the number of divisors occurring within the integer.
// ----------------------------------------------------------------

function findDigits(n) {
    // Write your code here
    let converted = n.toString();
    let arr = [...converted];
    let divisors = 0;

    for (let i = 0; i < arr.length; i++) {
        if (n % arr[i] == 0) {
            divisors++
        }
    }
    return divisors;
}