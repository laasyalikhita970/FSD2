"use strict";
let movieName = "Stranger Things";
let releaseYear = 2016;
let isPopular = true;
function displayMovieDetails(name, year, isPopular) {
    return `Movie Name: ${name}, Release Year: ${year}, Is Popular: ${isPopular}`;
}
let leadActor = ["Millie Bobby Brown", "Finn Wolfhard", "David Harbour"];
const movieDetails = displayMovieDetails(movieName, releaseYear, isPopular);
console.log(movieDetails);
console.log("Lead Actors:", leadActor.join(", "));
