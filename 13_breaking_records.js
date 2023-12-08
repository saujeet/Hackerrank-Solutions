// Problem Description
// Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.
// ----------------------------------------------------------------

function breakingRecords(scores) {
    // Write your code here
    let startingScore = scores[0];
    let highestScore = scores[0];
    let lowestScore = scores[0];
    let result = [0, 0];

    for (let i = 1; i < scores.length; i++) {
        if ((scores[i] > startingScore) && (scores[i] > highestScore)) {
            highestScore = scores[i];
            result[0]++;
        } else if ((scores[i] < startingScore) && (scores[i] < lowestScore)) {
            lowestScore = scores[i];
            result[1]++;
        }
    }
    return result;
}
