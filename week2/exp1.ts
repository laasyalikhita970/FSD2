//Functions

function greetUser(name:string):string{
    return `Hello, ${name}! Welcome to the TypeScript world.`;
}

function getlocation(city:string="Hyderabad", country:string="India"):string{
    return `You are in ${city}, ${country}.`;
}   

function sendAlert(phNo:number,message?:string):void{
    if(message){
        console.log(`Sending alert to ${phNo}: ${message}`);
    } else {
        console.log(`Sending alert to ${phNo}: No message provided.`);
    }
}

