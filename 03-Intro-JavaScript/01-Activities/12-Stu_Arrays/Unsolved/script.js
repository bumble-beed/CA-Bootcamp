// Movies List // Storing multiple movie names in an array
const movieName = ["The Shining", "Event Horizon", "Hell House"];

// LOGGING THE ARRAY OF MOVIES TO THE CONSOLE
console.log(favoriteMovies);

// Access via index
console.log(favoriteMovies[0]); // "Event Horizon
console.log(favoriteMovies[1]); // "The Exorcist"
console.log(favoriteMovies[2]); // "A Nightmare on Elm Street"
console.log(favoriteMovies[3]); // "The Shining"
console.log(favoriteMovies[4]); // "Hell House"

// Add new movie to the list
favoriteMovies.push("Insidious");

console.log(favoriteMovies[5]); // "Insidious"

// Replace a movie in the list
favoriteMovies[4] = "The Conjuring";

console.log(`My fifth favorite movie is ${favoriteMovies[4]}.`);