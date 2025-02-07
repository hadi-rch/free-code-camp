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
Step 38
Now you need to retrieve the value of entryDropdown.value to get the currently selected option from the dropdown.
Print entryDropdown.value to the console to see its value.
Since entryDropdown.value is in a static context (outside of an event listener), it only shows the value at the moment the code runs. This means it won't automatically update as the user interacts with the dropdown.
It will capture the initial value (in this case, "breakfast") and won't reflect any changes the user makes afterward.

*/
function isInvalidInput(str) {
  const regex = /\d+e\d+/i;
  return str.match(regex);
}
console.log(entryDropdown.value);

