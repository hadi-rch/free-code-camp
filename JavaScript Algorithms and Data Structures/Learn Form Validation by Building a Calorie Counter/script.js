const calorieCounter = document.getElementById("calorie-counter");
const budgetNumberInput = document.getElementById("budget");
const entryDropdown = document.getElementById("entry-dropdown");
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const output = document.getElementById("output");
let isError = false;

function cleanInputString(str) {
  const regex = /[+-\s]/g;
  return str.replace(regex, "");
}

/*
Step 39
Now that you have finished testing the value of entryDropdown.value, you can remove the console.log statement.
Your next step is to allow users to add entries to the calorie counter. Declare an empty function addEntry. This function should not take any parameters.

*/
function isInvalidInput(str) {
  const regex = /\d+e\d+/i;
  return str.match(regex);
}
function addEntry (){
  
}

