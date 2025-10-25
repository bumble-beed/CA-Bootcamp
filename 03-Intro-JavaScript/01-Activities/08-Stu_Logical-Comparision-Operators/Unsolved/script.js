// Budget Tracking

const budgetGoal = "500";
const currentSavings = 500;
const totalIncome = 1000;
const remainder = totalIncome % currentSavings;
const halfIncome = totalIncome / 2;

// === Evaulates to ???
const isHalfGoalMet = (currentSavings === halfIncome);

// < Evaluates to ???
const isHalfLessThanRemainder = (halfIncome < remainder);

// 🧮 Use comparison operators so all expressions below log to the console as true

// Strict equality (===) returns ???; loose equality (==) returns ???
console.log(budgetGoal == currentSavings); // ???

// Both values are the number 500 and strictly equal
console.log(currentSavings === halfIncome); // ???

// totalIncome is greater than currentSavings → ???
console.log(totalIncome > currentSavings); // ???

// remainder is less than 1 → ???
console.log(remainder < 1); // ???

// ⚙️ Use logical operators so all expressions below log to the console as true

// Use || (OR) → true if either expression is ???
console.log(isHalfGoalMet || isHalfLessThanRemainder); // ???

// Use ! (NOT) and && (AND) → true when both conditions are ???
console.log(isHalfGoalMet && !isHalfLessThanRemainder); // ???

// Remove (!) from one to keep at least one true expression
console.log(isHalfGoalMet || isHalfLessThanRemainder); // ???