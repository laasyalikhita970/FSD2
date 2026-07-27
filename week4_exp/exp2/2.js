"use strict";
var MathOperations;
(function (MathOperations) {
    function add(a, b) {
        return a + b;
    }
    MathOperations.add = add;
    function subtract(a, b) {
        return a - b;
    }
    MathOperations.subtract = subtract;
})(MathOperations || (MathOperations = {}));
console.log(MathOperations.add(10, 20));
console.log(MathOperations.subtract(20, 10));
