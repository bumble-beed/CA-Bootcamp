// 10-Stu_Timers-Intervals — Speed Reader (STARTER)
// GOAL: Build a 2-stage timer:
//   1) Count down (e.g., from 5 to 0) using setInterval()
//   2) When it hits 0, show words from a message one at a time using another setInterval()
// Remember to clearInterval() when done.

var timerEl = document.getElementById("countdown");
var mainEl = document.getElementById("main");

// TODO: You may replace this message with your own text.
var message =
  "Some say the world will end in fire, some say in ice. From what I’ve tasted of desire I hold with those who favor fire.";
var words = message.split(" ");

// TODO 1: Write a countdown() function
// - Start from a number (e.g., 5)
// - Update #countdown each second
// - When it reaches 0:
//    * clear the interval
//    * empty #countdown text
//    * call displayMessage()
function countdown() {
  // var timeLeft = ...;
  // var timeInterval = setInterval(function () {
  //   if (/* more than 1 sec left */) {
  //     // update text to "X seconds remaining..."
  //   } else if (/* exactly 1 sec left */) {
  //     // update text to "1 second remaining..."
  //   } else {
  //     // clearInterval
  //     // clear countdown text
  //     // call displayMessage()
  //   }
  // }, 1000);
}

// TODO 2: Write displayMessage() to reveal words one at a time
// - Keep a counter (word index)
// - Every N ms, set #main.textContent = words[counter], then increment
// - When there are no words left, clear the interval and optionally show "Done!"
function displayMessage() {
  // var index = 0;
  // var msgInterval = setInterval(function () {
  //   if (/* no more words */) {
  //     // clearInterval(msgInterval);
  //     // timerEl.textContent = "✅ Done!";
  //   } else {
  //     // mainEl.textContent = words[index];
  //     // index++;
  //   }
  // }, /* try 400 or 600 ms per word */);
}

// TODO 3: Start the process by calling countdown()
countdown();
