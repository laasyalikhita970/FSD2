let movieName:string="Stranger Things";

let releaseYear:number=2016;

let isPopular:boolean=true;

function displayMovieDetails(name:string,year:number,isPopular:boolean):string{
    return `Movie Name: ${name}, Release Year: ${year}, Is Popular: ${isPopular}`;
}

let leadActor:string[]=["Millie Bobby Brown", "Finn Wolfhard", "David Harbour"];

const movieDetails:string=displayMovieDetails(movieName,releaseYear,isPopular);

console.log(movieDetails);
console.log("Lead Actors:", leadActor.join(", "));