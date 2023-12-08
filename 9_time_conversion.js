// Problem Description
// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
// ----------------------------------------------------------------

function birthdayCakeCandles(candles) {

    let tallest = Math.max(...candles);
    let sum = 0;

    candles.forEach(item => {
        if (item === tallest) {
            sum++;
        }
    })

    return sum;

    //     let sorted = candles.sort();
    //     let result = 0;

    //     for(let i = sorted.length-1; i >= 0; i--){
    //         if(sorted[i] == sorted[sorted.length-1]){
    //             result++
    //         }
    //     }

    //     return result;
}
