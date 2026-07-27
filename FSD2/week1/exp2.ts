let flexibleValue:any = "Jane Doe";

flexibleValue = 25; // Reassigning to a number

flexibleValue = true; // Reassigning to a boolean

let mysteryValue: unknown = "Mystery Value";

if (typeof mysteryValue === "string") {
    console.log(`length of Mystery Value as a string: ${mysteryValue.length}`);
}

function logNotification(message:string):void{
    console.log('Message:', message);
}

logNotification("This is a notification message.");