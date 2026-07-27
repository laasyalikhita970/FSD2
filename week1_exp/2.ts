// any type
let data: any = 100;

console.log("Any value:", data);

data = "Hello TypeScript";

console.log("Changed any value:", data);


// unknown type
let value: unknown = "TypeScript";

if (typeof value === "string") {
    console.log("Unknown value is string:", value.toUpperCase());
}

value = 50;

if (typeof value === "number") {
    console.log("Unknown value is number:", value + 10);
}


// void type
function displayMessage(): void {
    console.log("This function returns nothing");
}

displayMessage();