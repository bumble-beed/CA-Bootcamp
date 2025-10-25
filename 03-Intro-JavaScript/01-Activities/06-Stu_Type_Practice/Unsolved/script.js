// Imagine this is part of a user profile system for a web app.

const userID = 64;
const userPIN = "656302";
const isVerified = false;
const accountStatus = null;
let userScore = 64.55;
let greetingMessage = "Howdy!";
let lastLogin;

// 🧠 Insert comments to explain what each console.log() below will log to the console
console.log(typeof userID); // number 
console.log(typeof userPIN); // string as its in quotes
console.log(typeof isVerified); // boolean
console.log(typeof accountStatus); // object
console.log(typeof userScore); // number
console.log(typeof greetingMessage); // string
console.log(typeof lastLogin); // undefined

// ⏩ Variables can be reassigned to hold different types
userScore = "Hello!"; // string
greetingMessage = false; // boolean
lastLogin = 23; // boolean

// 🧠 Insert comments again to predict the output after reassignment
console.log(typeof userScore);
console.log(typeof greetingMessage);
console.log(typeof lastLogin); 
