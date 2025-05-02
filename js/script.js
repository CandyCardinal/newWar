var player = []; // not a div, ARRAY
var computer = []; // not a div, ARRAY
var playedCards = []; // not a div, ARRAY
var cards = []; // not a div, ARRAY
var $playerCount = $("#playerCount"); //NOT to be confused with the array player, a div
var $computerCount = $("#computerCount"); // a div
var $draw = $("#draw"); // a div
var $player = $("#player"); // a div
var $computer = $("#computer"); // a div
var $playerSuit = $("#playerSuit");  // a div
var $computerSuit = $("#computerSuit"); // a div
var $playerNumber = $("#playerNumber"); // a div
var $computerNumber = $("#computerNumber");
var $winner = $("#winner"); // a div
var $playerAnswer = $("#playerAnswer");
var $submit = $("#submit");
var number1;
var number2;
var suit1;
var suit2;
var numberImg1;
var numberImg2;
var compare = 0;
var chosen = 0;
var winner = 0;
var integerChoice = 0;
var audio = new Audio('card.mp3'); // we create a new variable, an audio called... audio
var addition = 0;
var multiplication = 0;
var subtraction = 0;
var arithmetic = 0;



for (i=1; i<14; i++) {     // The method of making the deck of cards begins.

    for (k=1; k<5; k++) {

        var j = [i,k];
        cards.push(j);

    }

}     // Deck of cards is done being made


cards.shuffle = function() {     // The shuffle function begins

    console.log("shuffle");
    var input = this;

    for (var i = cards.length-1; i>=0; i--) {

        var randomIndex = Math.floor(Math.random()*(i+1));

        var itemAtIndex = cards[randomIndex][0];

        var itemAtSecond = cards[randomIndex][1];

        input[randomIndex][0] = input[i][0];

        input[randomIndex][1] = input[i][1];

        input[i][0] = itemAtIndex;

        input[i][1] = itemAtSecond;

    }

    return input;

}     // The shuffle function ends



cards.shuffle(); // Shuffles the cards

var half = cards.length/2; // Defining var half as half the length of array cards

for (i=0; i<half; i++) { // This for loop gives the player array the first half of the pre-shuffled deck

    player.push(cards[i]);

}


cards.splice(0, half); // Array cards gets spliced in half so it now only has 26

computer = cards; // Gives the remaining 26 cards to computer array

$computer.unbind("click"); // turns off the ability to click winner until math options is opened

$player.unbind("click");

$playerCount.html(player.length); // Puts the length of array player in the div playerCount

$computerCount.html(computer.length); // Puts the length of array computer in the div computerCount


function endGame(){

    if(player.length == 0){

        $winner.html("GAME OVER </br> Player Two Wins </br> Player One has no more cards to play.");

    }

    if (computer.length == 0){

        $winner.html("GAME OVER </br> Player One Wins </br> Player Two has no more cards to play.");

    }

    $winner.css("color", "red");

    $winner.css("font-weight", "bold");

    $("#end").css("display", "none");

    $playerNumber.html("");

    $computerNumber.html("");

    $draw.off();

} // endGame function ends


$draw.on('click', function() { // the convoluted draw function (UPTD: No longer an eye sore)

    if (arithmetic == 1) {

        $("#submit").css("display", "block");

        $("#playerAnswer").css("display", "block");

    }

    $('input').val('');

    assign();

    //$("#practice").html("Drew Cards Successfully");

}); // the convoluted draw function ends


$submit.on('click', function() {

    playerAnswer = $playerAnswer.val().trim(); // playerAnswer is the value of the player's input
    
    submit();

})

