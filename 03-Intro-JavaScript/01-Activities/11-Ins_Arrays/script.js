// 🏀 Team Roster Example
// So far, we've been storing a single piece of data in each variable.
const playerName = "Avery";
const playerScore = 23;
const isCaptain = true;

// 🧱 To store multiple values together, we can use an array.
const teamRoster = ["Avery", "Jordan", "Taylor", "Morgan"];
//                     1      2        3        4       

// 🧾 Logging the entire array
console.log(teamRoster); // ["Avery", "Jordan", "Taylor", "Morgan"]

// 🎯 Accessing a single value by index (arrays are zero-indexed)
console.log(teamRoster[1]); // "Jordan"
console.log(teamRoster[0]); // "Avery"
console.log(teamRoster[2]); // "Taylor"
console.log(teamRoster[3]); // "Morgan"

teamRoster[0] = 'Olive';

console.log('Team Captain: ' + teamRoster[0]); // The + operator can concatenate strings and variables or smash it togtehr like a join

// Add a new member to the team
// teamRoster.push("Casey"); // push is a method that adds a new element to the end of the array

console.log(teamRoster[4]); // Exception Out of Bounds
// .length
console.log(teamRoster.length); // 4

console.log(teamRoster.length - 1); // 3 // length less 1



// 🔄 Using an index to update a value
console.log(teamRoster[3]); // "Morgan"

// Replace the fourth player with a new name
teamRoster[3] = "Riley";

// Logs "The fourth player is Riley."
console.log(`The fourth player is ${teamRoster[3]}.`);

// 🧮 Using the array's length property to get how many players are on the team
console.log(`The team has ${teamRoster.length} players.`);
