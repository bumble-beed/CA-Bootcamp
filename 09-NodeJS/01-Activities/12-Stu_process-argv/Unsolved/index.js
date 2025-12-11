// Unsolved Version — Implementing process.argv

// ------------------------------------------------------------
// 1. TODO: Log the full argv array so you can see what it contains.
// ------------------------------------------------------------

console.log("Full argv:", process.argv);

// ------------------------------------------------------------
// 2. TODO: Pull two arguments from the command line.
//    Example usage:
//      node index.js hello world
//
//    Store them in variables named a and b.
// ------------------------------------------------------------

// const a = ...
// const b = ...

const a = process.argv[2];
const b = process.argv[3];

console.log("\nArgument A:", a);
console.log("Argument B:", b);

// ------------------------------------------------------------
// 3. TODO: Compare the two values.
//    Print true if they match, false if they do not.
//    You may use any of the following:
//      • if/else
//      • ternary operator
//      • direct comparison inside console.log
//
//    Choose at least ONE method.
// ------------------------------------------------------------

console.log("\nComparison results:");

if (a === b) {
    console.log("Match (if/else):", true);
} else {
    console.log("Match (if/else):", false);
}

console.log("Match ternary:", a === b ? true : false);
// ------------------------------------------------------------
// 4. BONUS:
//    Try comparing them multiple ways, such as:
//      console.log(a === b)
//      console.log(a == b)
//    Then research the difference.
// ------------------------------------------------------------
