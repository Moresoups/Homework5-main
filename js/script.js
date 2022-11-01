var displayCurrentDay = document.querySelector("#currentDay");
var currentDay = moment();
displayCurrentDay.textContent = currentDay.format("dddd, MMMM Do YYYY");
var timeBlock = $(".time-block").addClass("row");
var blockText = $("<p>").addClass("description");
timeBlock.append(blockText);
var currentHour = parseInt(moment().format("H"));


function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}

var loadEvents = function (timeSlots) {
  timeSlots.forEach((element) => {
    console.log(element);
    let text = localStorage.getItem(parseInt(element.time));
    console.log(text);
    if (text) {
      element.text.val(text);
    }
  });
};

var fetchEvents = function () {
  var tempArr = [];
  $("textarea").each(function (index, elem) {
    tempArr.push({
      time: $(elem).attr("id"),
      text: $(elem),
    });
  });
  loadEvents(tempArr);
};


//color code will go here



$("button.saveBtn").click(function (event, loadEvents) {
  event.preventDefault();
  var $element = $(this).siblings("textarea");
  var time = $element.attr("id");
  console.log(time);
  var text = $element.val().trim();
  console.log(text);

  if (time && text !== "") {
    console.log(time, text);
    localStorage.setItem(time, text);
  }
});



$(".saveBtn").hover(function () {
  $(this).addClass("saveBtn:hover");
});

$("textarea").each(function () {
  var $this = $(this);
  var id = parseInt($this.attr("id"));

if (id < currentHour){
$(this).addClass("past");
$(this).removeClass("present")
$(this).removeClass("future")
}

if (id > currentHour){
$(this).removeClass("past");
$(this).removeClass("present")
$(this).addClass("future")
}

else {
  $(this).removeClass("past");
$(this).addClass("present")
$(this).removeClass("future")
}


});

function death() {
  console.clear()
  localStorage.clear();
}



fetchEvents();




