


$(document).ready(function () { //Wrapped code to interact with the DOM 
    $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY")); //selected date format
    var currentHour = dayjs().hour();
    $(".time-block").each(function () { //used time block from html, 
        var blockHour = parseInt($(this).attr("id").split("-")[1]); // parse Int to round to whole, split hour from the 9 ref html
        console.log(currentHour + blockHour);
        if (currentHour > blockHour) { // if current time from the block time is grtr than current time
            $(this).addClass("past") // then it is considered the past
        } else if (currentHour === blockHour) { // otherwise if the current time is same as block time
            $(this).addClass("present") // then its present time
        } else if (currentHour < blockHour) { // otherwise if current time from the block time is less than current time
            $(this).addClass("future") // then its considered the future
        }
    })
    // console.log("DOM",$(this)); - confirmed works
    $(".saveBtn").on("click", function () { //added event listener to save user info to local.client side storage.
        // console.log("button",$(this)) - confirmed works
    })
})

document.getElementById("save").on("click", function () {  // adding a save to local is not working.
    var textArea = document.getElementById("textarea").value;
    localStorage.setItem("textarea",);
    alert("Saved Planner");
    console.log("Saved Planner")
}, false);

document.getElementById("reload").on("click", function () {
    document.getElementById("textarea").value = localStorage.getItem("textarea");
    alert("Reloaded Planner");
    console.log("Reloaded Planner")
}, false);

//reload last session
// document.getElementById("reload").addEventListener("click", function ()
//     {
//         document.getElementById("todo").value ='Your code';
//         alert("Reloaded To-Do List") ;
//         console.log("Reloaded To-Do List")
//     } , false);

// console.log("global",$(this)) - confirmed works
//How can Day.js be used to get the current hour in 24-hour time?
//var currentHour = dayjs().hour(); 

// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?


