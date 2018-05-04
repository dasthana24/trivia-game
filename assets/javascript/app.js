
// Define variables
$(document).ready(function(){
    var count = 0;
    var time = 31;
    var isSelected = false;
    var ticker;
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;

// Questions and Answer Arrays
    var question = ["1. Which chess piece is of the lowest theoretical value?","2. What is the capital of Canada?","3. Who was the first man on the moon?","4. What number is represented by the letters XIX in Roman numerals?",
                   "5. What is the biggest living fish in the ocean?","6. Name the capital of Australia.","7. Name the marine creature of the genus hippocampus?",
                "8. Which non-metallic element has the chemical symbol S?" ,"9. Name the current CEO of GOOGLE","10. Name the third known major planet from the sun in our solar system."];
    var answer = ["Pawn", "Ottawa", "Neil Armstrong","19","Whale Shark","Canberra","Sea horse","Sulphur","Sundar Pichai", "Earth"];
    var firstChoice = ["castle","Ottawa","Neil Armstrong","11","Tuna","Melbourne","Hippopotamus","Selenium","Sundar Pichai","Venus"];
    var secondChoice = ["Knight","Toranto","Yuri Gagarin","16","Great White Shark","Perth","Crocodile","Sodium","Satya Nadella","Jupitor"];
    var thirdChoice = ["Pawn","Montreal","Buzz Aldrin","19","Whale Shark","Sydney","Manatee","Sulphur","Larry Page","Mars"];
    var fourthChoice = ["Bishop","Vancouver","John Glenn","21","Barracuda","Canberra","Sea horse","Silicon","Tim Cook","Earth"];

// Show & Hide Functions
    function showHolders() {
        $("#question-holder").show();
        $("#choice-holder-1").show();
        $("#choice-holder-2").show();
        $("#choice-holder-3").show();
        $("#choice-holder-4").show();
    }
    function hideHolders() {
        $("#question-holder").hide();
        $("#choice-holder-1").hide();
        $("#choice-holder-2").hide();
        $("#choice-holder-3").hide();
        $("#choice-holder-4").hide();
    }
    function hideResults() {
        $("#correct-holder").hide();
        $("#incorrect-holder").hide();
        $("#unanswered-holder").hide();
        $("#restart-holder").hide();
    }
    function displayQuestion () {
        hideResults();
        $("#answer-holder").hide();
        $("#image-holder").hide();
        $("#time-holder").show();
        showHolders();
        $("#question-holder").html(question[count]);
        $("#choice-holder-1").html(firstChoice[count]);
        $("#choice-holder-2").html(secondChoice[count]);
        $("#choice-holder-3").html(thirdChoice[count]);
        $("#choice-holder-4").html(fourthChoice[count]);
    
    // Hover CSS
        $("#choice-holder-1").hover(function() {
            $(this).css("color", "yellow");
        },
        function(){
            $(this).css("color", "white");
        });
        $("#choice-holder-2").hover(function() {
            $(this).css("color", "yellow");
        },
        function(){
            $(this).css("color", "white");
        });
        $("#choice-holder-3").hover(function() {
            $(this).css("color", "yellow");
        },
        function(){
            $(this).css("color", "yellow");
        });
        $("#choice-holder-4").hover(function() {
            $(this).css("color", "yellow");
        },
        function(){
            $(this).css("color", "white");
        });
    }
    $("#choice-holder-1").on("click", checkAnswer) 
    $("#choice-holder-2").on("click", checkAnswer)
    $("#choice-holder-3").on("click", checkAnswer)
    $("#choice-holder-4").on("click", checkAnswer)

// Check Answer Function
    function checkAnswer() {

        hideHolders();

        if($(this).text() === answer[count]) {
            stopTime();
            isSelected = true;
            $("#answer-holder").show();
            $("#answer-holder").html("Right! The answer is: " + answer[count]);
            displayImage();
            correct++;
            count++;
        }
        else {
            stopTime();
            isSelected = true;
            $("#answer-holder").show();
            $("#answer-holder").html("Wrong! The answer is: " + answer[count]);
            displayImage();
            incorrect++;
            count++;
        } 

        checkGameEnd();  
    }

// Chekc End Game Function
    function checkGameEnd() {
        if(count === question.length) {
            $("#time-holder").hide();
            showResults();
            count = 0;
            $(".start").show();
            $(".start").on("click", function() {
                resetResults();
                startGame();
            });
        }
    }

    function resetTime() {
        time = 31;
    }

    function displayTime() {
        time--;
        $("#time-holder").html("Time remaining: " + time);
      
            if(time <= 0) {
                hideHolders();
                stopTime();
                $("#answer-holder").show();
                $("#answer-holder").html("Time is up! The answer is: " + answer[count]);
                displayImage();
                unanswered++;
                count++;
                checkGameEnd();
            }
    }

    function startTime() {
        clearInterval(ticker);
        ticker = setInterval(displayTime, 1000);
    }
    function stopTime() {
        clearInterval(ticker);
        resetTime();
        if(count < question.length - 1) {
            setTimeout(startTime, 2000);
            setTimeout(displayQuestion, 3000);
        }
    }

    resetTime();

// Display Images With Answer
    function displayImage() {
        if(count === 0) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/pawn.jpg">');
        }
        else if(count === 1) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/ottawa.jpg">');
        }
        else if(count === 2) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/neil_armtstron_hi.jpg">');
        }
        else if(count === 3) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/19.jpg">');
        }
        else if(count === 4) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/whale.jpg">');
        }
        else if(count === 5) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/canbera.jpg">');
        }
        else if(count === 6) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/seahorse_4_CALENDAR.jpeg">');
        }
        else if(count === 7) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/sulphur.png">');
        }
        else if(count === 8) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/Google-1.png">');
        }
        else if(count === 9) {
            $("#image-holder").show();
            $("#image-holder").html('<img src="assets/images/earth.jpg">');
        }
    }

 // Show Results Function   
    function showResults() {
        $("#correct-holder").show();
        $("#correct-holder").html("Correct: " + correct);
        $("#incorrect-holder").show();
        $("#incorrect-holder").html("Incorrect: " + incorrect);
        $("#unanswered-holder").show();
        $("#unanswered-holder").html("No Answered: " + unanswered);
        $("#restart-holder").show();
        $("#restart-holder").html("Play again!");
    }

// Reset Results Function 
    function resetResults() {
        correct = 0;
        incorrect = 0;
        unanswered = 0;
    }

// Start Game Function
    function startGame() {
        $(".start").hide();
        startTime();
        displayQuestion();
    }

// Start Game On Click
  $(".start").on("click", function() {
    startGame();
  });
});
