const calorieCounter = document.getElementById("calorie-counter");
const budgetNumberInput = document.getElementById("budget");
const entryDropdown = document.getElementById("entry-dropdown");
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const output = document.getElementById("output");
let isError = false;
/*
Step 27
Once you have finished testing your cleanInputString function, you can remove both of your console statements.

*/

function cleanInputString(str) {
  const regex = /[+-\s]/g;
  return str.replace(regex, "");
}
