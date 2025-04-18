var firstPlayer = []; // not a div, ARRAY
var secondPlayer = []; // not a div, ARRAY
var playedCards = []; // not a div, ARRAY
var cards = []; // not a div, ARRAY
var $player1Count = $("#player1Count"); //NOT to be confused with the array firstPlayer, a div
var $player2Count = $("#player2Count"); // a div
var $draw = $("#draw"); // a div
var $firstPlayer = $("#firstPlayer"); // a div
var $secondPlayer = $("#secondPlayer"); // a div
var $firstPlayerSuit = $("#firstPlayerSuit");  // a div
var $secondPlayerSuit = $("#secondPlayerSuit"); // a div
var $firstPlayerNumber = $("#firstPlayerNumber"); // a div
var $secondPlayerNumber = $("#secondPlayerNumber");
var $winner = $("#winner"); // a div
var number1;
var number2;
var suit1;
var suit2;
var numberImg1;
var numberImg2;


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

for (i=0; i<half; i++) { // This for loop gives the firstPlayer array the first half of the pre-shuffled deck

    firstPlayer.push(cards[i]);

}


cards.splice(0, half); // Array cards gets spliced in half so it now only has 26

secondPlayer = cards; // Gives the remaining 26 cards to secondPlayer array

$player1Count.html(firstPlayer.length); // Puts the length of array firstPlayer in the div player1Count

$player2Count.html(secondPlayer.length); // Puts the length of array secondPlayer in the div player2Count


function endGame(){

    if(firstPlayer.length == 0){

        $winner.html("GAME OVER </br> Player Two Wins </br> Player One has no more cards to play.");

    }

    if (secondPlayer.length == 0){

        $winner.html("GAME OVER </br> Player One Wins </br> Player Two has no more cards to play.");

    }

    $winner.css("color", "red");

    $winner.css("font-weight", "bold");

    $("#end").css("display", "none");

    $firstPlayerNumber.html("");

    $secondPlayerNumber.html("");

    $draw.off();

}


function assign(){ // assign function, originally 1st inside draw function, still contains all previous notes

    $firstPlayer.css("border-color", "black");

    $secondPlayer.css("border-color", "black");

    if (firstPlayer.length == 0 || secondPlayer.length == 0){

        endGame();

    }

    console.log("assign");

    $firstPlayerSuit.empty();
    
    $secondPlayerSuit.empty();

    $firstPlayerSuit.css("display", "block");

    $secondPlayerSuit.css("display", "block");

    number1 = firstPlayer[0][0];

    number2 = secondPlayer[0][0];

    $firstPlayerNumber.html(number1);

    $secondPlayerNumber.html(number2);

    suit1 = firstPlayer[0][1];

    suit2 = secondPlayer[0][1];

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

        for (i=0; i<number1; i++) {

            $firstPlayerSuit.append(suit1);

        };

    } else { // Now it's saying, if number1 is NOT less than 11

        if (number1 == 11) { // If number1 is equal to 11 

            numberImg1 = "<img src='./images/jack.png'/>"; // We create a new value, numberImg1, and define it as a png of a jack

            $firstPlayerSuit.append(suit1); // Instead of appending the suit as the same number of the card, we only append it once

            $firstPlayerNumber.html(numberImg1); // Where we would originally put number1, now we put the face card (jack)

        }

        if (number1 == 12) { // This is basically the same as above, but now for a queen

            numberImg1 = "<img src='./images/queen.png'/>";

            $firstPlayerSuit.append(suit1);

            $firstPlayerNumber.html(numberImg1);

        }

        if (number1 == 13) {

            numberImg1 = "<img src='./images/king.png'/>";

            $firstPlayerSuit.append(suit1);

            $firstPlayerNumber.html(numberImg1);

        }

    } // This ends the "if number1 is equal to 11" thing. The code that follows is basically the same, but for player 2


    if (number2<11) {

        for (i=0; i<number2; i++) {

            $secondPlayerSuit.append(suit2);

        };

    } else { 

        if (number2 == 11) {  

            numberImg2 = "<img src='./images/jack.png'/>"; 

            $secondPlayerSuit.append(suit2);

            $secondPlayerNumber.html(numberImg2);

        }

        if (number2 == 12) { // This is basically the same as above, but now for a queen

            numberImg2 = "<img src='./images/queen.png'/>";

            $secondPlayerSuit.append(suit2);

            $secondPlayerNumber.html(numberImg2);

        }

        if (number2 == 13) {

            numberImg2 = "<img src='./images/king.png'/>";

            $secondPlayerSuit.append(suit2);

            $secondPlayerNumber.html(numberImg2);

        }

    } // This ends the "if number2 is equal to 11" stuff



 // I commented the following code out because the code above is basically it and more, causing the following to become redundant

 /*    for (i=0; i<number1; i++) { // This is what puts multiple amounts of the suits on the player 1 cards

        $firstPlayerSuit.append(suit1);

    }

    for (i=0; i<number2; i ++) { // This is what puts multiple amounts of the suits on the player 2 cards

        $secondPlayerSuit.append(suit2);

    }
 */
    playedCards.push(firstPlayer[0]); // Puts the player 1 first card inside the playedCards array

    playedCards.push(secondPlayer[0]); // Puts the player 2 first card ubsude the playedCards array

    firstPlayer.splice(0,1); // We start at zero and take off one thing, aka the card...v

    secondPlayer.splice(0,1); // So it takes off the entire first card including the suit

    $player1Count.html(firstPlayer.length);

    $player2Count.html(secondPlayer.length);

    console.log("call greater");

    greater();

} // ends the "assign" function


