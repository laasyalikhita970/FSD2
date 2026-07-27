"use strict";
let userName = "John Doe";
let userAge = 30;
let isUserActive = true;
console.log(`User Name: ${userName}`);
console.log(`User Age: ${userAge}`);
console.log(`Is User Active: ${isUserActive}`);
function userProfile(name, age, isActive) {
    console.log(`User Profile:`);
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Active: ${isActive}`);
}
userProfile(userName, userAge, isUserActive);
