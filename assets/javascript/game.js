var randomResult;
var losses = 1;
var wins = 1;
var previousNumber = 0;
var audio = new Audio("http://freesoundeffect.net/sites/default/files/gaining-bonus-points-sound-effect-19708252.mp3");
var audio2 = new Audio("http://freesoundeffect.net/sites/default/files/cartoon-game-voice-you-lose-sound-effect-94607544.mp3");

var images = [
    "https://www.cleanorigin.com/skin/frontend/cleanorigin/default/images/shapes/product/round.jpg",
    "https://4.imimg.com/data4/GV/NB/MY-3900003/amethyst-stone-500x500.gif",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeEAsmKyFuslhVVMYLPkM4TJ9ug_hRb3KznU7t0gxOAJaVVp_v",
    "https://5.imimg.com/data5/PN/JR/MY-9933605/red-ruby-stone-500x500.jpg"

]


var startAndReset = function () {

    $(".crystals").empty();
    $("#score-lose").empty();
    $("#score-win").empty();
   


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
            "background-image": "url('" + images[i] + "')",
            "background-size": "cover"
        });

        $(".crystals").append(crystal);
       
    }
    $("#counter").html("Your numbers: " + previousNumber);
    
}
setTimeout(startAndReset, 1000);
//startAndReset();



$(document).on('click', ".crystal", function () {
     

    var num = parseInt($(this).attr('data-random'));

    previousNumber += num;

    $("#counter").html("Your numbers: " + previousNumber);

    if (previousNumber > randomResult) {
        audio2.play();
        $("#lose").html("Losses: " + losses);
        $("#score-lose").html("You lose!!!");
        losses++;
          
        
        previousNumber = 0;

        $("#counter").html("Your numbers: " + previousNumber);
        
        setTimeout(startAndReset, 1000);

        

    } else if (previousNumber === randomResult) {
        audio.play();
        $("#win").html("Win: " + wins);
        $("#score-win").html("💎You Win!!!");
        wins++;

        
        
        $("#counter").html("Your numbers: " + previousNumber);
        
        previousNumber = 0;
        
        setTimeout(startAndReset, 1000);
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