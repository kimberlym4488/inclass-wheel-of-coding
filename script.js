var startButton = document.querySelector(".start-button");
var timerCountEl = document.querySelector(".timer-count");
var secondsLeft = 5;
var wordBlank = document.querySelector(".word-blanks")
var answer = 'JavaScript'.split('');
var unsolved = ["J","_","v","_","S","_","_","_","p","_"];
var playing = false;
var wins = 0;
var losses = 0

wordBlank.textContent = unsolved.toString().replaceAll(",", " ");

startButton.addEventListener("click", countDown);
//Start Button should decrement timer.


function countDown() {
  secondsLeft = 5;
  playing === true;
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerCountEl.textContent = secondsLeft;
    //now we want the timer to start

        if(secondsLeft === 0) {
          clearInterval(timerInterval);
          playing === false;
            console.log(secondsLeft);
        }
        //now we want the timer to stop, and start over at 5 when the user starts again.

//WILL call FUNCTION here for the you lost or you win and to add to wins/losses.
    }, 1000);
}

//User should be able to type in letters to fill in the word.
document.addEventListener("keydown", function(e){
    var letter = e.key;
    console.log(letter);
    if(answer.includes(letter)){
        unsolved[answer.indexOf(letter)] = letter;
        console.log(letter);
    }
  }
)

