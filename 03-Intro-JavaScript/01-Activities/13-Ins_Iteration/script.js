// 🧭 Iteration Example — Working with Loops

// ❌ Example of a while loop (commented out for reference)
// let i = 0;
// while (i < 5) {
//   console.log(`While loop count: ${i}`);
//   i++;
// }

// ✅ for loop example — repeat code multiple times
for (let i = 0; i < 5; i++) { // Alt counter variable 'i' from 0 to 4
  console.log(`Task ${i + 1}: Reviewing loop logic 🧠`);
}

// ✅ Using a for loop to iterate through an array
const todoList = ["Finish homework", "Reply to emails", "Go for a run", "Cook dinner"];

console.log("📝 Today's To-Do List:");

// The loop runs once for each item in the array
for (let i = 0; i < todoList.length; i++) {
  console.log(`${i + 1}) ${todoList[i]}`);
}

// ✅ Using a for-of loop for cleaner iteration (no index needed)
console.log("✅ Checking off tasks:");
for (const task of todoList) {
  console.log(`Completed: ${task}`);
}

// Example

// Example of a while loop (commented out for reference)
let counter = 0;
while (counter < 3) {
  console.log(`While loop count: ${counter}`);
  counter++;
}

// Using a for loop to iterate through an array
const todoListExample = ["Finish homework", "Reply to emails", "Go for a run", "Cook dinner"];

// Output
// While loop count: 0
// While loop count: 1
// While loop count: 2
// While loop count: 3
// While loop count: 4
  