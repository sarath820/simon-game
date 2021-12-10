

var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];
var x = false;

$(document).keydown(function() {
if(x === false){
  nextSequence();
  x = true;

}
});

var levelnumber = 1;
function nextSequence() {

$("h1").html("level  "+levelnumber);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);



  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);


playsound(randomChosenColour);
levelnumber = levelnumber + 1 ;
userClickedPattern.length = 0 ;
}



$(".btn").click(function(){

  var userChosencolour = $(this).attr("id");
  userClickedPattern.push(userChosencolour);

  playsound(userChosencolour);
  animatepress(userChosencolour);
  buttonclickcheck();


});

var patternindex = 0;
function buttonclickcheck(){



    if (gamePattern[patternindex] === userClickedPattern[patternindex]) {

      patternindex = patternindex + 1 ;
       if (gamePattern.length === userClickedPattern.length) {
       setTimeout(function(){nextSequence()},1000);
       patternindex = 0 ;
     }

   } else{
     var audio2 = new Audio("sounds/wrong.mp3");
     audio2.play();
     $("h1").html("Game Over, Press Any Key to Restart")
     $("body").addClass("game-over");
     setTimeout(function(){$("body").removeClass("game-over")},200);
     startover();
   }

      }

function startover(){

    levelnumber = 1;
    gamePattern.length = 0;
    userClickedPattern.length = 0;
    x = false;


}


function playsound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
function animatepress(currentcolour){
  $("#"+ currentcolour).addClass("pressed");
  setTimeout(function(){$("#"+ currentcolour).removeClass("pressed")} , 100);
}
