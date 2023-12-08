// Problem Description
// You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).
// ----------------------------------------------------------------

function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    let firstDistance = x1;
    let secondDistance = x2;

    if (v2 >= v1) {
        return "NO";
    }

    while (firstDistance !== secondDistance) {
        firstDistance += v1;
        secondDistance += v2;
        if (firstDistance > secondDistance) {
            break;
        }
    }

    if (firstDistance === secondDistance) {
        return "YES";
    } else {
        return "NO";
    }
}