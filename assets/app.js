//listening event for document
$(document).ready(function(){
    //array to hold buttons
    var displayButton = ["crying", "laughing", "mad", "sad", "hyper"];

    //function to display images, with attributes and limiting to 10
    function imageDisplay () {
    $('#gifThumbs').empty();
    var input = $(this).attr("data-name");
    var limit = 10;
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=&q=" + input + "&limit=" + limit + "Tqp0qVsBVht4kSu14ps63GCZLkSx28Al";

    }
    //send out ajax call
    $.ajax({
        url: queryURL;
        method: "GET"
    }).then(function(response){

        //creating loop for grabbing giphy info
        for (var i = 0; i < limit; i++) {

            var image = $("<img>");
            image.attr("src", response.data[i].images.original_still.url);
            image.attr("data-still", response.data[i].images.original_still.url);
            image.attr("data-animate", response.data[i],images.original.url);
            image.attr("data-state", "still");
            image.attr("class", "gif");

         //creating p tag to grab rating
         var rating = response.data[i].rating;
         var pRating = $("<p>").text("Rating: " + rating);
         displayDiv.append(pRating);

         $("#gifThumbs").append(displayDiv);
        }

    })

    //function to create buttons and give attributes (some classes given for bootstrap styling). Inputs will be stored in displayButton var
    function makeButtons() {
        $("#buttons").empty();

        for(var j = 0; j < displayButton.length; j++) {
            var newButton = $("<button>");
            newButton.attr("class", "btn btn-default");
            newButton.attr("id", "input");
            newButton.attr("data-name", displayButton[i]);
            newButton.text(displayButton[i]);
            $("#buttons").append(newButton);
        }
    }

    //create function for click event to animate. This will change the state of the images defined in lines 21-26

    function animateThis () {
        var state = $(this).attr("data-state");
        var animateGif = $(this).attr("data-animate");
        var stillGif = $(this).attr("data=still");

        if(state == "still") {
            $(this).attr("src", animateGif);
            $(this).attr("data-state", "animate");
        } else if (state == "animate") {
            $(this).attr("src", stillGif);
            $(this).attr("data-state", "still");
        }

    }
    //click function for user input
    $("#submitPress").on("click", function() {
        
        var input = $("user-input").val().trim();
        form.reset();
        displayButton.push(input);

        makeButtons();
    })

    makeButtons();
    //click events that animate the gifs when clicked, changing class or id from attributes from lines 56-69.

    $(document).on("click", "#input", imageDisplay);
    $(document).on("click", ".gif", animateThis);


});
