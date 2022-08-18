var events = {};

currentDay = function() {
    document.getElementById("currentDay"). innerText = moment().format("dddd, MMM Do");
}
currentDay()

const rows = document.getElementsByClassName("user-events");
let currentHour = parseInt(moment().format('H'));
console.log(currentHour);

Array.from(rows).forEach(row => {
    let rowIdString = row.id, rowHour;
    rowHour = parseInt(rowIdString);

    if (rowHour) {
      // Compares row id to current hour and sets color accordingly
      if (currentHour === rowHour) {
        setColor(row, "lightgreen");
      } else if ((currentHour < rowHour) ) {
        setColor(row, "grey");
      } else if ((currentHour > rowHour) ) {
        setColor(row, "red");
      } else {
        setColor(row, "grey");
      }
    }
    console.log(rowHour);
});

function setColor(element, color) {
    element.style.backgroundColor = color;
}

$(".user-events").on("click", test = function(){
    var text = $(this)
    .text()
    .trim();
    var textInput = $("<textarea>")
    .addClass("user-events bg-primary col-10 text-dark")
    .val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");

    var eventP = $("<p>")
    .addClass("user-events bg-primary col-10 text-dark")
    .text(text)
    
    $(this).replaceWith(eventP)
});

$(".saveBtn").click(function(event) {       
    saveBtn = event.target
    console.log(saveBtn)
    rows.addClass= ("bg-dark")
});


  