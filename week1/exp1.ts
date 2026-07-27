let userName:string = "John Doe";

let userAge:number = 30;

let isUserActive:boolean = true;

console.log(`User Name: ${userName}`);
console.log(`User Age: ${userAge}`);
console.log(`Is User Active: ${isUserActive}`);

function userProfile(name:string,age:number,isActive:boolean):void {
    console.log(`User Profile:`);
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Active: ${isActive}`);
}

userProfile(userName,userAge,isUserActive);