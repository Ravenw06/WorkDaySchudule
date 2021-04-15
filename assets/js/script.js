var currentTimeEl = document.querySelector("#currentDay");
currentTimeEl.textContent = moment().format('dddd, MMMM Do YYYY');
// Adding current time to the header section
var currentHour = moment().hours();
var endTime = 19; //closing time
var containerEl = document.querySelector(".container");
// select to the container id 

function convertTo12Hour(time){
    //time is an integer
    if (time > 12) {
      return time - 12;
    } else {
      return time
    } 
}

function creatTimeRow () {
    var time = 9;//open time
    while (time < endTime + 1){ //as long as we are open
    var holderEl = document.createElement("div");
    holderEl.className = "row time-block";

    var timeEl = document.createElement("div");
    timeEl.className = "col-1 col-md-1 hour d-flex";
    timeEl.textContent = convertTo12Hour(time);

    var inputEl = document.createElement("textarea");
    inputEl.className = "col-9 col-md-10 description"; 
    inputEl.setAttribute("hr", time)
    var saveBtn = document.createElement("button")
    saveBtn.className = "saveBtn col-2 col-md-1 fa fa-save border rounded p-3";

    holderEl.appendChild(timeEl);
    holderEl.appendChild(inputEl);
    holderEl.appendChild(saveBtn);
    containerEl.appendChild(holderEl);
    time ++;
    console.log(time)
    }
}
creatTimeRow ();


function changeColor() {

    $(".description").each(function() {
        var eachHour = parseInt($(this).attr("hr"));
        if (eachHour < currentHour) { 
            $(this).addClass("past");
        }
        else if (eachHour === currentHour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("future");
        }
    });
}    
changeColor();

function getData(){
    hour = $(this).siblings(".description").attr("hr");
    description = $(this).siblings(".description").val();
    localStorage.getItem(hour, description); 
    $(".description").each(function() {
        while ($(this).siblings(".description").attr("hr") = hour){
        $(this).siblings(".description").val() = description;}    
    })
};

$(".saveBtn").click(function() {
    var hour = $(this).siblings(".description").attr("hr");
    var description = $(this).siblings(".description").val();
    localStorage.setItem(hour, description);
});


getData();