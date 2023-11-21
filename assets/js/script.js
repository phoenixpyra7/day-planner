


$(document).ready(function () { //Wrapped code to interact with the DOM 
    $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY")); //selected date format
    var currentHour = dayjs().hour();
    $(".time-block").each(function () { //used time block from html, 
        var blockHour = parseInt($(this).attr("id").split("-")[1]); // parse Int to round to whole, split hour from the 9 ref html
        console.log(blockHour);
        if (currentHour > blockHour) { // if current time from the block time is grtr than current time
            $(this).addClass("past") // then it is considered the past
        } else if (currentHour === blockHour) { // otherwise if the current time is same as block time
            $(this).addClass("present") // then its present time
        } else if (currentHour < blockHour) { // otherwise if current time from the block time is less than current time
            $(this).addClass("future") // then its considered the future
        }
        var blockHourId = $(this).attr("id") //this grabs the id for each time block from the html (9)
        var reload = localStorage.getItem(blockHourId) // this shows the text content from the local storage
        $(this).find(".description").text(reload) // this .text comand that puts the words on the page from ls
        // console.log(reload)
        // console.log(blockHourId)
    })

    $(".saveBtn").on("click", function () {  // adding a save to local is not working.
        var textArea = $(this).prev().val();
        var blockHourId = $(this).parent().attr("id");
        // console.log(blockHour);
        // // console.log("Hello");
        // console.log(textArea);
        localStorage.setItem(blockHourId, textArea);
        // console.log("Saved Planner")
    })


    //var userStr = localStorage.getItem('user');
    // console.log("DOM",$(this)); - confirmed works
    // $(".saveBtn").on("click", function () { //added event listener to save user info to local.client side storage.
    //     // console.log("button",$(this)) - confirmed works
    // })
})



// console.log("global",$(this)) - confirmed works
//How can Day.js be used to get the current hour in 24-hour time?
//var currentHour = dayjs().hour(); 



