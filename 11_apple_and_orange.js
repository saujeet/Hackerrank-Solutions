// Problem Description
// Sam's house has an apple tree and an orange tree that yield an abundance of fruit. Using the information given below, determine the number of apples and oranges that land on Sam's house.
// ----------------------------------------------------------------

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let appleReached = 0;
    let orangeReached = 0;

    let appleArray = apples.map(n => n += a);

    appleArray.map((n) => {
        if (n >= s && n <= t) {
            appleReached++;
        }
    })

    let orrangeArray = oranges.map(n => n += b);

    orrangeArray.map((n) => {
        if (n <= t && n >= s) {
            orangeReached++;
        }
    })


    console.log(appleReached);
    console.log(orangeReached);
}
