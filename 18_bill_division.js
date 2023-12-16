// Problem Description
// Complete the bonAppetit function in the editor below. It should print Bon Appetit if the bill is fairly split. Otherwise, it should print the integer amount of money that Brian owes Anna.
// ----------------------------------------------------------------

function bonAppetit(bill, k, b) {
    // Write your code here
    let diff = ((bill.reduce((acc, currVal) => acc + currVal)) - bill[k]) / 2;
    let charged = b;

    if (diff !== charged) {
        charged -= diff;
        console.log(charged);
    } else {
        console.log("Bon Appetit");
    }
}