
$(document).ready(function () {
  // Listener for click events on the save button.
  var save = $(".saveBtn");
  var hourText = $(".description");

  save.on("click", function () {
    var hourText = $(this).siblings(".description").val();
    localStorage.setItem($(this).siblings(".description").attr("id"), hourText);
  });

  // Added code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements.

  for (let i = 0; i < localStorage.length; i++) {
    console.log(hourText[i].id);
    console.log(localStorage.getItem(hourText[i].id));
    hourText[i].value = localStorage.getItem(hourText[i].id);
  }

  // TODO: Code applies the past, present, or future class to each time
  // block by comparing the id to the current hour.

  var currHour = Number(moment().format("HH"));

  for (let i = 0; i < hourText.length; i++) {
    if (currHour == hourText[i].id) {
      $(hourText[i]).addClass("present");
    } else if (currHour < hourText[i].id) {
      $(hourText[i]).addClass("future");
    } else {
      $(hourText[i]).addClass("past");
    }
  }

  //Add code to display the current date in the header of the page.

  $("#currentDay").text(moment().format("dddd" + ", " + "MMMM Do"));
});
