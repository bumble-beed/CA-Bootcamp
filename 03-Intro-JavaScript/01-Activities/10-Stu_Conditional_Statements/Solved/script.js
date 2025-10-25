// 🖥️ System Status Checker
// Change the values and operators below to test different outcomes

const systemLoad = 50;
const isUserPresent = true;
const isSystemOverloaded = (systemLoad > 75);

// 🧠 Your Task: Write conditional statements that evaluate combinations of true/false

// ✅ Check if both conditions are true
if (isUserPresent && isSystemOverloaded) {
  console.log("True ✅ True ✅");

// 🟢 Check if only the first condition is true
} else if (isUserPresent) {
  console.log("True ✅ False ❌");

// 🔵 Check if only the second condition is true
} else if (isSystemOverloaded) {
  console.log("False ❌ True ✅");

// 🔴 If neither condition is true
} else {
  console.log("False ❌ False ❌");
}
