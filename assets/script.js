// Display the current day at the top of the calender when a user opens the planner.
// var advancedFormat = require("dayjs/plugin/advancedFormat");
// dayjs.extend(advancedFormat);
// dayjs().format("Q Do k kk X x");

var currentDate = dayjs().format("dddd, MMMM D, YYYY");
// Display the current day in the element with the id 'currentDay'
$("#currentDay").text(currentDate);
console.log(currentDate);

// Add the rest of your code below this point
// ...

// create dayjs property to show the date at the top
// center the h1 and p

// Present time blocks for standard business hours when the user scrolls down.
//new div with 9-5 individual blocks

// Color-code each time block based on past, present, and future when the time block is viewed.
//if the block is in the past, the background is grey, if now red, otherwise green

// Allow a user to enter an event when they click a time block
//at the end of each block, you can click an icon to save what was written on the block

//use json.stringify to store and json.parse to retreieve from local storage after page refresh
// Save the event in local storage when the save button is clicked in that time block.

// Persist events between refreshes of a page
