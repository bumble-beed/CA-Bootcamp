// 💻 Create an array of at least 5 items (customize this list)

;let myFavoriteMovies = ["Inception", "The Matrix", "Interstellar", "The Dark Knight", "Pulp Fiction"]; 

// Log the array length
console.log(myFavoriteMovies.length); 

// Use a classic for loop
for(let i = 0; i < myFavoriteMovies.length; i++) {
    console.log(myFavoriteMovies[i])
}

// Include item number in the loop
for(let i = 0; i < myFavoriteMovies.length; i++) {
    console.log(`'${myFavoriteMovies[i]}' is item number ${i + 1}`);
}
// Use a for...of loop (no index required
›