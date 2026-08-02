"use strict";
function missingNumber(a) {
    let n = a.length + 1;
    let total = (n * (n + 1)) / 2;
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i];
    }
    let x = total - sum;
    console.log("Missing Number:", x);
}
let a = [1, 2, 3, 4, 5, 7];
missingNumber(a);
