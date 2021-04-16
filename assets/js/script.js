// Adding current time to the header section
var containerEl = $("#container");
var currentHour = moment().hours();
var endTime = 17; //closing time

creatTimeRow();
// getColor();
// getData();

$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
// $(".saveBtn").click();

function creatTimeRow() {
  var time = 9; //open time
  while (time < endTime + 1) {
    //as long as we are open
    var holderEl = $("<form class='row time-block'>");

    $("<div class='col-1 col-md-1 hour'>")
      .text(convertTo12Hour(time))
      .appendTo(holderEl);

    $("<textarea  class='col-9 col-md-10 description'>")
      .attr("data-hr", time)
      .addClass(getColor(time))
      .val(getData(time))
      .appendTo(holderEl);

    var saveBtn = $("<button class='saveBtn col-2 col-md-1'>");
    saveBtn.appendTo(holderEl).click(setData);

    $("<i class='fa fa-save'>").appendTo(saveBtn);

    containerEl.append(holderEl);

    time++;
  }
}

function convertTo12Hour(hour) {
  //time is an integer
  //   if (time > 12) {
  //     return time - 12;
  //   } else {
  //     return time;
  //   }
  return moment(hour, "H").format("ha");
}

function getColor(hour) {
  //   $(".description").each(function () {
  //     var eachHour = parseInt($(this).attr("hr"));
  //     if (eachHour < currentHour) {
  //       $(this).addClass("past");
  //     } else if (eachHour === currentHour) {
  //       $(this).addClass("present");
  //     } else {
  //       $(this).addClass("future");
  //     }
  //   });
  let className = "future";

  if (hour === currentHour) {
    className = "present";
  } else if (hour < currentHour) {
    className = "past";
  }

  return className;
}

function getData(hour) {
  //   hour = $(this).siblings(".description").attr("hr");
  //   description = $(this).siblings(".description").val();
  //   localStorage.getItem(hour, description);
  //   $(".description").each(function () {
  //     while (($(this).siblings(".description").attr("hr") = hour)) {
  //       $(this).siblings(".description").val() = description;
  //     }
  //   });
  return localStorage.getItem(convertTo12Hour(hour));
}

function setData(event) {
  event.preventDefault();

  var siblings = $(this).siblings();

  var hour = $(siblings[0]).text();
  var textarea = $(siblings[1]).val();

  localStorage.setItem(hour, textarea);
}
