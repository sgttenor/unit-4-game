var randomResult;
var losses = 1;
var wins = 1;
var previousNumber = 0;

var images = [
    "https://www.cleanorigin.com/skin/frontend/cleanorigin/default/images/shapes/product/round.jpg",
    "https://4.imimg.com/data4/GV/NB/MY-3900003/amethyst-stone-500x500.gif",
    "http://images6.fanpop.com/image/photos/37300000/Emerald-stone-precious-stones-37310107-238-212.jpg",
    "https://5.imimg.com/data5/PN/JR/MY-9933605/red-ruby-stone-500x500.jpg"

]
var startAndReset = function () {

    $(".crystals").empty();
    
    
    randomResult = Math.floor(Math.random() * 110) + 11;
    

    $("#target").html("Target score: " + randomResult);
    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11) + 1;
        console.log(random);


        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });
         
         crystal.css({
            "background-image":"url('" + images[i] + "')",
            "background-size":"cover"
         });
     
        $(".crystals").append(crystal);

    }

}

startAndReset();



$(document).on('click', ".crystal", function () {


    var num = parseInt($(this).attr('data-random'));

    previousNumber += num;

    $("#counter").html("Your numbers: " + previousNumber);

    if (previousNumber > randomResult) {
        $("#lose").html("Losses: " + losses);

        losses++; 

        previousNumber = 0;

        $("#counter").html("Your numbers: " + previousNumber);
        

        startAndReset();

    } else if (previousNumber === randomResult) {

        $("#win").html("Win: " + wins);

        wins++;

        $("#counter").html("Your numbers: " + previousNumber);

        previousNumber = 0;
       
        startAndReset();
    }

    

});





//Psuedo code
//game with 4 crystals and random result.
// Every number needs to have a random number between 1-12
//random number for the target should  be 19-120
// a new number will be generated after game ends to those crystals
//When you click and Crystal, should be adding to the result until it hits equals target code.
//win or lose incriment loss win counter
//if it's not equal, player loses
//win or lose start over