"use strict";
// ===============================
// 1. Generic Variable
// ===============================
// Generic variable can store any type while maintaining type safety
let value1 = 100;
let value2 = "Hello";
// Generic variable using type parameter
let genericValue;
// Assigning generic function to variable
genericValue = function (value) {
    return value;
};
console.log(genericValue(500)); // Output: 500
console.log(genericValue("FSD")); // Output: FSD
// ===============================
// 2. Generic Function
// ===============================
// Normal function works only with one datatype
function addNumbers(a, b) {
    return a + b;
}
console.log(addNumbers(10, 20));
// Generic function works with multiple datatypes
function displayData(data) {
    return data;
}
// Calling generic function with different types
console.log(displayData(100));
console.log(displayData("TypeScript"));
console.log(displayData(true));
// Generic function with arrays
function getFirstElement(arr) {
    return arr[0];
}
console.log(getFirstElement([10, 20, 30]));
console.log(getFirstElement(["A", "B", "C"]));
// ===============================
// 3. Generic Constraints
// ===============================
// Constraint restricts generic type
// Here T must contain length property
function printLength(item) {
    return item.length;
}
console.log(printLength("Hello"));
// String has length property
console.log(printLength([1, 2, 3, 4]));
function displayUser(user) {
    console.log(user.name);
    console.log(user.age);
}
displayUser({
    name: "Laasya",
    age: 19,
    city: "Bhimavaram"
});
