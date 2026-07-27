// ===============================
// 1. Generic Variable
// ===============================

// Generic variable can store any type while maintaining type safety

let value1: number = 100;
let value2: string = "Hello";

// Generic variable using type parameter
let genericValue: <T>(value: T) => T;


// Assigning generic function to variable
genericValue = function<T>(value: T): T {
    return value;
};

console.log(genericValue<number>(500));   // Output: 500
console.log(genericValue<string>("FSD"));  // Output: FSD



// ===============================
// 2. Generic Function
// ===============================

// Normal function works only with one datatype
function addNumbers(a: number, b: number): number {
    return a + b;
}

console.log(addNumbers(10,20));


// Generic function works with multiple datatypes

function displayData<T>(data: T): T {
    return data;
}


// Calling generic function with different types

console.log(displayData<number>(100));

console.log(displayData<string>("TypeScript"));

console.log(displayData<boolean>(true));



// Generic function with arrays

function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}


console.log(getFirstElement<number>([10,20,30]));

console.log(getFirstElement<string>(["A","B","C"]));



// ===============================
// 3. Generic Constraints
// ===============================

// Constraint restricts generic type
// Here T must contain length property

function printLength<T extends {length:number}>(item:T):number {

    return item.length;

}


console.log(printLength("Hello")); 
// String has length property


console.log(printLength([1,2,3,4]));
// Array has length property



// Object example with constraint

interface User {
    name:string;
    age:number;
}


function displayUser<T extends User>(user:T):void {

    console.log(user.name);
    console.log(user.age);

}


displayUser({
    name:"Laasya",
    age:19,
    city:"Bhimavaram"
});
