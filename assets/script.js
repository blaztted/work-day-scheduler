// Display the current day at the top of the calender when a user opens the planner.
// var advancedFormat = require("dayjs/plugin/advancedFormat");
// dayjs.extend(advancedFormat);
// dayjs().format("Q Do k kk X x");

//! Display the current day in the element with the id 'currentDay'
// !create dayjs property to show the date at the top
// !center the h1 and p
// TODO Present time blocks for standard business hours when the user scrolls down.
//!new div with 9-5 individual blocks
//! Color-code each time block based on past, present, and future when the time block is viewed.
//! if the block is in the past, the background is grey, if now red, otherwise green

var currentDate = dayjs().format("dddd, MMMM D, YYYY");

//store calendar events
let calEvents = {};

//
let hourDisplay = dayjs();

//Display current day
$("#currentDay").text(currentDate);

function displayCalendar(today, calEvents) {
  let hourRow = dayjs(today).hour(9);
  const cal = $("div.container");
  cal.empty();

  for (let i = 0; i < 9; i++) {
    // Change the loop condition to iterate 8 times for 9 AM to 5 PM
    const row = $("<div>").addClass("row"); // create row for each hour

    let color = "";
    if (today.isAfter(hourRow, "hour")) {
      color = "past";
    } else if (today.isBefore(hourRow, "hour")) {
      color = "future";
    } else {
      color = "present";
    }

    cal.append(row);

    row.append($("<div>").addClass("col-2 hour").text(hourRow.format("h A")));

    //add block event text
    let blockEvent = hourRow.format("hA");
    row.append(
      $("<textarea>").addClass(`col-8 ${color}`).text(calEvents[blockEvent])
    );

    //save btn
    row.append(
      $("<button>")
        .addClass("col-2 saveBtn")
        .html("<i class='far fa-save'></i>")

        .attr("id", hourRow.format("hA"))
    );

    hourRow = hourRow.add(1, "hour");
  }
}

function startCalendar() {
  const today = dayjs();

  displayCalendar(today, calEvents);
}

function storeEvents() {
  localStorage.setItem("calEvents", JSON.stringify(calEvents));
}

function loadEvents() {
  const stored = JSON.parse(localStorage.getItem("calEvents"));
  if (stored) {
    calEvents = stored;
    // Loop through each stored event and update the corresponding textarea
    Object.keys(calEvents).forEach((hour) => {
      $(`#${hour}`).closest(".row").find("textarea").val(calEvents[hour]);
    });
  }
}

//save button click event
$(document).on("click", "button.saveBtn", (e) => {
  let calText = $(e.currentTarget).closest(".row").find("textarea").val();
  calEvents[e.currentTarget.id] = calText; //add text to object with time as key
  storeEvents();
});

startCalendar();
loadEvents();

// Allow a user to enter an event when they click a time block
//at the end of each block, you can click an icon to save what was written on the block

//use json.stringify to store and json.parse to retreieve from local storage after page refresh
// Save the event in local storage when the save button is clicked in that time block.

// Persist events between refreshes of a page

// function to save to local storage when button is clicked
// get the values
// store them
// function to update classes hours change
// get current time
// comptare against those in your time blocks
// update the classes
// remember to also get values from local storage and set them on page load