function war(){ // war function, originally 3rd inside draw function, still contains original notes

    $winner.html("This means war!");

    console.log("war");

    for (i=0; i<3; i++) { // This for loop basically takes 3 of player 1's and 3 of player 2's cards

        playedCards.push(firstPlayer[0]); // Taking player 1's first card and putting it in playedCards array

        playedCards.push(secondPlayer[0]); // Taking player 2's second card and putting it in playedCards array

        console.log(playedCards.length);

        firstPlayer.splice(0,1); // You already know what splice does, it starts at 0 (the first item in the array), and takes off one...v

        secondPlayer.splice(0,1); // so now what was in the second place is now in the first place. Example: 1,2,3 becomes 2,3

        $player1Count.html(firstPlayer.length);

        $player2Count.html(secondPlayer.length);

        console.log("put down a card", number1, number2);

    }

    $firstPlayerSuit.css("display", "none"); // This "removes" the hearts, clubs, or whatever suit from player one...v

    $secondPlayerSuit.css("display", "none"); // since "display" and "none" are seperated by commas, not semicolons, its like display:none

    numberImg1 = "<img style='height:14rem;' src='./images/cards.png'/>"; // Assigning numberImg1 to a png of a face-down card

    $firstPlayerNumber.html(numberImg1); // puts the png of the face-down card in the div firstPlayerNumber. The code below does the same

    numberImg2 = "<img style='height:14rem;' src='./images/cards.png'/>";

    $secondPlayerNumber.html(numberImg2);

    var audio = new Audio('card.mp3'); // we create a new variable, an audio called... audio

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

} // ends the "war" function


function greater(){ // the greater function, originally 2nd inside draw function, contains (most) original notes

    console.log("greater");

    if (number1 > number2) { // If number1, the number on player 1's card, is greater than player 2's card...

        $winner.html("Player One Wins");

        $firstPlayer.css("border-color", "red");

        for (i=0; i<playedCards.length; i++) { // At this point, playedCards is 2 in length

            firstPlayer.push(playedCards[i]); // This gives player 1 both of the cards in the array playedCards, since i = 2

            console.log("pushed a card to player one");
        }

        $player1Count.html(firstPlayer.length);

        playedCards=[];

    } else if (number2 > number1) { // If number 2 is greater than number 1

        $winner.html("Player Two Wins");

        $secondPlayer.css("border-color", "red");

        for (i=0; i<playedCards.length; i++) {

            secondPlayer.push(playedCards[i]);

            console.log("pushed a card to player two");
        }

        $player2Count.html(secondPlayer.length);

        playedCards=[];

    } else if (number1 == number2) { // If draw

        war();

    }

} // the "greater" function ends



$draw.on('click', function() { // the convoluted draw function (UPTD: No longer an eye sore)

    assign();

    $("#practice").html("Drew Cards Successfully");

}); // the convoluted draw function ends