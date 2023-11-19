


$(document).ready(function () { //Wrapped code to interact with the DOM 
    $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY")); //selected date format
    var currentHour = dayjs().hour();
    $(".time-block").each(function () { //used time block from html, 
        var blockHour = parseInt($(this).attr("id").split("-")[1]); // parse Int to round to whole, split hour from the 9
        console.log(currentHour + blockHour);
        if (currentHour > blockHour) { // if current time from the block time is less than current time
            $(this).addClass("past") // then it is considered the past
        } else if (currentHour === blockHour) { // otherwise if the current time is same as block time
            $(this).addClass("present") // then its present time
        } else if (currentHour < blockHour) {
            $(this).addClass("future") // then its considered the future
        }
    })
    // console.log("DOM",$(this));
    $(".saveBtn").on("click", function () {
        // console.log("button",$(this))
    })
})

// console.log("global",$(this))

//$(function (: data() Selector) ?????????????????????????????????????????????????????????????

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
// event listener to proceed to the questions
// saveBtn.addEventListener('click', trigger () {
//   if (.trigger.target.matches('button'));

// });


//
// timeBlock attr = ("past,present,future") ????????????????????????????????????????????


// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes?

//How can Day.js be used to get the current hour in 24-hour time?
//
//var currentHour = dayjs().hour(); 
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.