function assign(){ // assign function, originally 1st inside draw function, still contains all previous notes

    $player.css("border-color", "black");

    $computer.css("border-color", "black");

    if (player.length == 0 || computer.length == 0){

        endGame();

    }

    console.log("assign");

    $playerSuit.empty();
    
    $computerSuit.empty();

    $playerSuit.css("display", "block");

    $computerSuit.css("display", "block");

    number1 = player[0][0];

    number2 = computer[0][0];

    $playerNumber.html(number1);

    $computerNumber.html(number2);

    audio.play();

    suit1 = player[0][1];

    suit2 = computer[0][1];

    if (integerChoice == 1){ // If integers, negative numbers, are allowed

        if (suit1 == 1){ 

            number1 = (-1)*number1; // Now, number1 = -number1

        }

        
        if (suit1 == 2){ 

            number1 = (-1)*number1; // Same as above

        }

        
        if (suit2 == 1){ 

            number2 = (-1)*number2;

        }

        if (suit2 == 2){ 

            number2 = (-1)*number2;

        }

    }

    if (suit1 == 1) {

        suit1 = "<img src='./images/hearts.png'/>";

    }

    if (suit1 == 2) {

        suit1 = "<img src='./images/diamonds.png'/>";

    }

    if (suit1 == 3) {

        suit1 = "<img src='./images/clubs.png'/>";

    }

    if (suit1 == 4) {

        suit1 = "<img src='./images/spades.png'/>";

    }


    if (suit2 == 1) {

        suit2 = "<img src='./images/hearts.png'/>";

    }

    if (suit2 == 2) {

        suit2 = "<img src='./images/diamonds.png'/>";

    }

    if (suit2 == 3) {

        suit2 = "<img src='./images/clubs.png'/>";

    }

    if (suit2 == 4) {

        suit2 = "<img src='./images/spades.png'/>";
        
    }


    if (number1<11) { // This is basically saying, if number1 < 11, then run the code as usual. The amount of suits appended will equal the number of the card

        for (i=0; i<(Math.abs(number1)); i++) {

            $playerSuit.append(suit1);

        };

    } else { // Now it's saying, if number1 is NOT less than 11

        if (number1 == 11 || number1 == -11) { // If number1 is equal to 11 

            numberImg1 = "<img src='./images/jack.png'/>"; // We create a new value, numberImg1, and define it as a png of a jack

            $playerSuit.append(suit1); // Instead of appending the suit as the same number of the card, we only append it once

            $playerNumber.html(numberImg1); // Where we would originally put number1, now we put the face card (jack)

        }

        if (number1 == 12 || number1 == -12) { // This is basically the same as above, but now for a queen

            numberImg1 = "<img src='./images/queen.png'/>";

            $playerSuit.append(suit1);

            $playerNumber.html(numberImg1);

        }

        if (number1 == 13 || number1 == -13) {

            numberImg1 = "<img src='./images/king.png'/>";

            $playerSuit.append(suit1);

            $playerNumber.html(numberImg1);

        }

    } // This ends the "if number1 is equal to 11" thing. The code that follows is basically the same, but for player 2


    if (number2<11) {

        for (i=0; i<(Math.abs(number2)); i++) {

            $computerSuit.append(suit2);

        };

    } else { 

        if (number2 == 11 || number2 == -11) {  

            numberImg2 = "<img src='./images/jack.png'/>"; 

            $computerSuit.append(suit2);

            $computerNumber.html(numberImg2);

        }

        if (number2 == 12 || number2 == -12) { // This is basically the same as above, but now for a queen

            numberImg2 = "<img src='./images/queen.png'/>";

            $computerSuit.append(suit2);

            $computerNumber.html(numberImg2);

        }

        if (number2 == 13 || number2 == -13) {

            numberImg2 = "<img src='./images/king.png'/>";

            $computerSuit.append(suit2);

            $computerNumber.html(numberImg2);

        }

    } // This ends the "if number2 is equal to 11" stuff



 // I commented the following code out because the code above is basically it and more, causing the following to become redundant

 /*    for (i=0; i<number1; i++) { // This is what puts multiple amounts of the suits on the player 1 cards

        $playerSuit.append(suit1);

    }

    for (i=0; i<number2; i ++) { // This is what puts multiple amounts of the suits on the player 2 cards

        $computerSuit.append(suit2);

    }
 */
    playedCards.push(player[0]); // Puts the player 1 first card inside the playedCards array

    playedCards.push(computer[0]); // Puts the player 2 first card ubsude the playedCards array

    player.splice(0,1); // We start at zero and take off one thing, aka the card...v

    computer.splice(0,1); // So it takes off the entire first card including the suit

    $playerCount.html(player.length);

    $computerCount.html(computer.length);

    console.log("call greater");

    greater();

} // ends the "assign" function


function war(){ // war function, originally 3rd inside draw function, still contains original notes

    $draw.prop('disabled', true); // temporarily disables the draw feature during the war function

    $winner.html("This means war!");

    console.log("war");

    for (i=0; i<3; i++) { // This for loop basically takes 3 of player 1's and 3 of player 2's cards

        playedCards.push(player[0]); // Taking player 1's first card and putting it in playedCards array

        playedCards.push(computer[0]); // Taking player 2's second card and putting it in playedCards array

        console.log(playedCards.length);

        player.splice(0,1); // You already know what splice does, it starts at 0 (the first item in the array), and takes off one...v

        computer.splice(0,1); // so now what was in the second place is now in the first place. Example: 1,2,3 becomes 2,3

        $playerCount.html(player.length);

        $computerCount.html(computer.length);

        console.log("put down a card", number1, number2);

    }

    $playerSuit.css("display", "none"); // This "removes" the hearts, clubs, or whatever suit from player one...v

    $computerSuit.css("display", "none"); // since "display" and "none" are seperated by commas, not semicolons, its like display:none

    numberImg1 = "<img style='height:14rem;' src='./images/cards.png'/>"; // Assigning numberImg1 to a png of a face-down card

    $playerNumber.html(numberImg1); // puts the png of the face-down card in the div playerNumber. The code below does the same

    numberImg2 = "<img style='height:14rem;' src='./images/cards.png'/>";

    $computerNumber.html(numberImg2);

    audio.play();

    window.setTimeout(function () { // This delays the second audio so it doesn't play at the exact same time as the first

        audio.play();  

    }, 1000); // This goes by miliseconds, so this is 1 second

    window.setTimeout(function () {

        audio.play();

    }, 1800); // This is 1.8 seconds

    window.setTimeout(function() { // The fourth card that comes 

        console.log("call assign");

        assign(); // It calls assign, which takes next card and puts it on the page and then calls greater, so now we know who wins ties!!

        audio.play();

    }, 2600); // This is 2.6 seconds

    $draw.prop('disabled', false);

} // ends the "war" function

