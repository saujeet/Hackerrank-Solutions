// Problem Description
// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.
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

