// Problem Description
// Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.
// ----------------------------------------------------------------

function staircase(n) {

    for (let i = 1; i <= n; i++) {
        let result = " ".repeat(n - i) + "#".repeat(i);
        console.log(result);
    }

}