function submit() {

    console.log("run submit");

    if (addition == 1) {

        addMath();

    }

    if (subtraction == 1) {

        subtractMath();

    }

    if (multiplication == 1) {

        multiplyMath();

    }

    if (playerAnswer == answer) {

        chosen = winner;

        console.log("correct");

    } else {

        chosen = winner - 1;

        console.log("incorrect");

    }

    mathCheck();

}


function compareMath(){ // This assigns the "winner" variable with either 1 or 2, depending on who's value is greater

    console.log("run compare");

    if (number1 > number2) {

        winner = 1;

    } else {

        winner = 2;

    }


} // ends compareMath function


function addMath() {

    console.log("run add math");

    answer = number1 + number2;

} // ends addMath function


function subtractMath() {

    console.log("run subtract math");

    answer = number1 - number2;

} //ends subtractMath


function multiplyMath() {

    console.log("run multiply math")

    answer = number1*number2;

} //ends multiplyMath


function greater(){ // the greater function, originally 2nd inside draw function, contains (most) original notes

    console.log("greater");

    if (number1 === number2) { // If theres a draw

        war();

    }

    if (compare == 1) { // If compare is 1 it means it's on

        console.log("compare equals one");

        compareMath(); 

        return; //return stops the function after the return statement, so everything in this function below wont run

    }

    if (arithmetic == 1) {

        return;

    }

    if (number1 > number2) { // If number1, the number on player 1's card, is greater than player 2's card...

        $winner.html("Player One Wins");

        $player.css("border-color", "red");

        for (i=0; i<playedCards.length; i++) { // At this point, playedCards is 2 in length

            player.push(playedCards[i]); // This gives player 1 both of the cards in the array playedCards, since i = 2

            console.log("pushed a card to player one");
        }

        $playerCount.html(player.length);

        playedCards=[];

    } else if (number2 > number1) { // If number 2 is greater than number 1

        $winner.html("Player Two Wins");

        $computer.css("border-color", "red");

        for (i=0; i<playedCards.length; i++) {

            computer.push(playedCards[i]);

            console.log("pushed a card to player two");
        }

        $computerCount.html(computer.length);

        playedCards=[];

    }

} // the "greater" function ends


function mathCheck(){ // this functions sees if the player is correcto

    console.log("run mathCheck")

    if (chosen == winner){ // If the player is right

        for (i=0; i<playedCards.length; i++) { // This for loop gives the player the cards

            player.push(playedCards[i]);

            console.log("pushing cards to player");
            
        }

        $winner.html("Player One Wins");

        $player.css("border-color", "red");

        $playerCount.html(player.length);

        playedCards=[]; // empties out the played cards array

    } else if (chosen != winner) { //if the player is not right

        for (i=0; i<playedCards.length; i++) { // The cards go to the computer instead

            computer.push(playedCards[i]); 

            console.log("pushing cards to computer");

        }

        $winner.html("Computer Wins");

        $computer.css("border-color", "red");

        $computerCount.html(computer.length);

        playedCards=[];

    }

} // ends mathCheck function


$("#mathOptions").on('click', function() {

    $(".hidden").css("display", "none");

    $("#options").css("display", "block"); // Display block means it displays on screen

})

$("#compare").on('click', function() {

    $("#options").css("display", "none");

    $("#integers").css("display", "block");

    $("#compareDirections").css("display", "block");

    $("#one").css("display", "block");

    $("#two").css("display", "block");

    compare = 1;

    $player.on('click', function() {

        chosen = 1;

        mathCheck();

    })

    $computer.on('click', function() {

        chosen = 2;

        mathCheck();
        
    })

})

$("#arithmetic").on('click', function() {

    $("#options").css("display", "none");

    $("#math").css("display", "block");

    $("#submit").css("display", "block");

    $("#playerAnswer").css("display", "block");

    arithmetic = 1;

})

$("#math").on('click', function() {

    $("#math").css("display", "none");

    $("#integers").css("display", "block");

})

$("#no").on('click', function() {

    $("#integers").css("display", "none");

})

$("#yes").on('click', function() {

    $("#integers").css("display", "none");

    $("#integerDirections").css("display", "block");

})

$("#add").on('click', function() {

    $("#addDirections").css("display", "block");

    $("#playerAnswer").css("display", "block");

    $("#submit").css("display", "block");

    addition = 1;

})

$("#multiply").on('click', function() {

    $("#multiplyDirections").css("display", "block");

    $("#playerAnswer").css("display", "block");

    $("#submit").css("display", "block");

    multiplication = 1;

})

$("#subtract").on('click', function() {

    $("#subtractDirections").css("display", "block");

    $("#playerAnswer").css("display", "block");

    $("#submit").css("display", "block");

    subtraction = 1;

})

$("#one").on('click', function() {
    
    chosen = 1;

    mathCheck();

})

$("#two").on('click', function() {

    chosen = 2;

    mathCheck();

})
